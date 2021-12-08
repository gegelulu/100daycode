import React from 'react';
import Item from '../Item'

class List extends React.Component {
  render() {
    const {todoList} = this.props
    // console.log(this.props.todoList, 'todoList', todoList);
    return (
      <div>
        {todoList.map((item,index) => {
          return <Item todo={item} key={index} />
        })}
      </div>
    )
  }
}

export default List;
