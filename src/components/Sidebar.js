import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './Sidebar.css';



  export default class App extends React.Component {
      
      constructor(props) {
          super(props);
          this.width = '260px';
          this.toggleClick = this.toggleClick.bind(this);
          this.onCreate = this.onCreate.bind(this);
          this.create = this.create.bind(this)
        }
      toggleClick() {
          this.sidebarobj.toggle();
      }
      onCreate() {
          this.sidebarobj.element.style.visibility = '';
      }
      create() {
          this.mode = 'CREATE'
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
                              <a className="sidebar-brand" href="#settings-dropdown">
                                {this.props.email}
                              </a>
                          </div>
                      </div>
                      <ul className="nav sidebar-nav">
                          <li>
                              <a href="/">
                                  <i className="sf-icon-sidebar sf-icon-file"></i>
                                  <span onClick={this.props.onClick} className="e-text" href="/"> Home</span>
                              </a>
                          </li>
                          <li>
                              <a href="/budgets">
                                  <i className="sf-icon-sidebar sf-icon-starred"></i>
                                  <span  className="e-text"> Create</span>
                              </a>
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





// this component is for the side-bar, using an imported react component, the push rotate needs to be page wrapped and an outerContainer Id needs to be within this.