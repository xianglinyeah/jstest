import React,{Component,Fragment} from "react";
import {Card,Button,Radio} from 'antd';




class Buttons extends Component{

    render() {

        return (
            <Fragment>
               <Card title='基础按钮' style={{width:"90%",margin:"30px"}}>
                   <Button type='primary' style={{marginRight:"10px"}}>Imooc</Button>
                   <Button style={{marginRight:"10px"}} >Imooc</Button>
                   <Button type='dashed' style={{marginRight:"10px"}}>Imooc</Button>
                   <Button type='danger' style={{marginRight:"10px"}}>Imooc</Button>
                   <Button disabled  style={{marginRight:"10px"}}>Imooc</Button>
               </Card>

        <Card title='图形按钮' style={{width:"90%",margin:"30px"}}>
            <Button  style={{marginRight:"10px"}}>创建</Button>
            <Button style={{marginRight:"10px"}} >编辑</Button>
            <Button  style={{marginRight:"10px"}}>删除</Button>
            <Button type='primary'  style={{marginRight:"10px"}}>搜索</Button>
            <Button type='primary'  style={{marginRight:"10px"}}>下载</Button>
        </Card>
                 <Card title='Loading按钮' style={{width:"90%",margin:"30px"}}>
                    <Button type='primary' loading={true} style={{marginRight:"10px"}}>确定</Button>
                    <Button type='primary'  shape='circle' loading={true}  style={{marginRight:"10px"}} >点击加载</Button>
                    <Button shape='circle' loading={true} style={{marginRight:"10px"}}>点击加载</Button>
                    <Button type='primary' loading={true} style={{marginRight:"10px"}}>关闭</Button>
                </Card>
                <Card title='按钮尺寸' style={{width:"90%",margin:"30px"}}>
                    <Radio  value='small'>小</Radio>
                    <Radio value='default'>中</Radio>
                    <Radio value='large'>大</Radio>
                    <Button type='primary' style={{marginRight:"10px"}}>Imooc</Button>
                </Card>

            </Fragment>
        )

    }
}

export default Buttons ;