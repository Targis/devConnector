import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink to="/profiles" activeClassName="active">
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" activeClassName="active">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeClassName="active">
          <i className="fas fa-user"></i>
          &nbsp;
          <span className="hide-sm">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <NavLink to="/profiles" activeClassName="active">
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
