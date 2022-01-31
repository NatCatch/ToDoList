import { Component } from 'react';
import check from './four.png'

export class MyList extends Component {
state = {
userInput:" ",
taskList: []
}

onChangeEvent(e) {
   this.setState({userInput:e});
 
}
addItem(input) {
    if (input === '') {
        alert ("Please enter an item")    
    } else {
 let listArray = this.state.taskList;
    listArray.push(input);
    this.setState({taskList: listArray,userInput:''})
 
}
}
crossedword (event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem (input) {
    let listArray = this.state.taskList;
    listArray =[];
 this.setState({taskList: listArray })
   

}

onFormSubmit(e) {
    e.preventDefault();
}
render () {
    return (
        <div>
             <form onSubmit={this.onFormSubmit}>
                <div className="container"> 
            <input className="text" type="text"  placeholder="Type your tasks..."
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput} />
            </div>
            <div className="container"> 
        <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
        </div>
        <ul>{this.state.taskList.map((item,index) => (
    <li onClick={this.crossedword} key={index}><img src={check} width="15px"alt="flour"/> {item}</li>
))}
           
        </ul>
        <div className="container"> 
        <button onClick={() => this.deleteItem(this.state.userInput)}className="delete">DELETE</button>
        </div>
        </form>
             </div>
    )
}
}