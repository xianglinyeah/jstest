import React from 'react';
import Loadable from 'react-loadable';
import {Spin} from "antd";

const LoadableComponent = Loadable({

    loader: () => import('./table.js'),
    loading() {
        return (<Spin size='large'></Spin>)
    }
});

export default () => {return <LoadableComponent/>}