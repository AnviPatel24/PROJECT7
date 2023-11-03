import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
    return (
   <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <aside className="left-sidebar">
     
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
        <img src="assets/images/logos/ren-removebg-preview.png" width="60"  alt=""/> <p className="text-nowrap text-center d-block w-100" style={{ marginTop: '0px', marginLeft:'-8px', marginBottom:'-6px', color:"black" }}><b style={{fontSize:22}}>PlatePlanner </b></p>
                
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Dash" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Management</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Stud" aria-expanded="false">
                <span>
                <i className="ti ti-user-plus"></i>
                </span>
                <span className="hide-menu">Hosteller Registration</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Handler" aria-expanded="false">
                <span>
                <i className="ti ti-user-plus"></i>
                </span>
                <span className="hide-menu">Mess Handler Registration</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/AddMenu" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle"></i>
                </span>
                <span className="hide-menu">Menu</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Viewmenu" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle"></i>
                </span>
                <span className="hide-menu">View Menu</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Users</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Viewhost" aria-expanded="false">
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Hostellers</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Viewhand" aria-expanded="false">
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Mess Handlers</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Viewguest" aria-expanded="false">
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Guests</span>
              </Link>
            </li>
            {/* <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-card.html" aria-expanded="false">
                <span>
                  <i className="ti ti-cards"></i>
                </span>
                <span className="hide-menu">Card</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-forms.html" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description"></i>
                </span>
                <span className="hide-menu">Forms</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-typography.html" aria-expanded="false">
                <span>
                  <i className="ti ti-typography"></i>
                </span>
                <span className="hide-menu">Typography</span>
              </Link>
            </li> */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ChangeP" aria-expanded="false">
                <span>
                  <i className="ti ti-password"></i>
                </span>
                <span className="hide-menu">Change Password</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/Logout" aria-expanded="false">
                <span>
                  <i className="ti ti-login"></i>
                </span>
                <span className="hide-menu">Logout</span>
              </Link>
            </li>
            {/* <li className="sidebar-item">
              <Link className="sidebar-link" to="/authentication-register.html" aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus"></i>
                </span>
                <span className="hide-menu">Register</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/icon-tabler.html" aria-expanded="false">
                <span>
                  <i className="ti ti-mood-happy"></i>
                </span>
                <span className="hide-menu">Icons</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/sample-page.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture"></i>
                </span>
                <span className="hide-menu">Sample Page</span>
              </Link>
            </li> */}
          </ul>
          
        </nav>
       
      </div>
      
    </aside>
    </div>
    </>
    );
  }
  
  export default Navbar;
  