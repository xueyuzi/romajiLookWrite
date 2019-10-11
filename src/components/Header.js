import React, { Component } from 'react';
import {Menu} from "antd";
import {Link,withRouter} from "react-router-dom"
class Header extends Component{
    render(){
        console.log(this.props)
        return(
            <Menu
            mode="horizontal"
            selectedKeys = {[this.props.history.location.pathname]}
            >
            <Menu.Item key="/">
                <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="/app">
                <Link to="/app">五十音</Link>
            </Menu.Item>
            <Menu.Item key="/words">
                <Link to="/words">词语</Link>
            </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Header);