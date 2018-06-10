import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import luomaData from "./data/luoma"
import { Card, Button,Divider } from 'antd';

class App extends Component {
  getLuoma = () => {
    let choose = luomaData[parseInt(Math.random() * luomaData.length)]
    this.setState({
      luomaData:{
        luoma: choose.luoma,
        pin: choose.pin,
        pian: choose.pian
      }
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      luomaData: {
        luoma: "请点击下一个",
        pin: "",
        pian: ""
      },
      showLuoma:true,
      showPin:true,
      showPian:true
    }
  }

  render() {
    return (
      <div className="App">
        
        <Card style={{ width: 300,fontSize:"30px",margin:"0 auto" }} title={this.state.showLuoma?this.state.luomaData.luoma:"※※※"} className="showLuoma">
          
          <p>{this.state.showPin ? this.state.luomaData.pin : "※※※"}</p>
          <p>{this.state.showPian?this.state.luomaData.pian:"※※※"}</p>
        </Card>
        <div  style={{ marginTop:"20px"}}>
          <Button  style={{ margin:"0 20px"}}  type={this.state.showLuoma?"primary":""} onClick={()=>{this.setState({showLuoma:!this.state.showLuoma})}}>罗马音</Button>        
          <Button  style={{ margin:"0 20px"}}  type={this.state.showPin?"primary":""} onClick={()=>{this.setState({showPin:!this.state.showPin})}}>平假名</Button>        
          <Button style={{ margin:"0 20px"}} type={this.state.showPian?"primary":""} onClick={()=>{this.setState({showPian:!this.state.showPian})}}>片假名</Button>        
          <Button style={{ margin:"0 20px"}} type="primary" onClick={this.getLuoma}>下一个</Button>
        </div>


        <Divider style={{ bottom: "10px",position: "absolute",top: "auto"}}>
        Make by <a href="https://xueyuzi.com/">@鳕鱼子</a>
        </Divider>
      </div>
    );
  }
}

export default App;
