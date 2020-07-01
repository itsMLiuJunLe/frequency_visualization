import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default () => {
    return (
      <Menu
          onClick={(e) => {
          //console.log('click ', e);
          switch (e.key){
            case 'communication':
              var communication_red = document.getElementsByClassName('red_communication');
              var com_div1 = document.getElementsByClassName('com1')[0];
              var com_div2 = document.getElementsByClassName('com2')[0];
              var len_com_red = communication_red.length;
              for (let i = 0; i < len_com_red ; i++) {
                if (communication_red[i].style['z-index'] === '-1') {
                  communication_red[i].style['z-index'] = 4;
                  com_div1.style['z-index'] = 4;
                  com_div2.style['z-index'] = 4;
                  var com_red_name_on = document.getElementsByClassName('com')[0];
                  com_red_name_on.innerHTML = '屏蔽通信信号';

                } else if (communication_red[i].style['z-index'] === '4') {
                  communication_red[i].style['z-index'] = -1;
                  com_div1.style['z-index'] = -1;
                  com_div2.style['z-index'] = -1;
                  var com_red_name_off = document.getElementsByClassName('com')[0];
                  com_red_name_off.innerHTML = '显示通信信号'
                }
              }
              var communication_blue = document.getElementsByClassName('blue_communication');
              var len_com_blue = communication_blue.length;
              for (let i = 0; i < len_com_blue ; i++) {
                if (communication_blue[i].style['z-index'] === '-1') {
                  communication_blue[i].style['z-index'] = 4;
                } else if (communication_blue[i].style['z-index'] === '4') {
                  communication_blue[i].style['z-index'] = -1;
                }
              }
              break;

              case 'navigation':
              var navigation_red = document.getElementsByClassName('red_navigation');
              var nav_div1 = document.getElementsByClassName('nav1')[0];
              var nav_div2 = document.getElementsByClassName('nav2')[0];
              var len_nav_red = navigation_red.length;
              for (let i = 0; i < len_nav_red ; i++) {
                if (navigation_red[i].style['z-index'] === '-1') {
                  nav_div1.style['z-index'] = 4;
                  nav_div2.style['z-index'] = 4;
                  navigation_red[i].style['z-index'] = 4;
                  var nav_red_name_on = document.getElementsByClassName('nav')[0];
                  nav_red_name_on.innerHTML = '屏蔽导航信号';

                } else if (navigation_red[i].style['z-index'] === '4') {
                  navigation_red[i].style['z-index'] = -1;
                  nav_div1.style['z-index'] = -1;
                  nav_div2.style['z-index'] = -1;
                  var nav_red_name_off = document.getElementsByClassName('nav')[0];
                  nav_red_name_off.innerHTML = '显示导航信号'
                }
              }
              var navigation_blue = document.getElementsByClassName('blue_navigation');
              var len_nav_blue = navigation_blue.length;
              for (let i = 0; i < len_nav_blue ; i++) {
                if (navigation_blue[i].style['z-index'] === '-1') {
                  navigation_blue[i].style['z-index'] = 4;
                } else if (navigation_blue[i].style['z-index'] === '4') {
                  navigation_blue[i].style['z-index'] = -1;
                }
              }
              break;

              case 'telecontrol':
              var telecontrol_red = document.getElementsByClassName('red_telecontrol');
              var tel_div1 = document.getElementsByClassName('tel1')[0];
              var tel_div2 = document.getElementsByClassName('tel2')[0];
              var len_tel_red = telecontrol_red.length;
              for (let i = 0; i < len_tel_red ; i++) {
                if (telecontrol_red[i].style['z-index'] === '-1') {
                  telecontrol_red[i].style['z-index'] = 4;
                  tel_div1.style['z-index'] = 4;
                  tel_div2.style['z-index'] = 4;
                  var tel_red_name_on = document.getElementsByClassName('tel')[0];
                  tel_red_name_on.innerHTML = '屏蔽遥控信号';

                } else if (telecontrol_red[i].style['z-index'] === '4') {
                  telecontrol_red[i].style['z-index'] = -1;
                  tel_div1.style['z-index'] = -1;
                  tel_div2.style['z-index'] = -1;
                  var tel_red_name_off = document.getElementsByClassName('tel')[0];
                  tel_red_name_off.innerHTML = '显示遥控信号'
                }
              }
              var telecontrol_blue = document.getElementsByClassName('blue_telecontrol');
              var len_tel_blue = telecontrol_blue.length;
              for (let i = 0; i < len_tel_blue ; i++) {
                if (telecontrol_blue[i].style['z-index'] === '-1') {
                  telecontrol_blue[i].style['z-index'] = 4;
                } else if (telecontrol_blue[i].style['z-index'] === '4') {
                  telecontrol_blue[i].style['z-index'] = -1;
                }
              }
              break;

              case 'interfere':
              var interfere_red = document.getElementsByClassName('red_interfere');
              var int_div1 = document.getElementsByClassName('int1')[0];
              var int_div2 = document.getElementsByClassName('int2')[0];
              var int_div3 = document.getElementsByClassName('int3')[0];
              var int_div4 = document.getElementsByClassName('int4')[0];
              var len_int_red = interfere_red.length;
              for (let i = 0; i < len_int_red ; i++) {
                if (interfere_red[i].style['z-index'] === '-1') {
                  interfere_red[i].style['z-index'] = 4;
                  int_div1.style['z-index'] = 4;
                  int_div2.style['z-index'] = 4;
                  int_div3.style['z-index'] = 4;
                  int_div4.style['z-index'] = 4;
                  var int_red_name_on = document.getElementsByClassName('int')[0];
                  int_red_name_on.innerHTML = '屏蔽干扰信号';

                } else if (interfere_red[i].style['z-index'] === '4') {
                  interfere_red[i].style['z-index'] = -1;
                  int_div1.style['z-index'] = -1;
                  int_div2.style['z-index'] = -1;
                  int_div3.style['z-index'] = -1;
                  int_div4.style['z-index'] = -1;
                  var int_red_name_off = document.getElementsByClassName('int')[0];
                  int_red_name_off.innerHTML = '显示干扰信号'
                }
              }
              var interfere_blue = document.getElementsByClassName('blue_interfere');
              var len_int_blue = interfere_blue.length;
              for (let i = 0; i < len_int_blue ; i++) {
                if (interfere_blue[i].style['z-index'] === '-1') {
                  interfere_blue[i].style['z-index'] = 4;
                } else if (interfere_blue[i].style['z-index'] === '4') {
                  interfere_blue[i].style['z-index'] = -1;
                }
              }
              break;

            default:
              break;
          }
          

        }}
        style={{ width: 256 }}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="caret-down" />
              <span className="type">信号显示/屏蔽</span>
            </span>
          }
        >
          <Menu.Item key="communication"><span className="com">屏蔽通信信号</span></Menu.Item>
          <Menu.Item key="navigation"><span className="nav">屏蔽导航信号</span></Menu.Item>
          <Menu.Item key="telecontrol"><span className="tel">屏蔽遥控信号</span></Menu.Item>
          <Menu.Item key="interfere"><span className="int">屏蔽干扰信号</span></Menu.Item>
        </SubMenu>
      </Menu>
    );
}

