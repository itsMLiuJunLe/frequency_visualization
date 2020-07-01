import React, {useState} from 'react';

import TraceChart from 'components/background/TraceChart.jsx';
import PositionChart from 'components/background/Position.jsx'
import { Button } from 'antd';
import  'css/trace.css'

/*
 * *** ChartCard参数说明 ***
 * title: 可视化组件的标题
 * pos: 可视化组件的位置 4种 根据页面组件是2个还是3个进行调整
 *      left-top     左边靠上
 *      left-bottom  左边靠下
 *      left-center  左边居中
 *      right-center 右边居中
 * index: 可视化组件最小化后的位置, 仅有1、2、3三个值(因为页面最多只有3个组件)
 * url: 可视化组件option的服务器地址
 * dataUrl: 下载数据的服务器地址
 */

export default () => {
  const [flag1, setFlag1] = useState(1);
  const [flag2, setFlag2] = useState(1);
  const shift_chart = function() {
    var div1 = document.getElementsByClassName('Position_area')[0];
    if(flag2 === 0){
      div1.style['z-index'] = 1;
      setFlag2(1)
    } else {
      div1.style['z-index'] = -1;
      setFlag2(0)
    }
  }
  return(
  <>
  <div onClick={shift_chart} className='div1' style={{width:'10px', height: '10px', borderRadius: '50%', position: 'absolute',top:'60px', left:'240px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'75px', left:'240px',zIndex:3 }}>P1</div>
  <div onClick={shift_chart} className='div2' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'100px', left:'300px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'115px', left:'300px',zIndex:3 }}>P2</div>
  <div onClick={shift_chart} className='div3' style={{width:'10px', height: '10px', borderRadius: '50%',  position: 'absolute',top:'150px', left:'400px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'165px', left:'400px',zIndex:3 }}>P3</div>
  <div onClick={shift_chart} className='div4' style={{width:'10px', height: '10px', borderRadius: '50%',  position: 'absolute',top:'200px', left:'450px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'200px', left:'465px',zIndex:3 }}>P4</div>
  <div onClick={shift_chart} className='div5' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'180px', left:'360px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'195px', left:'360px',zIndex:3 }}>P5</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'240px', left:'500px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'255px', left:'500px',zIndex:3 }}>P6</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'290px', left:'550px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'305px', left:'550px',zIndex:3 }}>P7</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'300px', left:'600px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'315px', left:'600px',zIndex:3 }}>P8</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'320px', left:'630px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'335px', left:'630px',zIndex:3 }}>P9</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'340px', left:'690px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'355px', left:'690px',zIndex:3 }}>P10</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'360px', left:'650px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'375px', left:'650px',zIndex:3 }}>P11</div>
  <div onClick={shift_chart} className='div6' style={{width:'10px', height: '10px',  borderRadius: '50%', position: 'absolute',top:'400px', left:'680px',background:'	#DC143C',zIndex:3 }}></div>
  <div style={{width:'10px', height: '10px',  position: 'absolute',top:'415px', left:'680px',zIndex:3 }}>P12</div>
  <Button type='primary' 
  onClick={() => {
    var div1 = document.getElementsByClassName('trace_viusal_area')[0];
    if(flag1 === 0){
      div1.style['z-index'] = 1;
      setFlag1(1)
    } else {
      div1.style['z-index'] = -1;
      setFlag1(0)
    }
  }} 
  style={{position:'absolute', top:0, right:0, width:'100px',height:'30px',zIndex:3}}>
  坐标轨迹图
  </Button>
  <Button type='primary' 
  onClick={() => {
    var div2 = document.getElementsByClassName('Position_area')[0];
    if(flag2 === 0){
      div2.style['z-index'] = 1;
      setFlag2(1)
    } else {
      div2.style['z-index'] = -1;
      setFlag2(0)
    }
  }} 
  style={{position:'absolute', top:0, right:'110px', width:'100px',height:'30px',zIndex:3}}>
  坐标轨迹图
  </Button>
  <div className='Position_area' style={{position:'absolute',bottom:'50px', left:'0px', zIndex: 1}}>
    <PositionChart /> 
  </div>
  <svg  style={{position:'absolute',top:'0px',left:'0px',width:'100%',height:'100%',zIndex: 2}}>
  <line x1="245" y1="65" x2="305" y2="105" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="305" y1="105" x2="405" y2="155" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="405" y1="155" x2="455" y2="205" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="455" y1="205" x2="365" y2="185" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="365" y1="185" x2="505" y2="245" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="505" y1="245" x2="555" y2="295" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="555" y1="295" x2="605" y2="305" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="605" y1="305" x2="635" y2="325" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="635" y1="325" x2="695" y2="345" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="695" y1="345" x2="655" y2="365" style={{stroke:'	#F4A460',strokeWidth:2}} />
  <line x1="655" y1="365" x2="685" y2="405" style={{stroke:'	#F4A460',strokeWidth:2}} />
</svg>

  <div className='trace_viusal_area' style={{position:'absolute',bottom:'50px', right:'-100px', zIndex: 1}}>
    <TraceChart /> 
  </div>
  </>)
  };