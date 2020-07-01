import React, { useState, useRef, useEffect, useMemo } from 'react';

import IconMap from './IconMap';
import Net from './Net';
import Trace from './Trace';
import backgroundImg from 'img/background.png';

const Background = ({ width, height, webtype }) => {
  if (width <= 0) {
    return null;
  }
  let content = null;
  if (webtype === 'wireless') {
    content = <IconMap type={'center'} width={width} height={height} />;
  } else if (webtype === 'wire') {
    content = <Net  type={'center'} width={width} height={height} />;
  } else if (webtype === 'trace') {
    content = <Trace  type={'center'} width={width} height={height} />;
  }
  return (
    <>
      <img src={backgroundImg} alt="地图" width={'100%'} height={'100%'} />
      {content}
    </>
  );
}

export default ({ match }) => {
  const webtype = match.params.webtype;
  const [widthHeight, setWidthHeight] = useState([0, 0]);
  const divRef = useRef(null);
  // 组件第一次挂载的时候实时获取宽度
  useEffect(() => {
    setTimeout(() => {
      const width = divRef.current.offsetWidth;
      const height = divRef.current.offsetHeight;
      setWidthHeight([width, height]);
    }, 1000)
    // setWidth(divRef.current.offsetWidth);
  }, []);
  // 当width变化的时候背景才会改变
  const background = useMemo(() => (
    <div ref={divRef} className='relative_map'>
      <Background width={widthHeight[0]} height={widthHeight[1]} webtype={webtype} />
    </div>
  ), [widthHeight, webtype])
  return (
    <>
      {background}
    </>
  );
}