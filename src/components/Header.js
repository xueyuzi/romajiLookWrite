import React, { Component } from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom"
const SubMenu = Menu.SubMenu

class Header extends Component{
    render(){
        return(
            <Menu
            mode="horizontal"
            >
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="app">
                <Link to="/app">五十音</Link>
            </Menu.Item>
            <Menu.Item key="words">
                <Link to="/words">词语</Link>
            </Menu.Item>
            </Menu>
        )
    }
}

export default Header;