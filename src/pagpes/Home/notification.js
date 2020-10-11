import React,{Component,Fragment} from "react";
import {Card,Button,notification} from 'antd';




class Notification extends Component{


    render() {

        return (
            <Fragment>
                <Card title='notification' style={{margin:"30px auto",width:"80%"}}>
                    <Button type='primary'
                            onClick={()=>this.handleopen("topRight")}
                    >success</Button>
                </Card>

                <Card title='notification controll' style={{margin:"30px auto",width:"80%"}}>
                    <Button type='primary'
                            onClick={()=>this.handleopen("topLeft")}
                    >success</Button>
                </Card>
            </Fragment>
        )



    }



    handleopen(value){



            notification.config({
                placement:value
            })
        

        notification.success({
            message:"salary is coming",
            description:"last month"
        })
    }




}

export default Notification;