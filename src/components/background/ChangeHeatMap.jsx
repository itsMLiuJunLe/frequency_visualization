import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;


export default () => {
  
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['clo']}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="caret-down" />
            <span className="type">热力图显示/屏蔽(请双击)</span>
          </span>
        }
      >
        <Menu.Item key="communication"><Link to='/main/wire/heatmapcom'>通信信号热力图</Link></Menu.Item>
        <Menu.Item key="navigation"><Link to='/main/wire/heatmapnav'>导航信号热力图</Link></Menu.Item>
        <Menu.Item key="telecontrol"><Link to='/main/wire/heatmaptel'>遥控信号热力图</Link></Menu.Item>
        <Menu.Item key="interfere"><Link to='/main/wire/heatmapint'>干扰信号热力图</Link></Menu.Item>
        <Menu.Item key="closeAll"><Link to='/main/wire/close'>关闭热力图</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}