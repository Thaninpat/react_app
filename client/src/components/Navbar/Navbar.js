import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import MenuButton from '../Menu/MenuButton';
import SidebarMenu from '../Sidebar/SidebarMenu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('userTokenTime')
    }
  }

  render() {
    return (
      <div className="container">
        {/* <SidebarMenu /> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">ReactJS App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            {this.state.loggedIn ?
              <React.Fragment>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/upload">Upload</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signOut">Sign Out</NavLink>
                  </li>
                </ul>

              </React.Fragment>
              :
              <React.Fragment>
                <ul className="navbar-nav">
                  <li className="nav-item active"><NavLink className="nav-link" to="/signIn">Sign In</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/signUp">Sign Up</NavLink></li>
                </ul>

              </React.Fragment>}


          </div>
        </nav>
      </div>


    );
  }
}

export default Navbar;