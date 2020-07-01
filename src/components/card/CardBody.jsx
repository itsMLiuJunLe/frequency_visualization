import React, { useContext, useMemo } from 'react';

import { Empty } from 'antd';
import { Get } from 'react-axios';

import { DataSwitchContext } from 'store/providers/data-switch';
import { LogContext, ADD_LOG } from 'store/providers/log';
import { TYPE, STATUS } from 'api/log-info';
import { getDate } from 'api/util';
import Echart from './Echart';

export default ({ url, title }) => {
  const { state: dataSwitch } = useContext(DataSwitchContext);
  const { dispatch } = useContext(LogContext);
  return useMemo(() => {
    if (!dataSwitch) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
    return (
      <Get url={url}>
        {(error, response) => {
          if (error) {
            dispatch({
              type: ADD_LOG,
              data: {
                status: STATUS.ERROR.key,
                date: getDate(),
                type: TYPE.SYSTEM,
                sub: title,
                description: '数据请求失败 ' + error
              }
            });
          } else if (response !== null) {
            dispatch({
              type: ADD_LOG,
              data: {
                status: STATUS.OK.key,
                date: getDate(),
                type: TYPE.SYSTEM,
                sub: title,
                description: "数据请求成功"
              }
            });
            return <Echart option={response.data} />;
          }
          return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        }}
      </Get>
    );
  }, [dataSwitch, dispatch, url, title]);
}