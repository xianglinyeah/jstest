import React,{Component,Fragment} from "react";
import {Card,Form,Button,Input,Checkbox,Radio,
    Select,Switch,DatePicker,TimePicker,Upload,message,InputNumber} from 'antd';



class Reg extends Component {



    render() {


        return (
            <Fragment>
              <Card title='注册表单'>
                  <Form layout='horizontal'>
                      <Form.Item >
                          用户名：<Input placeholder='请输入用户名'></Input>
                      </Form.Item>
                      <Form.Item>
                          密码：<Input placeholder='请输入密码' type='password'></Input>
                      </Form.Item>
                      <Form.Item>
                          性别：<Radio.Group>
                          <Radio value='1'>男</Radio>
                          <Radio value='2'>女</Radio>
                      </Radio.Group>
                      </Form.Item>

                      <Form.Item>
                          年龄：<InputNumber></InputNumber>
                      </Form.Item>

                      <Form.Item>
                         <Select mode='multiple'>
                             <Select.Option value='1'>1</Select.Option>
                             <Select.Option value='2'>2</Select.Option>
                             <Select.Option value='3'>3</Select.Option>
                         </Select>
                      </Form.Item>

                      <Form.Item>
                        是否已婚： <Switch></Switch>
                      </Form.Item>

                      <Form.Item>
                          生日： <DatePicker></DatePicker>
                      </Form.Item>

                      <Form.Item>
                          地址： <Input.TextArea auto={true}>

                      </Input.TextArea>
                      </Form.Item>

                      <Form.Item>
                          早起时间：<TimePicker showtime
                                           format='YYYY-MM-DD HH:mm:ss'
                      ></TimePicker>


                      </Form.Item>

                      <Form.Item>

头像：<Upload listType='picture'></Upload>
                      </Form.Item>

                      <Form.Item>
                          <Checkbox>我已阅读过慕课协议</Checkbox>
                      </Form.Item>


                  </Form>
              </Card>
            </Fragment>
        )

    }

}

export default Reg;