import React, { Fragment } from 'react';

import { Popover } from 'antd';
import TransAnimation from './TransAnimation';
import { RequestAddrContext, CHANGE_ADDR } from 'store/providers/request-addr';
import { useContext } from 'react';
import { useMemo } from 'react';

const Icon = ({ type }) => {
  switch (type) {
    case 'center':
      return <svg viewBox="0 0 1024 1024" width="48" height="48"><path d="M 224 832 m 32 0 l 512 0 q 32 0 32 32 l 0 0 q 0 32 -32 32 l -512 0 q -32 0 -32 -32 l 0 0 q 0 -32 32 -32 Z" fill="#868686" p-id="5602"></path><path d="M 480 704 m 32 0 l 0 0 q 32 0 32 32 l 0 96 q 0 32 -32 32 l 0 0 q -32 0 -32 -32 l 0 -96 q 0 -32 32 -32 Z" fill="#868686" p-id="5603"></path><path d="M 160 128 h 704 c 35.348 0 64 28.652 64 64 v 480 c 0 35.348 -28.652 64 -64 64 H 160 c -35.348 0 -64 -28.652 -64 -64 V 192 C 96 156.652 124.652 128 160 128 Z m 189.42 311.536 h 131.508 c 0 -72.62 -58.888 -131.512 -131.508 -131.512 S 217.908 366.92 217.908 439.536 S 276.8 571.04 349.42 571.04 V 439.536 Z m 36.852 167.28 c 72.62 0 131.508 -58.892 131.508 -131.512 H 386.272 v 131.508 Z m 234.116 -244.6 c 0 14.092 11.2 25.292 25.288 25.292 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z m 0 92.856 c 0 14.088 11.2 25.288 25.288 25.288 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z m 0 92.852 c 0 14.088 11.2 25.288 25.288 25.288 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z" fill="#868686" p-id="5604"></path></svg>;
    case 'region':
      return <svg viewBox="0 0 1024 1024" width="32" height="32"><path d="M511.2 114.5c48.6 0 95.7 4.1 139.8 12.2 41.8 7.6 79 18.5 110.7 32.1 28.7 12.4 51.6 26.8 66 41.6 7.2 7.4 15.8 18.4 15.8 29.4s-8.6 22-15.8 29.4c-14.5 14.8-37.3 29.2-66 41.6-31.6 13.7-68.9 24.5-110.7 32.1-44.2 8.1-91.2 12.2-139.8 12.2s-95.7-4.1-139.8-12.2c-41.8-7.6-79-18.5-110.7-32.1-28.7-12.4-51.6-26.8-66-41.6-7.2-7.4-15.8-18.4-15.8-29.4s8.6-22 15.8-29.4c14.5-14.8 37.3-29.2 66-41.6 31.6-13.7 68.9-24.5 110.7-32.1 44.2-8.1 91.2-12.2 139.8-12.2m0-50c-211.2 0-382.3 74-382.3 165.3S300.1 395 511.2 395s382.3-74 382.3-165.3S722.4 64.5 511.2 64.5zM512.4 586.5c-98.5 0-191.5-15.3-261.8-43.2-35.7-14.2-64.1-31-84.4-50-23.5-22-36-47.4-36-73.3h50c0 26.1 33.2 54.8 88.8 76.8 64.6 25.6 151 39.7 243.4 39.7s178.8-14.1 243.4-39.7c55.6-22 88.8-50.7 88.8-76.8h50c0 25.9-12.4 51.3-36 73.3-20.3 19-48.7 35.8-84.4 50-70.3 27.9-163.3 43.2-261.8 43.2zM511.7 775.4c-98.4 0-191.3-13.9-261.5-39.1-35.7-12.8-64.1-28.1-84.4-45.3-30.5-25.9-37-51.8-37-69h50.1c0 17.2 23.2 43.9 88.2 67.3 64.9 23.3 151.8 36.1 244.6 36.1 92.8 0 179.6-12.8 244.6-36.1 65.1-23.3 88.2-50.1 88.2-67.3h50.1c0 17.2-6.4 43.1-37 69-20.3 17.2-48.7 32.5-84.4 45.3-70.2 25.2-163.1 39.1-261.5 39.1zM511.7 953.2c-98.4 0-191.2-13.7-261.5-38.7-35.7-12.7-64.1-27.8-84.4-44.9-30.6-25.7-37-51.5-37-68.7h50c0 16.9 23.2 43.3 88.2 66.4 65 23.1 151.9 35.8 244.7 35.8 92.8 0 179.7-12.7 244.7-35.8 65-23.1 88.2-49.5 88.2-66.4h50c0 17.1-6.4 42.9-37 68.7-20.3 17.1-48.7 32.2-84.4 44.9-70.3 25-163.1 38.7-261.5 38.7z" p-id="6521" fill="#515151"></path><path d="M159.6 823H153c-13.4 0-24.3-10.9-24.3-24.3V235.3c0-13.4 10.9-24.3 24.3-24.3h6.6c10.5 0 19.1 8.6 19.1 19.1v573.8c0 10.5-8.6 19.1-19.1 19.1zM875.5 825.3h-6.6c-13.4 0-24.3-10.9-24.3-24.3V238.6c0-13.4 10.9-24.3 24.3-24.3h6.6c10.5 0 19.1 8.6 19.1 19.1v572.8c0 10.5-8.6 19.1-19.1 19.1zM758.5 393c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5zM758.5 583c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5zM758.5 771c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5z" p-id="6522" fill="#515151"></path></svg>;
    case 'node':
      return <svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M482.1 293.3h60.8V677h-60.8z" fill="#A4A9AD" p-id="669"></path><path d="M512.5 617.1l-30.4-23.8v83.8h60.8v-83.8z" fill="" p-id="670"></path><path d="M482.1 293.3v110.5c9.8 2 20 3 30.4 3 10.4 0 20.6-1 30.4-3V293.3h-60.8z" fill="" p-id="671"></path><path d="M421.57 567.208L703.51 788.18l-37.508 47.856-281.94-220.974z" fill="#A4A9AD" p-id="672"></path><path d="M504 631.7l-49.3 38.7L504 709l49.3-38.6z" fill="" p-id="673"></path><path d="M392.1 604.9l-3.8 13.4 51.7 40.5 17.9-63.2-36.2-28.4z" fill="" p-id="674"></path><path d="M526.3 649.2L477 687.8l49.3 38.7 49.3-38.7z" fill="" p-id="675"></path><path d="M603.408 567.172l37.508 47.856L358.976 836l-37.507-47.855z" fill="#A4A9AD" p-id="676"></path><path d="M335.3 805.6l23.8 30.4 39.5-31 28.2-99.4-81.3 63.7zM603.4 567.2l-36.3 28.4 17.9 63.2 51.8-40.5-3.8-13.4zM679.5 769.3l-81.2-63.7 28.1 99.4 39.6 31 23.8-30.4z" fill="" p-id="677"></path><path d="M687.2 932.3L512.5 315.6 337.9 932.3l-58.5-16.6 203.9-720c3.7-13.1 15.7-22.1 29.3-22.1 13.6 0 25.5 9 29.3 22.1l203.9 720-58.6 16.6z" fill="#333E48" p-id="678"></path><path d="M541.8 195.7c-3.7-13.1-15.7-22.1-29.3-22.1-13.6 0-25.5 9-29.3 22.1l-55.9 197.4c17.2 10.5 36.5 17.9 57.1 21.5l28-99 28 99c20.6-3.6 39.9-11 57.1-21.5l-55.7-197.4z" fill="" p-id="679"></path><path d="M512.5 253.5m-109.6 0a109.6 109.6 0 1 0 219.2 0 109.6 109.6 0 1 0-219.2 0Z" fill="#D1D3D3" p-id="680"></path><path d="M369 384.1c-4.1 0-8.3-1.8-11.1-5.3-28.6-35.3-44.4-79.8-44.4-125.3s15.8-90 44.4-125.2c5-6.1 13.9-7.1 20.1-2.1 6.1 5 7 13.9 2.1 20-24.5 30.2-38 68.3-38 107.3s13.5 77.1 38 107.3c5 6.1 4 15.1-2.1 20.1-2.6 2.1-5.8 3.2-9 3.2z" fill="#FFB819" p-id="681"></path><path d="M299 440.8c-4.1 0-8.3-1.8-11.1-5.3-41.6-51.3-64.5-115.9-64.5-182s22.9-130.7 64.5-182c5-6.1 13.9-7.1 20-2.1s7 13.9 2.1 20c-37.5 46.2-58.1 104.5-58.1 164s20.6 117.8 58.1 164c5 6.1 4 15.1-2.1 20-2.6 2.3-5.7 3.4-8.9 3.4zM656 384.1c-3.2 0-6.3-1-9-3.2-6.1-5-7-13.9-2.1-20.1 24.5-30.2 38-68.3 38-107.3s-13.5-77.1-38-107.3c-5-6.1-4-15.1 2.1-20 6.1-5 15.1-4 20.1 2.1 28.6 35.3 44.4 79.8 44.4 125.2 0 45.5-15.8 90-44.4 125.3-2.8 3.5-6.9 5.3-11.1 5.3z" fill="#FFB819" p-id="682"></path><path d="M726.1 440.8c-3.2 0-6.3-1-9-3.2-6.1-5-7-13.9-2.1-20 37.5-46.2 58.1-104.5 58.1-164 0-59.6-20.6-117.8-58.1-164-5-6.1-4-15.1 2.1-20 6.1-5 15.1-4 20 2.1 41.6 51.3 64.5 115.9 64.5 182s-22.9 130.7-64.5 182c-2.8 3.3-6.9 5.1-11 5.1z" fill="#FFB819" p-id="683"></path><path d="M388.7 899.6c0-6.1-5-11.1-11.1-11.1h-138c-6.1 0-11.1 5-11.1 11.1v48.9c0 6.1 5 11.1 11.1 11.1h138c6.1 0 11.1-5 11.1-11.1v-48.9zM636.4 899.6c0-6.1 5-11.1 11.1-11.1h138c6.1 0 11.1 5 11.1 11.1v48.9c0 6.1-5 11.1-11.1 11.1h-138c-6.1 0-11.1-5-11.1-11.1v-48.9z" fill="#A4A9AD" p-id="684"></path></svg>;
    default:
      return null;
  }
}

// 数量，注意与POTION中的center、region、node中的数组的长度匹配
const CENTER_QUANTITY = 1;
const REGION_QUANTITY = 4;
const NODE_QUANTITY = 12;

// 图标信息
const CENTER_ICON_SIZE = 48;
const REGION_ICON_SIZE = 32;
const NODE_ICON_SIZE = 24;

// 位置信息
const POSITION = {
  center: {
    name: '频管中心',
    lon: [103.931664],
    lat: [30.749142],
    left: ['50%'],
    top: ['50%'],
  },
  region: {
    name: '域频管中心',
    lon: [103.867119, 103.862484, 103.99844, 103.999299],
    lat: [30.769867, 30.719115, 30.724575, 30.768835],
    left: ['32%', '30%', '69%', '69%'],
    top: ['28%', '74%', '65%', '33%'],
  },
  node: {
    name: '采集节点',
    lon: [103.825749, 103.875531, 103.858021, 103.885144, 103.800343, 103.847378, 103.997067, 104.066247, 104.015606, 103.977669, 104.04702, 104.022301],
    lat: [30.794054, 30.792137, 30.754822, 30.731953, 30.72369, 30.694615, 30.729297, 30.717197, 30.694024, 30.761017, 30.771342, 30.804228],
    left: ['20%', '43%', '28%', '25%', '25%', '40%', '60%', '78%', '65%', '63%', '78%', '73%'],
    top: ['13%', '21%', '40%', '80%', '65%', '80%', '59%', '62%', '78%', '40%', '38%', '25%'],
  }
}

const IconMap = ({ type, index }) => {
  const { dispatch } = useContext(RequestAddrContext);
  return useMemo(() => {
    const { title, x, y, left, top } = {
      title: POSITION[type].name,
      x: POSITION[type]['lon'][index],
      y: POSITION[type]['lat'][index],
      left: POSITION[type]['left'][index],
      top: POSITION[type]['top'][index],
    };
    // 编号 = index + 1
    const num = type === 'center' ? '' : ' - ' + (index + 1);

    const content = (
      <Fragment>
        <span>经度: {x}</span><br />
        <span>纬度: {y}</span>
      </Fragment>
    );
    console.log('渲染图标');
    return (
      <Popover key={type + index} content={content} title={title + num}>
        <div className='map-icon' style={{ left: left, top: top }} onClick={() => {
          if(type !== 'center') {
            dispatch({
              type: CHANGE_ADDR,
              data: 1
            })
          }
        }}>
          <Icon type={type} />
        </div>
      </Popover>
    );
  }, [type, index, dispatch]);
}

/*
 * params: 容器宽高、位置数组(百分比)
 * return: 点坐标数组
 */
const calCoor = (width, height, leftArr, topArr, offset, n) => {
  let coordinateArr = [], tempLeft = 0, tempTop = 0;
  for (let i = 0; i < n; i++) {
    tempLeft = width * Number(leftArr[i].slice(0, -1)) / 100 + offset;
    tempTop = height * Number(topArr[i].slice(0, -1)) / 100 + offset;
    coordinateArr.push([tempLeft, tempTop]);
  }
  return coordinateArr;
}

export default ({ type, width, height }) => {
  // 节点、域频管、频管中心的位置信息
  const nodePoints = calCoor(width, height, POSITION.node.left, POSITION.node.top, NODE_ICON_SIZE / 2, NODE_QUANTITY);
  const regionPoints = calCoor(width, height, POSITION.region.left, POSITION.region.top, REGION_ICON_SIZE / 2, REGION_QUANTITY);
  const centerPoints = calCoor(width, height, POSITION.center.left, POSITION.center.top, CENTER_ICON_SIZE / 2, CENTER_QUANTITY);

  const icons = [];
  const trans = [];
  for (let i = 0; i < NODE_QUANTITY; i++) {
    icons.push(
      <IconMap key={icons.length} type={'node'} index={i} />
    );
  }
  if (type === 'region' || type === 'center') {
    for (let i = 0; i < REGION_QUANTITY; i++) {
      icons.push(
        <IconMap key={icons.length} type={'region'} index={i} />
      );
      for (let j = i * 3; j < i * 3 + 3; j++) {
        trans.push(
          <TransAnimation key={trans.length} startPoint={nodePoints[j]} endPoint={regionPoints[i]} colorType={i} />
        );
      }
    }
  }
  if (type === 'center') {
    for (let i = 0; i < CENTER_QUANTITY; i++) {
      icons.push(
        <IconMap key={icons.length} type={'center'} index={i} />
      );
      for (let j = 0; j < 4; j++) {
        trans.push(
          <TransAnimation key={trans.length} startPoint={regionPoints[j]} endPoint={centerPoints[i]} colorType={j} />
        );
      }
    }
  }
  return (
    <>
      {icons}
      {trans}
    </>
  );
}