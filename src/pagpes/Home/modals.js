import React,{Component,Fragment} from "react";
import {Card,Button,Modal} from 'antd';




class Modals extends Component{
    constructor(props) {
        super(props);
        this.state={
             show1:false,
             show2:false,
             show3:false,
             show4:false
        }
    }

    render() {

        return (
            <Fragment>
       <Card title='基础框' style={{margin:"50px"}}>
           <Button onClick={()=>this.handleopen("show1")}>open</Button>
           <Button onClick={()=>this.handleopen("show2")}>自定义页脚</Button>
           <Button onClick={()=>this.handleopen("show3")}>顶部20px</Button>
           <Button onClick={()=>this.handleopen("show4")}>中间</Button>
       </Card>
                <Card title='信息确认框' style={{margin:"50px"}}>
                    <Button onClick={()=>this.handleconfrim("show1")}>confirm</Button>
                    <Button onClick={()=>this.handleconfrim("show2")}>info</Button>
                    <Button onClick={()=>this.handleconfrim("show3")}>success</Button>
                    <Button onClick={()=>this.handleconfrim("show4")}>warning</Button>
                </Card>

                <Modal title='react' onCancel={()=>{this.handlecancel()}}
                       visible={this.state.show1}
                >
                    <p>欢迎学习</p>

                </Modal>
                <Modal title='react' onCancel={()=>{this.handlecancel()}}
                       okText='下一步'
                       visible={this.state.show2}
                >
                    <p>欢迎学习</p>

                </Modal>

                <Modal title='react' onCancel={()=>{this.handlecancel()}}
                       okText='下一步'
                       visible={this.state.show2}
                >
                    <p>欢迎学习</p>

                </Modal>

                <Modal title='react' onCancel={()=>{this.handlecancel()}}
                       okText='下一步'
                       visible={this.state.show2}
                >
                    <p>欢迎学习</p>

                </Modal>

                <Modal title='react'
                       wrapClassName='vertical-center-modal'
                       onCancel={()=>{this.handlecancel()}}
                       okText='下一步'
                       visible={this.state.show4}
                >
                    <p>欢迎学习</p>

                </Modal>

            </Fragment>
        )

    }
    handleopen(type){

        this.setState({

           [type]:true

        })

    }

    handlecancel(){
        this.setState({
            show1:false,
            show2:false,
            show3:false,
            show4:false
        })
    }

    handleconfrim(type){
            Modal.confirm({
                title:"确认",
                content:"你确定吗",
                onOk(){},
                oncancel(){}
            })

    }
}

export default Modals ;