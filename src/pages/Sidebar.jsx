import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, CheckCircleOutlined, CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Sider } = Layout;

const Sidebar = ({ darkMode, collapsed, selectedKey }) => {
  const menuTheme = darkMode ? 'dark' : 'light';

  const navigate=useNavigate();

  const newtask=()=>{
navigate('newtask');
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme={menuTheme}>
      <div className="logo" />
      <div className='todo'>
        <div className='div-text'>To Do List</div>
        </div>
      <Menu theme={menuTheme} mode="inline" defaultSelectedKeys={['1']} selectedKeys={[selectedKey]} className={`custom-menu-${menuTheme}`}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
          All Tasks
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckCircleOutlined />}>
          Finished Tasks
        </Menu.Item>
        <Menu.Item key="3" icon={<CloseCircleOutlined />}>
          Unfinished Tasks
        </Menu.Item>
        <Menu.Item key="4" icon={<PlusCircleOutlined />} onClick={newtask}>
         New Task
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
