import React, { Component } from 'react';
import {Divider} from "antd";

class Footer extends Component{
    render (){
        return (
        <Divider style={{ bottom: "10px",position: "absolute",top: "auto"}}>
        Make by <a href="https://xueyuzi.com/">@鳕鱼子</a>
        </Divider>
        )
    }
}
export default Footer