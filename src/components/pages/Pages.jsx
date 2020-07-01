import React from 'react';

import { RequestAddrContext } from 'store/providers/request-addr';
import ChartCard from 'components/card/ChartCard';
import { path } from 'api/path';
import { useContext } from 'react';

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
export default path.map(pages => pages.map((page) => () => {
  const {state: pathIndex} = useContext(RequestAddrContext);
  return (
    <>
      {page.map((item, index) => {
        console.log(pathIndex);
        let inputUrl = item.url;
        let inputDataurl = item.dataUrl;
        if (pathIndex === 2) {
          if(item.url_1){
            inputUrl = item.url_1;
          inputDataurl = item.dataUrl_1;
          } else {
            inputUrl = item.url;
            inputDataurl = item.dataUrl;
          }
        }else if(pathIndex === 3){
          if(item.url_2){
            inputUrl = item.url_2;
          inputDataurl = item.dataUrl_2;
          } else {
            inputUrl = item.url;
            inputDataurl = item.dataUrl;
          }
          
        }

        console.log(inputUrl)
        return (
          <ChartCard key={item.title + index} title={item.title} pos={item.pos} index={index + 1} url={inputUrl} dataUrl={inputDataurl} />
        )
      }  
      )}
    </>
  );
}));
