import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';

import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx';

import {style} from "variables/Variables.jsx";

import imagine from "assets/img/sidebar-3.jpg";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: imagine,
            color: "black",
            hasImage: true
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleHasImage = this.handleHasImage.bind(this);
    }
    handleImageClick(image){
        this.setState({image: image});
    }
    handleColorClick(color){
        this.setState({color: color});
    }
    handleHasImage(hasImage){
        this.setState({hasImage: hasImage});
    }
    componentDidMount(){
        var _notificationSystem = this.refs.notificationSystem;
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        _notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: "tr",
            autoDismiss: 15,
        });
    }
    render() {
        return (

                <div className="wrapper">
                    <NotificationSystem ref="notificationSystem" style={style}/>
                    <Sidebar
                        bgImage={this.state["image"]}
                        dataColor={this.state["color"]}
                        hasImage={this.state["hasImage"]}
                        {...this.props}
                    />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                            <Switch>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/user" component={UserProfile}/>
                                <Route path="/table" component={TableList}/>
                                <Route path="/typography" component={Typography}/>
                                <Route path="/icons" component={Icons}/>
                                <Route path="/maps" component={Maps}/>
                                <Route path="/notifications" component={Notifications}/>
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                        <Footer />
                        <FixedPlugin
                            handleImageClick={this.handleImageClick}
                            handleColorClick={this.handleColorClick}
                            handleHasImage={this.handleHasImage}
                            bgColor={this.state["color"]}
                            bgImage={this.state["image"]}/>
                    </div>
                </div>


        );
    }
}

export default App;
