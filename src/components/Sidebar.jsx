import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaHome,
  FaFileAlt,
  FaShieldAlt,
  FaTh,
  FaArrowRight,
  FaBan,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const Sidebar = () => {
  const [showAuthSubMenu, setShowAuthSubMenu] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <h5>MATERIALLY</h5>
        <p className="sub-title">Dashboard</p>
        <div className="sidebar-item dashbord">
          <FaHome  className='' />
          <span className='dashbord'>Dashboard</span>
        </div>
      </div>

      <div className="sidebar-section">
        <h5>PAGES</h5>
        <p className="sub-title">Prebuild Pages</p>
        <div className="sidebar-item">
          <FaFileAlt />
          <span>Sample Page</span>
        </div>

        <div
          className="sidebar-item"
          onClick={() => setShowAuthSubMenu(!showAuthSubMenu)}
        >
          <FaShieldAlt />
          <span>Authentication</span>
          {showAuthSubMenu ? <FaChevronUp className="submenu-icon" /> : <FaChevronDown className="submenu-icon" />}
        </div>

        {showAuthSubMenu && (
          <div className="submenu">
            <div className="submenu-item">Login</div>
            <div className="submenu-item">Register</div>
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <h5>UTILS</h5>
        <div className="sidebar-item">
          <FaTh />
          <span>Icons</span>
        </div>
        <div className="sidebar-item active">
          <FaArrowRight />
          <span>Typography</span>
        </div>
      </div>

      <div className="sidebar-section">
        <h5>SUPPORT</h5>
        <div className="sidebar-item disabled">
          <FaBan />
          <span>Disabled Menu</span>
        </div>
        <div className="sidebar-item">
          <FaQuestionCircle />
          <span>Documentation</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
