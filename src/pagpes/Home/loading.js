import React,{Component,Fragment} from "react";
import {Card,Button,Spin,Icon,Alert} from 'antd';




class Loading extends Component{


    render() {

        return (
            <Fragment>

               <Card title='spin' style={{margin:'30px auto',width:"80%"}}>
                    <Spin size='small' style={{marginRight:"20px"}}></Spin>
                    <Spin size='large' style={{marginRight:"20px"}}></Spin>
                    <Spin size='default' style={{marginRight:"20px"}}></Spin>
               </Card>
                <Card title='遮罩' style={{margin:'30px auto',width:"80%"}}>
                    <Alert message='react'
                           description='欢迎来到指定课程'
                           type='info'
                    />
                    <Alert message='react'
                           description='欢迎来到指定课程'
                           type='warning'
                    />
                    <Spin  tip='加载中。。。'>
                        <Alert message='react'
                               description='欢迎来到指定课程'
                               type='warning'

                        />
                    </Spin>
                </Card>

            </Fragment>
        )

    }







}

export default Loading;