import React,{Component,Fragment} from "react";
import {Card,Button,Table} from 'antd';
import axios from 'axios';


const dataSource=[
    {
        id:"0",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"


    },
    {
        id:"1",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"
    },
    {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"


    }
];




class Tablea extends Component {

    constructor(props) {
        super(props);
        this.state={
            dataSource:dataSource,
            dataSource2:[],
            selecteditem:{}


        }
    }




    render() {

      const columns=[
          {
              title:"id",
              dataIndex:"id"
          },
          {
              title:"用户名",
              dataIndex:"username"

          },
          {
              title:"性别",
              dataIndex:"sex"

          },
          {
              title:"状态",
              dataIndex:"status"

          },
          {
              title:"爱好",
              dataIndex:"interest"

          },
          {
              title:"生日",
              dataIndex:"birthday"

          },
          {
              title:"地址",
              dataIndex:"address"

          },
          {
              title:"早起时间",
              dataIndex:"time"

          }
      ]



        return (
            <Fragment>
             <Card titel='basic'>
                 <Table columns={columns}
                        bordered
                        dataSource={this.state.dataSource}
                 >
                 </Table>
             </Card>

                <Card titel='dynamic'>
                    <Table columns={columns}
                           style={{margin:"30px 0"}}
                           bordered
                           dataSource={this.state.dataSource2}
                           rowSelection={{type:"checkbox",
                               selectedRowKeys:this.state.selectedRowKeys
                             }}
                           onRow={(record)=>{
                               return {
                                   onClick:()=>{
                                       this.onRowClick(record)
                                   }
                               }
                           }}
                    >
                    </Table>
                </Card>
            </Fragment>
        )

    }

    componentDidMount() {

        axios.get("http://106.12.220.186:4000/api/table/list").then((res)=>{
            const data=res.data.result.list;
            data.map((item,index)=>{
                item.key=index
            })

            this.setState({
               dataSource2:data
            })
        })
    }
    onRowClick(record){

        console.log(record)

        this.setState({

            selecteditem:record

        })

    }

}

export default Tablea;