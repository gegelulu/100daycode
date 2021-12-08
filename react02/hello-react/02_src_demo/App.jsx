import React from 'react' 
import Hello from './components/hello'
import Content from './components/example'
class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Content/>
            </div>
        )
    }
}
export default App