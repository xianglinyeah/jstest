import React,{Component,Fragment} from "react";
import {Card,Button,Carousel} from 'antd';




class Slider extends Component{
    render() {
        return (
            <Fragment>
                <Card title='slider'style={{width:"80%",margin:"30px auto"}}>
                <Carousel autoplay effect='fade'>
                    <div style={{width:"100%",height:"300px"}}>
                      <img src='/assets/carousel-img/carousel-1.jpg' style={{width:"100%"}}/>
                    </div>
                    <div style={{width:"100%",height:"300px"}}>
                        <img src='/assets/carousel-img/carousel-2.jpg' style={{width:"100%"}}/>
                    </div>
                    <div style={{width:"100%",height:"300px"}}>
                        <img src='/assets/carousel-img/carousel-3.jpg' style={{width:"100%"}}/>
                    </div>
                </Carousel>
                </Card>
            </Fragment>
        )
    }
}

export default Slider;