import React,{Component,Fragment} from "react";
import {Card,Button,Form,Input,Checkbox} from 'antd';




class Loginform extends Component{



    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }

    render() {


        return (
            <Fragment>
       <Card title='form'  style={{width:"80%",margin:"30px auto"}}>



               <Form style={{width:"440px",border:'1px solid red',textAlign:"center",padding:"30px"}}

                     initialValues={{
                         remember: true,
                     }}
                     onFinish={()=>{this.onFinish()}}>

                   <Form.Item>
                       <Input placeholder='please enter name'
                              rules={[{ required: true, message: 'Please input your username!' }
                              ]}
                       ></Input>
                   </Form.Item>
                   <Form.Item
                   >
                       <Input placeholder='please enter password' type='password'
                              rules={[{ required: true, message: 'Please input your username!' }
                              ]}

                       ></Input>
                   </Form.Item>
                   <Form.Item  valuePropName="checked">
                       <Checkbox style={{float:'left'}}>Remember me</Checkbox>
                       <a href='#' style={{float:'right'}}>忘记密码</a>
                   </Form.Item>
                   <Form.Item >
                       <Button className='primary' htmlType="submit">登录</Button>
                   </Form.Item>
               </Form>

</Card>

                <Card title='form'>
                    <Form layout='inline'>
                        <Form.Item>

                            <Input placeholder='please enter name'></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder='please enter password'></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary'>登录</Button>
                        </Form.Item>


                    </Form>
                </Card>

            </Fragment>
        )

    }





    onFinish(values){

       console.log(values)

    }




}

export default Loginform;