import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './Sidebar.css';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.width = '260px';
        this.toggleClick = this.toggleClick.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }
    toggleClick() {
        this.sidebarobj.toggle();
    }
    onCreate() {
        this.sidebarobj.element.style.visibility = '';
    }
    render() {
        return (
        // Sidebar Element Declaration
        <div className="control-section">
                <SidebarComponent id="default-sidebar" ref={Sidebar => this.sidebarobj = Sidebar} style={{ visibility: "hidden" }} width={this.width} created={this.onCreate}>
                    <div className="sidebar-header header-cover" style={{ backgroundColor: '#0378d5' }}>
                        <div className="image-container">
                            <div className="sidebar-image">
                            </div>
                        </div>
                        <div style={{ padding: '0 0 5px 0' }}>
                            <a className="sidebar-brand" href="#settings-dropdown">
                                john.doe@gmail.com
                            </a>
                        </div>
                    </div>
                    <ul className="nav sidebar-nav">
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-file"></i>
                                <span className="e-text"> Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-starred"></i>
                                <span className="e-text"> Starred</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-recent"></i>
                                <span className="e-text">Snoozed</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-important"></i>
                                <span className="e-text">Important</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-offline"></i>
                                <span className="e-text"> Sent</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="sf-icon-sidebar sf-icon-backup"></i>
                                <span className="e-text"> Draft</span>
                            </a>
                        </li>
                    </ul>
                </SidebarComponent>
            </div>);
    }
}




// this component is for the side-bar, using an imported react component, the push rotate needs to be page wrapped and an outerContainer Id needs to be within this.