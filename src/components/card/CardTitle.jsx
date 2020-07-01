import React, { useContext, useMemo } from 'react';

import { ChartResizeContext, CHART_RESIZE } from 'store/providers/chart-resize';
import { LogContext, ADD_LOG } from 'store/providers/log';
import { TYPE, STATUS } from 'api/log-info';
import { DataSwitchContext } from 'store/providers/data-switch';
import { getDate } from '../../api/util';

const NORMAL = 'normal';
const ZOOM_IN = 'zoom-in';
const ZOOM_OUT = 'zoom-out';
const LOCK = 'lock';
// css文件中动画的时间
const ANIMATION_TIME = 500;

const DownloadBtn = ({ title, dataUrl }) => {
  const { state: dataSwitch } = useContext(DataSwitchContext);
  const { dispatch } = useContext(LogContext);
  return dataSwitch ? (
    <a href={dataUrl} download={title}>
      <button className='btn-download'>↓</button>
    </a>
  ) : (
      <button className='btn-download' onClick={() => dispatch({
        type: ADD_LOG,
        data: {
          status: STATUS.ERROR.key,
          date: getDate(),
          type: TYPE.SYSTEM,
          sub: title,
          description: '下载失败，数据接口未打开'
        }
      })}>↓</button>
    );
}

// let statusArr = [
//   NORMAL,
//   NORMAL,
//   NORMAL
// ];

const CardTitle = ({ title = '默认标题', divRef, index, dataUrl, dispatch }) => {

  let status = NORMAL;
  const toMax = 'normal-to-max';
  const maxTo = 'max-to-normal';
  const toMin = 'normal-to-min-' + index;
  const minTo = 'min-to-normal-' + index;

  const zoomIn = () => {
    const dom = divRef.current;
    if (status === NORMAL) {  // 如果是普通状态 则最大化
      dom.classList.remove(toMin);
      dom.classList.add(toMax);
      // dom.className += ' ' + toMax;
      status = ZOOM_IN;
      setTimeout(() => {
        dispatch({ type: CHART_RESIZE });
      }, ANIMATION_TIME);
    } else if (status === ZOOM_OUT) {  // 如果是最小化状态 则变为普通状态
      dom.className = dom.className.replace(toMin, minTo);
      dom.childNodes[0].childNodes[1].classList.remove('height-to-hide');
      // dom.childNodes[0].childNodes[1].className = dom.childNodes[0].childNodes[1].className.replace(' height-to-hide', '');
      status = LOCK;
      setTimeout(() => {
        dom.classList.remove(minTo);
        // dom.className = dom.className.replace(' ' + minTo, '');
        status = NORMAL;
        dispatch({ type: CHART_RESIZE });
      }, ANIMATION_TIME);
    }
  }
  const zoomOut = () => {
    const dom = divRef.current;
    if (status === ZOOM_IN) {
      dom.className = dom.className.replace(toMax, maxTo);
      status = LOCK;
      setTimeout(() => {
        dom.className = dom.className.replace(' ' + maxTo, '');
        status = NORMAL;
        dispatch({ type: CHART_RESIZE });
      }, ANIMATION_TIME);
    } else if (status === NORMAL) {
      dom.className += ' ' + toMin;
      dom.childNodes[0].childNodes[1].className += ' height-to-hide';
      status = ZOOM_OUT;
      setTimeout(() => {
        dispatch({ type: CHART_RESIZE });
      }, ANIMATION_TIME);
    }
  }
  return (
    <>
      <span>{title}</span>
      <div className='btn-title'>
        <DownloadBtn dataUrl={dataUrl} title={title} />
        <button className='btn-zoom-out' onClick={zoomOut}>﹣</button>
        <button className='btn-zoom-in' onClick={zoomIn}>□</button>
      </div>
    </>
  );
}

export default (props) => {
  const { dispatch } = useContext(ChartResizeContext);
  return useMemo(() => CardTitle({ ...props, dispatch: dispatch }), [props, dispatch]);
}
