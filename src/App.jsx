import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './components/Dashboard';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
  setSidebarVisible(prev => !prev);
};

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1270) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };
        handleResize(); 
    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className='app'>
       <Navbar toggleSidebar={toggleSidebar} />
    <div className="app-container">
      <div className="main-content">
        <div className={sidebarVisible ? "sidebar" : "sidebar hidden"}>
          <Sidebar />
        </div>
         <div className="content">
          <Dashboard/>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default App;


