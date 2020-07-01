import React from 'react';

import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

import 'css/animation.css';

TweenOne.plugins.push(PathPlugin);

export default ({startPoint, endPoint, colorType}) => {
  const [startLeft, startTop] = startPoint;
  const [endLeft, endTop] = endPoint;
  const width = Math.abs(endLeft - startLeft);
  const height = Math.abs(endTop- startTop);
  const path = `M${startLeft},${startTop}L${endLeft},${endTop}`;
  const animation = {
    path: path,
    repeat: -1,
    duration: 2000,
    ease: 'linear'
  };
  console.log('渲染动画');
  return (
    <div style={{ position: 'absolute', height: height, width: width, left: 0, top: 0}}>
      <TweenOne
        animation={animation}
        className={"code-box-shape color-" + colorType}
      />
    </div>
  );
}