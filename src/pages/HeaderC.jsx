// import React from 'react';
// import { Layout } from 'antd';
// import '../css/h.css'

// const { Header } = Layout;

// const HeaderC = () => {
//   return (
//     <Header className="bg-white shadow-lg p-4" >
//       {/* Header content */}
//     </Header>
//   );
// };


// export default HeaderC;

import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = ({ collapsed, toggleMenu, darkMode, toggleDarkMode }) => {
  const headerStyle = {
    padding: 0,
    backgroundColor: darkMode ? 'black' : 'white', // Set background color based on darkMode
    color: darkMode ?  'white' : 'black' // Set text color based on darkMode
  };
  
  return (
    <Header className="site-layout-background" style={headerStyle}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggleMenu,
      })}
      <Button
        icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
        onClick={toggleDarkMode}
        style={{ float: 'right', margin: '16px' }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Header>
  );
};

export default AppHeader;
