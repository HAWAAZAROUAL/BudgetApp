import * as React from 'react';
import {Link} from 'react-router-dom';
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
                          </div>
                          <div style={{ padding: '0 0 5px 0' }}>
                              
                                {this.props.email}
                              
                          </div>
                      </div>
                      <ul className="nav sidebar-nav">
                          <li>
                              
                                  <i className="sf-icon-sidebar sf-icon-file"></i>
                                  <Link path to="/"> <span className="e-text"> Home</span>
                                  </Link>
                             
                          </li>
                          <li>
                              
                                  <i className="sf-icon-sidebar sf-icon-starred"></i>
                                  <Link to="/Create"><span className="e-text"> Create</span></Link>
                              
                          </li>
                          <li>
                              <a href="/Update">
                                  <i className="sf-icon-sidebar sf-icon-recent"></i>
                                  <span className="e-text">Update</span>
                              </a>
                          </li>
                          <li>
                              <a href="/Reports">
                                  <i className="sf-icon-sidebar sf-icon-important"></i>
                                  <span className="e-text">Reports</span>
                              </a>
                          </li>
                      </ul>
                  </SidebarComponent>
              </div>);
      }
  }


// use React Router


// this component is for the side-bar, using an imported react component, the push rotate needs to be page wrapped and an outerContainer Id needs to be within this.