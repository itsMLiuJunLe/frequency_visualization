import React, { useContext } from 'react';

import { Icon, Dropdown, Menu, Timeline, Button, Badge, Typography, Tag } from 'antd';
import { LogContext } from 'store/providers/log';
import { MAX_LOG_QUANTITY, TYPE, STATUS } from 'api/log-info';
import { getDate } from 'api/util';

const { Text } = Typography;

const logs = [{
  status: STATUS.OK.key,
  date: getDate(),
  type: TYPE.SYSTEM,
  sub: '系统',
  description: '初始化成功',
}];

const addLog = log => {
  if (!log) {
    return;
  }
  if (log instanceof Array) {
    logs.splice(0, 0, ...log)
  } else {
    logs.unshift(log);
  }
  const n = logs.length;
  if (n > MAX_LOG_QUANTITY) {
    logs.splice(MAX_LOG_QUANTITY, n - MAX_LOG_QUANTITY);
  }
}

const T = ({ date, type, color, value, sub, description }) => (
  <>
    <Tag color='geekblue'>{date + ' > ' + type}</Tag>
    <Tag color={color}>{value}</Tag>
    <Tag >{sub}</Tag>
    <Text strong>{description}</Text>
  </>
);

const logsComponent = () => (
  <Menu style={{ maxHeight: '360px', overflowY: 'scroll' }}>
    <Menu.Item key="0" disabled>
      <Timeline>
        {logs.map((log, index) => {
          if (!log.status) {
            return <span>log</span>
          }
          const { color, value } = STATUS[log.status];
          return (
            <Timeline.Item key={index} color={color}>
              <T date={log.date} type={log.type} color={color} value={value} sub={log.sub} description={log.description} />
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Menu.Item>
  </Menu>
);

export default () => {
  const { state: log } = useContext(LogContext);
  addLog(log);
  const { color, value } = STATUS[logs[0].status];
  const { date, type, sub, description } = logs[0];
  return (
    <Dropdown overlay={logsComponent()} trigger={['click']}>
      <Button className="ant-dropdown-link log-info">
        <Badge color={color} text={<T date={date} type={type} color={color} value={value} sub={sub} description={description} />} />
        <Icon type="down" />
      </Button>
    </Dropdown>
  );
}