import React from 'react'
import {Button} from 'antd'
// import 'antd/dist/antd.less'

export default class Lift extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }
    handleAdd =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div>
            <p>React生命周期</p>
            <Button type="primary" onClick={this.handleAdd}>点击一下</Button>
            <p>{this.state.count}</p>
        </div>
    }
}