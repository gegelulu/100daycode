import React from 'react';
import './index.css'
class Item extends React.Component {
  state = {mouse:false}
  enter = (flag) => {
    console.log(flag);
    return () => {
      this.setState({mouse:flag})
    }
  }
  render() {
    const {todo} = this.props
    const {mouse} = this.state
    return (
      <p style={{backgroundColor:mouse ? '#ddd': 'white'}} className='todo-item' onMouseEnter={this.enter(true)} onMouseLeave={this.enter(false)}>
        <span><input type="checkbox" defaultChecked={todo.done}/>{todo.label}</span><button className="btn" style={{display: mouse ? 'inline-block' : 'none'}}>delete</button>
      </p>
    )
  }
}

export default Item;
