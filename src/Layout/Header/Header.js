
import React, { Component } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import JwtToken from 'src/hash/JwtToken';
// import HeaderMode from './HeaderMode';
import HeaderDropdownUser from './HeaderDropdownUser';


const mapStateToProps = (state) => {
  return {
    shidebarMinize: state.ReduxState.shidebarMinize,
    sidebarOpen: state.ReduxState.sidebarOpen,
    ProfileMenuOpen: state.ReduxState.ProfileMenuOpen,
    menuDesktop: state.ReduxState.menuDesktop,
  };
};

class Header extends Component {
  // decode = JwtToken(localStorage.getItem("accessToken"))
  decode = JwtToken(sessionStorage.getItem("accessToken") || localStorage.getItem('accessToken'))
  Sidebar() {
    if (this.props.sidebarOpen === false) {
      this.props.dispatch({ type: 'set', sidebarOpen: true, ProfileMenuOpen: false, })
    } else {
      this.props.dispatch({ type: 'set', sidebarOpen: false, ProfileMenuOpen: false })
    }
  }

  componentDidMount() {
    console.log(this.decode, "decode Jwt")
  }

  render() {
    return (
      <>
        <header className={" min-w-full z-40 py-4 px-5 right-0 left-0 bg-blue-400 shadow-bottom dark:bg-gray-800"}>
          <div className={" flex items-center justify-between mx-auto text-white dark:text-purple-300"}>
            {/* <!-- Desktop hamburger --> */}
            <button
              className="rounded-md lgd:hidden focus:outline-none focus:shadow-outline-purple  hover:text-gray-200"
              onClick={() => this.props.dispatch({ type: 'set', menuDesktop: !this.props.menuDesktop })}
              aria-label="Menu"
            >
              <i className="text-2xl fas fa-bars" aria-hidden="true" />
            </button>
            {/* <!-- Mobile hamburger --> */}
            <button
              className="rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple hover:text-gray-200"
              onClick={this.Sidebar.bind(this)}
              aria-label="Menu"
            >
              <i className="text-2xl fas fa-bars" aria-hidden="true" />
            </button>
            <ul className={"flex justify-end w-full items-center space-x-6 "}>
              {/* <!-- Profile Name --> */}
              <div className="capitalize">
                {/* {this.decode.username} */}
              </div>
              {/* <!-- Profile menu --> */}
              <li className="relative">
                <HeaderDropdownUser />
              </li>
            </ul>
          </div>
        </header>
      </>
    )
  }
}
export default connect(mapStateToProps, null)(withRouter(Header))
