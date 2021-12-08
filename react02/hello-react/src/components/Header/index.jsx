import React,{Component} from 'react';
import {nanoid} from 'nanoid'

class Header extends Component {
  add = (e) => {
    if(e.keyCode == 13) {
      if(e.target.value.trim() == '') {
        alert('please enter something')
        return
      } 
      let obj = {
        id: nanoid(),
        label: e.target.value,
        done: false,
      }
      this.props.getTodo(obj)
      e.target.value = ''
    }
    
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="type something and enter to add it into todoList" onKeyUp={this.add} />
      </div>
    )
  }
}

export default Header;
