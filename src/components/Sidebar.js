import * as React from 'react'
import { Link } from 'react-router-dom'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';

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
          <div className="sidebar-header"></div>
          <ul className="nav sidebar-nav">
            <div>
              {' '}
              <b className="user-name">Emma Brown</b>
            </div>
            <li className="list-items">
              <Link path to="/">
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap');
                </style>
                <span className="e-text home">
                  <span>
                    <FontAwesomeIcon className="sidebar-icons" icon="home" />
                  </span>
                  Home
                </span>
              </Link>
            </li>
            <li className="list-items">
              <Link to="/Create">
                <span className="e-text create">
                <span>
                    <FontAwesomeIcon className="sidebar-icons" icon={faEdit} />
                  </span>
                   Create</span>
              </Link>
            </li>
            <li className="list-items">
              <Link path to="/MyBudgets">
                <span className="e-text mybudgets">
                <span>
                    <FontAwesomeIcon className="sidebar-icons" icon="stream" />
                  </span>
                  My Budgets</span>
              </Link>
            </li>
          </ul>
        </SidebarComponent>
       
      </div>
    )
  }
}
