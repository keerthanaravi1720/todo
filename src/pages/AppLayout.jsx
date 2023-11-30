



// import React, { useState, useEffect } from 'react';
// import { Layout, Menu, Button } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   HomeOutlined,
//   AppstoreOutlined,
//   BulbOutlined,
//   BulbFilled,
// } from '@ant-design/icons';

// import '../App.css'

// const { Header, Sider, Content } = Layout;

// const AppLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => {
//     setCollapsed(!collapsed);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
//   };
  
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);
  

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider trigger={null} collapsible collapsed={collapsed} theme={darkMode ? 'dark' : 'light'}  >
//         <div className="logo" />
//         <Menu theme={darkMode ? 'dark' : 'light'}  mode="inline" defaultSelectedKeys={['1']} className='menu-color'>
//           <Menu.Item key="1" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="2" icon={<AppstoreOutlined />}>
//             Dashboard
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }} >
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: toggleMenu,
//           })}
//           <Button
//             icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
//             onClick={toggleDarkMode}
//             style={{ float: 'right', margin: '16px' }}
//           >
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </Button>
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//           }}
//         >
//           {/* Main content goes here */}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AppLayout;




import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import '../App.css';
import Sidebar from './Sidebar';
import AppHeader from './HeaderC';
import AppContent from './ContentC';

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  


  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
   
    <Layout style={{ minHeight: '100vh' }}>
   <Sidebar collapsed={collapsed} darkMode={darkMode} />
      <Layout className="site-layout">
      <AppHeader collapsed={collapsed} toggleMenu={toggleMenu} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <AppContent />
      </Layout>
    </Layout>
   
   
  </div>
  );
};

export default AppLayout;

