import React,{Component,Fragment} from "react";
import {Card, Button, message, Row, Col, Modal} from 'antd';


const imgs=[
    ['1.png','2.png','3.png','4.png','5.png'],
    ['6.png','7.png','8.png','9.png','10.png'],
    ['11.png','12.png','13.png','14.png','15.png'],
    ['16.png','17.png','18.png','19.png','20.png'],
    ['21.png','22.png','23.png','24.png','25.png']
];



class Gallery extends Component{

    constructor(props) {
        super(props);
        this.state={
            visible:false,
            current:""
        }
    }


    render() {


        return (

            <Fragment>
                   {
                       imgs.map((item)=>{

                      return (

                          <Row gutter='10'>

                              {item.map((subitem)=>{
                              return (
                              <Col span='4'>
                              <Card cover={<img src={'/assets/gallery/'+subitem}
                                                key={subitem}
                              />}
                                    onClick={()=>{this.handleclick(subitem)}}
                              >
                              <Card.Meta title='react' description='imooc'>
                              </Card.Meta>
                              </Card>
                              </Col>
                              )
                          })}

                          </Row>
                      )

                   })
                   }

                <Modal width={300} height={500}
                       visible={this.state.visible}
                       title='图片画廊'
                       onCancel={()=>{
                           this.setState({
                               visible:false
                           })
                       }}
                >
                    {<img src={this.state.current} style={{width:"100%"}} />}
                </Modal>



            </Fragment>
        )



    }




    handleclick(subitem){
      this.setState({
          visible:true,
          current:"/assets/gallery/"+subitem
      })
    }



}

export default Gallery;