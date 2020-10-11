import React,{Component,Fragment} from "react";
import {Row,Col} from 'antd';
import {formatDate} from '../../util/util';
import Axios from "../../axios";
import './index.css';
import {connect} from 'react-redux';






let timer=null;

class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            username:"梦梦",
            time:formatDate(),
            temperature:"",
            weather:""

        }
    }

    componentDidMount() {

        timer= setInterval(()=>{ this.setState({
                time:formatDate()
            })},1000);

        let getweather=(city)=>{

            Axios.jsonp({
                url:'https://restapi.amap.com/v3/weather/weatherInfo?city='+city+'&key=178c8192ed5adddcad596b63832537d9'
            }).then((res)=>{


                const data=res.lives[0];

                console.log(data.weather)


                this.setState({
                    temperature:data.temperature,
                    weather:data.weather

                })


            }).catch((err)=>{
                console.log(err)
            })

        }
        getweather("110000")


    }

    componentWillUnmount() {
        clearInterval(timer);
    }


    render(){


        return(
<Fragment>
         <Row style={{height:"60px",lineHeight:"60px",background:"white"}}>
             <Col span={24} style={{textAlign:"right"}}>
                 <span style={{margin:"0 20px"}}>欢迎,{this.state.username}</span>
                 <a style={{margin:"0 20px"}} href={"#"}>退出</a>
             </Col>

         </Row>
        <Row style={{height:"40px",lineHeight:"40px",borderTop:"2px solid orange",background:"white"}}>
           <Col span={4} style={{textAlign:'right'}}>
               <div className='title'>{this.props.name}</div>
           </Col>
            <Col span={20} style={{textAlign:"right",paddingRight:"40px"}}>
                <span style={{marginRight:"20px"}}>{this.state.time}</span>
                <span>
                   {`${this.state.weather} ${this.state.temperature}℃`}
                </span>
            </Col>
        </Row>
</Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        name:state.get("name")
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);