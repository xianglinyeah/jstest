import React,{Component,Fragment} from "react";
import {Card,Button,message} from 'antd';




class Message extends Component{


    render() {

        return (
            <Fragment>
                <Card title='message' style={{width:"80%",margin:"30px auto"}}>
                    <Button type='primary' style={{marginRight:"30px"}}
                            onClick={()=>{this.handleclick()}}
                    >success</Button>
                    <Button type='primary' style={{marginRight:"30px"}}>info</Button>
                    <Button type='primary' style={{marginRight:"30px"}}>warning</Button>
                    <Button type='primary' style={{marginRight:"30px"}}>loading</Button>
                </Card>
            </Fragment>
        )



    }




    handleclick(){

        message.success("成功")
    }



}

export default Message;