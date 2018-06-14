import React, { Component } from "react"
import Papa from "papaparse"
import { getListRanDom } from "../common"
import {Button,Card} from "antd";
import { list } from "postcss";
class Words extends Component {
    state = {
        fuciData: [],
        randomContext:{}
    }
    componentDidMount() {
        Papa.parse("http://localhost/n2fuci.csv", {
            download: true,
            complete: (e) => {
                var fucis = []
                var l = 1;
                e.data.forEach((d, i) => {
                    if (d[0] === "") {
                        var fuci = {}
                        if (i !== 0) {
                            fuci.title = d[1];
                            fuci.content = e.data.slice(l, i);
                            fucis.push(fuci)
                            l = i + 1;
                        }
                    }
                })
                this.setState({
                    fuciData: fucis
                })
                console.log(this.getRandom(1))
            }
        })
    }
    getRandom(i){
        var randomData =  getListRanDom(this.state.fuciData[i].content)
        this.setState({
            randomContext:{key:randomData[0],value:randomData[1]}
        })
    }
    render() {

        var fuciRandom = this.state.fuciData.map(e => (
            <li>{e.title}  ： {e.content}</li>
        ))

        var randomContext = this.state.randomContext
        console.log(randomContext)
        return (
            <div>
            
                <Card style={{ width: 300,fontSize:"30px",margin:"0 auto" }} title={randomContext.key}>
                    <p>{randomContext.value}</p>
                </Card>
                <div  style={{ marginTop:"20px",justifyContent:"center",display:"flex"}}>
                    <Button onClick={()=>this.getRandom(1)} type="primary">下一个</Button>
                </div>
            </div>
        )
    }
}

export default Words