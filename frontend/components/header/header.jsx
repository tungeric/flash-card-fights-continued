import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppModal from '../Modal';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  loggedin() {
    return (
      <div className="logout-header">
        <div className="header-left">
          <div className="header-logo">
            <div className="header-logo">
            <Link to="/">
              <p className="header-logo-text">FCF</p>
            </Link>
          </div>
          </div>
        </div>
        <div className="header-right">
          <div className="button-container">
            <Link to="/challenges" className="hello-user">Hello, {this.props.user.username}</Link>
            <div className="divider"></div>
            <Link to="#" className="logout-link" onClick={this.logout}>Log Out</Link>
          </div>
        </div>
      </div>
    );
  }

  loggedout() {
    return (
      <div className="login-header">
        <AppModal action={SigninFormContainer} className="login-button" />
        <div className="divider"></div>
        <AppModal className="demo-button" action={SigninFormContainer} demo={true} />
        <div className="divider"></div>
        <AppModal action={SignupFormContainer} className="signup-button" />
      </div>
    );
  }

  render() {
    return this.props.user ? this.loggedin() : this.loggedout();
  }
}
export default Header;