import React from "react";
import './root_style.scss';
import {setConfig} from "react-hot-loader";
import {hot} from "react-hot-loader/root";

import LikeCounterComponent from "../like_counter/like_counter_component";
import WebpackLogo from './webpack.svg';
import ReactTableSimpleTableComponent from '../react-table-simple-table/react_table_simple_table_component';


setConfig({
    pureRender: true, // RHL will not change render method
});

class RootComponent extends React.Component {

    render() {
        console.log('%c RootComponent.render()', 'color: green');
        return (
            <div>
                <div className="root-component">
                    <img className="webpack-logo" src={WebpackLogo}/>
                    <p>Hello, {this.props.name}</p>
                    <LikeCounterComponent/>
                </div>
                <ReactTableSimpleTableComponent/>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('%c RootComponent.componentWillUnmount()', 'color: red');
    }

}

export default hot(RootComponent);
