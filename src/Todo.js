import React, { Component } from 'react';
import fire from './fire';

let getId="";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItems:[]
        }  
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.addData=this.addData.bind(this);
        this.delete=this.delete.bind(this);
        this.edit=this.edit.bind(this);
        this.update=this.update.bind(this);
        
    }
    
    
    onChangeHandler(event){
        var inputVal = event.target.value; 
        this.setState({
            item:inputVal
        })
            
    }

        
    addData(){
        var inputVal=this.state.item;
        var itemIntance=this.state.todoItems;
        itemIntance.push(inputVal);
        this.setState({
            todoItems:itemIntance,
            item:""
        }, () => {
                window.localStorage.setItem('savedList', JSON.stringify(this.state.todoItems));
        })
        console.log(this.state.todoItems)
    }
    
    componentDidMount() {
        const list = window.localStorage.getItem('savedList');
        const parsedList = JSON.parse(list);

        this.setState({
            todoItems: parsedList,
    })
}
    
    delete(event){
        var id = event.target.id;
        var itemIntance=this.state.todoItems;
        itemIntance.splice(id,1);
        this.setState({ todoItems: itemIntance }, () => {
        window.localStorage.setItem('savedList', JSON.stringify(this.state.todoItems));
        })
        
    }
    
    edit(event){
        getId=event.target.id;
        this.setState({
            item:this.state.todoItems[event.target.id]
        });
        
        document.getElementById("adddata").style.display="none";
        document.getElementById("update").style.display="block";
        event.target.parentNode.style.borderBottom="2px solid red";
        event.target.style.display="none";
    }
    
    update(){
        var y = this.state.todoItems;
        y[getId]=this.state.item;
        this.setState({
            todoItems:y,
            item:""
        }, () => {
                window.localStorage.setItem('savedList', JSON.stringify(this.state.todoItems));
        });
        
        document.getElementById("adddata").style.display="block";
        document.getElementById("update").style.display="none";
        
        var r=document.getElementsByClassName("ed");
        for(var i=0;i<r.length;i++){
            r[i].style.display="block";
        }
        
    }
    
    
    
    render(){
        var itemlit=this.state.todoItems.map((e,i)=>{
            return(
            <li key={i}>{e} 
            <span id={i} onClick={this.delete} className="del">X</span>
            <span id={i} onClick={this.edit} className="ed">edit</span>
            </li>
            )
        });
        return(
            <div>
            <div className="header">React Todo</div>
            <div className="body">
            <ul>
            {itemlit}
            </ul>
            </div>
            <div className="aa">
                <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                <button type="button" id="adddata" onClick={this.addData}>+</button>
                <button type="button" id="update" onClick={this.update}>update</button>
            
            
            </div>
            </div>
        )
    }
}

export default Todo;