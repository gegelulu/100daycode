# 100daycode
100day coding
React demo
### 原生JS代码复用率底，直接使用DOMapi操作，会导致页面重绘，系统开销大
- react 组件化模式 声明式编码 提高开发效率  核心为虚拟dom diffing算法
- react 核心库和 react DOM库以及周边库
### JSX语法 
  - const dom = <h3>hello world!</h3> ReactDOM.render(element,container)   for instance: ReactDOM.render(dom, document.getElementById('root'))
  - JSX 可以嵌入表达式，或者引入属性 表达式使用{}  属性值使用引号 
  - for instance: const name = "react"; const hello = <div>hello {name}</div>
  - ReactDOM.render(hello, document.getElementById('root'))
  - const formatName(user) {return user.firstName + '' + user.lastName}; const user01 = {firstName:"tom",lastName:"jerry"}
  - const ele = (
     <h3>hello, {formatName(user01)}</h3> 
   )
  - ReactDOM.render(ele,document.getElementById('root'))
  - JSX 可以作为参数或者变量 在JS代码块中运行
  - function sayHello(user) {
      if(user) {
        return <h3>hello {formatName(user)}!</h3>
      }
      return <h3>hello stranger!</h3>
   }

##### JSX指定属性  string or expression
- const ele = <span attr="something" index="2"></span>; const ele = <img src={obj.src} ></img>
- 属性命名采用小驼峰  cosnt ele = <div className="container-div" containerIndex="1"></div>
#### 指定子元素
- html标签内无内容 可以使用单标签闭合 const imgDom = <img src={data.url} />  
- 有子元素 const fatherEle = (
  <div>
    <h3>hello</h3>
    <p>world</p>
  </div>
);
- JSX会将输入内容转为string 在渲染，可以防止XSS攻击
- ReactDOM 更新元素时 只更新需要更新的部分

### 组件与props
- 函数组件与class组件
  - function test(data) {
      return <div>This is {data.params}</div>
   }
  - class Test extends React.Component {
      render() {
        return <div>This is {this.data.params}</div>
      }
   }  
- React元素可以是DOM元素 也可以是自定义元素 const ele = <div />; const ele = <Test params="trying" />  
- props 数据，可以集中处理，也可以针对某一个组件单独维护，react组件渲染函数要求是 纯函数，即不改变入参状态
- 组件 抽取，拆分 组合 复用 首字母必须大写

### state&生命周期



### 事件处理