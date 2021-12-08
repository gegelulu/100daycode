import React from "react"
import List from "./components/List"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './css/index.css'
class App extends React.Component {
  state = { todoList: [
    { id: 1, label: "吃饭", done: false },
    { id: 2, label: "睡觉", done: false },
    { id: 3, label: "代码", done: false },
  ] }
  getTodo = (data) => {
    console.log('get data',data);
    let newList = [data,...this.state.todoList]
    this.setState({todoList:newList})
  }
  render() {
    return (
      <div className="app-container">
        <Header getTodo={this.getTodo} />
        <List todoList ={this.state.todoList}/>
        <Footer/>
      </div>
    )
  }
}
export default App
