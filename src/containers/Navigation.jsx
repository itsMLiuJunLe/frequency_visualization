import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Switch } from 'antd';
import { DataSwitchContext, OPEN_DATA_SWITCH, CLOSE_DATA_SWITCH } from 'store/providers/data-switch';
import logo30 from 'img/logo30.jpg';


const { SubMenu } = Menu;

const DataSwitch = () => {
  const { state, dispatch } = useContext(DataSwitchContext);
  const switchChanged = checked => {
    if (checked) {
      dispatch({ type: OPEN_DATA_SWITCH });
    } else {
      dispatch({ type: CLOSE_DATA_SWITCH });
    }
  }
  return (
    <Switch className='switch-btn' checkedChildren="开" unCheckedChildren="关" defaultChecked={state} onChange={switchChanged} />
  );
}

export default ({ mode }) => {
  const menu = [{
    firstMenu: '采集节点',
    secondMenu: ['统计特性', '时域特性', '频域特性', '三维特性'],
  }, 
  {
    firstMenu: '域频管中心',
    secondMenu: ['时域特性', '频域特性', '三维特性'],
  }, {
    firstMenu: '频管中心',
    secondMenu: ['时域特性', '频域特性', '三维特性'],
  }, 
  {
    firstMenu: '资源信息',
    secondMenu: ['气候信息', '指导信息', '全域信息'],
  }];
  return (
    <>
      <Link to='/home' className='brand'>城市大数据电磁态势分析平台中心层次</Link>
      <Menu mode={mode} theme="dark">
        {
          menu.map((item, index) => (
            <SubMenu
              key={index}
              title={
                <span className="submenu-title-wrapper">
                  {item.firstMenu}
                </span>
              }
            >
              <Menu.ItemGroup>
                {
                  item.secondMenu.map((value, idx) => (
                    <Menu.Item key={`${index}-${idx}`}>
                      <Link to={`/main/wireless/${index}-${idx}`}>{value}</Link>
                    </Menu.Item>
                  ))
                }
              </Menu.ItemGroup>
            </SubMenu>
          ))
        }
        <Menu.Item>
          <Link to={`/main/wire`}>综合态势</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/main/trace`}>频谱定位</Link>
        </Menu.Item>
      </Menu>
      <DataSwitch />
      <div className='logo'>
        <img src={logo30} width={62.5} height={32} alt='logo' />
        <span>欢迎！CETC 30</span>
      </div>
    </>
  )
}