import React,{Component,Fragment} from "react";
import {Row, Col, Radio, Card} from 'antd';

import Header from "./components/header";
import Footer from "./components/footer";
import './style.css';
import Navleft from "./components/navleft";
import Home from "./pagpes/Home";
import store from "./components/header/store";
import {Provider} from 'react-redux';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Buttons from './pagpes/Home/buttons';
import Nomatch from "./pagpes/Home/nomatch";
import Modals from './pagpes/Home/modals';
import Loading from "./pagpes/Home/loading";
import Notification from "./pagpes/Home/notification";
import Message from "./pagpes/Home/message";
import Tabsa from "./pagpes/Home/tabs";
import Gallery from "./pagpes/Home/gallery";
import Slider from "./pagpes/Home/slider";
import Loginform from "./pagpes/Home/loginform";
import Reg from './pagpes/Home/reg';
import Tablea from "./pagpes/Home/table";
import LoadableComponent from './pagpes/Home/loadable';
import Hightable from "./pagpes/Home/hightable";
import City from './pagpes/Home/city/index';
// const baseapi='http://106.12.220.186:4000/api';

class Admin extends Component{
    render(){
        return(

            <Provider store={store}>
            <Row className='container'>
                <BrowserRouter>
                <Col span='4' className='left'>
                   <Navleft></Navleft>
                </Col>
                <Col span='20' className='right' style={{background:"lightgray"}}>
                     <Header/>
                    <Row className='content'  >
                        <div className='crill' style={{width:"100%"}}>
                        <Switch>
                            <Route path='/ui/buttons' component={Buttons}></Route>
                            <Route path='/ui/modals' component={Modals}></Route>
                            <Route path='/ui/loadings' component={Loading}></Route>
                            <Route path='/ui/notification' component={Notification}></Route>
                            <Route path='/ui/messages' component={Message}></Route>
                            <Route path='/ui/tabs' component={Tabsa}></Route>
                            <Route path='/ui/gallery' component={Gallery}></Route>
                            <Route path='/ui/carousel' component={Slider}></Route>
                            <Route path='/form/login' component={Loginform}></Route>
                            <Route path='/form/reg' component={Reg}></Route>
                            <Route path='/table/basic' component={LoadableComponent}></Route>
                            <Route path='/table/high' component={Hightable}></Route>
                            <Route path='/city' component={City}></Route>
                            <Route  component={Nomatch}></Route>
                        </Switch>
                        </div>
                    </Row>
                    <Footer></Footer>
                </Col>
                </BrowserRouter>
            </Row>
            </Provider>

        )
    }
}

export default Admin;