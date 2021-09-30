import * as React from 'react'
import { Link } from 'react-router-dom'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import './Sidebar.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.width = '260px'
    this.toggleClick = this.toggleClick.bind(this)
    this.onCreate = this.onCreate.bind(this)
    this.create = this.create.bind(this)
  }
  toggleClick() {
    this.sidebarobj.toggle()
  }
  onCreate() {
    this.sidebarobj.element.style.visibility = ''
  }
  create() {
    this.mode = 'CREATE'
  }
  render() {
    return (
      // Sidebar Element Declaration
      <div className="control-section">
        <SidebarComponent
          id="default-sidebar"
          ref={(Sidebar) => (this.sidebarobj = Sidebar)}
          style={{ visibility: 'hidden' }}
          width={this.width}
          created={this.onCreate}
        >
          <div
            className="sidebar-header"
            style={{ backgroundColor: '#c184a4;' }}
          >
            <div className="image-container"></div>
            <div>{this.props.email}</div>
          </div>
          <ul className="nav sidebar-nav">
            <li className="list-items">
              <Link path to="/">
              <i className="sf-icon-sidebar sf-icon-file"></i>
                {' '}
                <span className="e-text"> Home</span>
              </Link>
            </li>
            <li className="list-items">
              <Link to="/Create">
              <i className="sf-icon-sidebar sf-icon-starred"></i>
                <span className="e-text"> Create</span>
              </Link>
            </li>
            <li className="list-items">
              <Link path to="/MyBudgets">
              <i className="sf-icon-sidebar sf-icon-recent"></i>
                <span className="e-text">My Budgets</span>
              </Link>
            </li>
          </ul>
        </SidebarComponent>
      </div>
    )
  }
}