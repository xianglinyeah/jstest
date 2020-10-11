import React,{Component,Fragment} from "react";
import { Menu } from 'antd';
import menuList from "../../shuju";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';





class Navleft extends Component{

    constructor(props) {
        super(props);
        this.state={
            mainmenu:[]
        }
    }

    componentDidMount() {


        this.setState({
            mainmenu:menuList
        })


    }

    render() {

        const {SubMenu} = Menu;

        return (
            <div style={{background:'#001529',height:"100vh"}}>
                <div className='logo' >
                    <img src='/assets/logo-ant.svg' alt='' style={{width:"75px",marginRight:"10px",marginBottom:"20px",marginTop:"10px"}}/>
                    <span style={{fontSize:"19px",color:"white"}}>Imooc MS</span>
                </div>
            <Menu mode="vertical" theme="dark" >

                {
                    this.state.mainmenu.map((item, index) => {
                        return (


                            <SubMenu key={item.key} title={item.title}
                                     style={{textAlign:"center"}}
                                     onClick={()=>this.props.handleclick(item.title)}>

                                {
                                    item.children && item.children.map((subitem, subindex) => {
                                        return (

                                            <Menu.Item key={subitem.key}>

                                               <Link to={subitem.key}>{subitem.title}</Link>

                                            </Menu.Item>
                                        )
                                    })}




                            </SubMenu>


                        )
                    })
                }
            </Menu>
            </div>
        )



    }





}
const mapStateToProps=(state)=>{

    return{

    }

}
const mapDispatchToProps=(dispatch)=>{
    return {

        handleclick(name){

            const action={
                type:"changename",
                name
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navleft) ;