import React, { useMemo, useState } from 'react';

import { Tooltip } from 'antd';
import ChartCard from 'components/card/ChartCard';
import { path32 } from 'api/path';

export default () => {
  const [arr, setArr] = useState(null);
  const grid = useMemo(() => {
    const m = 20, n = 28;
    const matrix = [];
    for (let i = 0; i < m; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = path32.map(item => ({
          title: `未知区域(${i}, ${j}) ${item.title}`,
          pos: item.pos,
          url: item.url,
          dataUrl: item.dataUrl
        }));
      }
    }
    return (
      <div className='absolute flex-col wrap-grid'>
        {
          matrix.map((row, x) => (
            <div key={x}>
              {
                row.map((item, y) => {
                  const ver = x <= 1 ? 'bottom' : 'top';
                  let hor = '';
                  if (y <= 1) {
                    hor = 'Left';
                  } else if (y >= n - 2) {
                    hor = 'Right';
                  }
                  const placement = hor ? ver + hor : ver;
                  return (
                    <Tooltip key={y} title={`未知区域(${x}, ${y})`} placement={placement}>
                      <div className='single-grid' onClick={() => setArr(item)}></div>
                    </Tooltip>
                  );
                })
              }
            </div>
          ))
        }
      </div>
    );
  }, []);
  console.log('渲染栅格');
  return (
    <>
      {grid}
      {
        arr ? arr.map((item, index) => <ChartCard key={item.title + index} title={item.title} pos={item.pos} index={index + 1} url={item.url} dataUrl={item.dataUrl} />) : null
      }
    </>
  );
}
