import React,{Component,Fragment} from "react";
import {Card,Button,Tabs, message} from 'antd';

const initialPanes = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
    },
];



class Tabsa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panels: initialPanes
        }
    }


    render() {


        return (
            <Fragment>
                <Card title='tabs' style={{width: "80%", margin: "30px auto"}}>
                    <Tabs defaultActiveKey="1" onChange={() => {
                        this.handlechang()
                    }}>
                        <Tabs.TabPane tab="首页" key="1">
                            1
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="公司介绍" key="2">
                            2
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="投资关系" key="3">
                            3
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title='tabs' style={{width: "80%", margin: "30px auto"}}>
                    <Tabs
                        defaultActiveKey="1" onChange={() => {
                        this.handlechang()
                    }}
                        type='editable-card'
                        onEdit={this.onEdit}
                    >
                        {this.state.panels.map((item) => {
                            return (
                                <Tabs.TabPane tab={item.title} key={item.key}>
                                    {item.content}
                                </Tabs.TabPane>
                            )
                        })}


                    </Tabs>
                </Card>
            </Fragment>
        )

    }
    handlechang(){
        alert(1)
    }
}

export default Tabsa;