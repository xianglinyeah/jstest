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


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"8",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"6",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"19",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"1",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"2",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"56",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"17",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"7",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"8",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"4",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"13",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"5",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"2",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"10",
        birthday:"1",
        address:"beijing",
        time:"90"


    }, {
        id:"2",
        username:'Jack',
        sex:"1",
        status:"1",
        interest:"9",
        birthday:"1",
        address:"beijing",
        time:"90"


    }
];




class Hightable extends Component {

    constructor(props) {
        super(props);
        this.state={
            dataSource:dataSource,
            dataSource2:[],
            selecteditem:{},
            sortOrder:""


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
                dataIndex:"interest",
                sorter:(a,b)=>{
                    return a.interest-b.interest
                },
                sortOrder:this.state.sortOrder

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
                title:"操作",
                render:(text,item)=>{
                    return <button
                              onClick={(item)=>{this.handleclick(item)}}
                    >删除</button>
                }

            }
        ]



        return (
            <Fragment>
                <Card titel='basic'>
                    <Table columns={columns}
                           bordered
                           dataSource={this.state.dataSource}
                           pagination={false}
                           scroll={{y:240}}
                           onChange={(page,abc,sorter)=>{this.handlechange(page,abc,sorter)}}
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

    handlechange(page,abc,sorter){
        this.setState({
            sortOrder:sorter.order
        })
    }

    handleclick(item){

        console.log(item.id)
    }

}

export default Hightable;