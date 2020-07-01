export const MAX_LOG_QUANTITY = 100;

export const TYPE = {
  SYSTEM: '系统消息',
  COMMAND_SHOW: '态势呈现指令',
  COMMAND_CHANGE: '态势改变指令',
  COMMAND_EVENT: '事件指令',
};

export const STATUS = {
  UNKNOWN: {
    key: 'UNKNOWN',
    value: '未知',
    color: '#888888',
  },
  OK: {
    key: 'OK',
    value: '正常',
    color: '#4EC430'
  },
  WARN: {
    key: 'WARN',
    value: '告警',
    color: '#FC8C23'
  },
  ERROR: {
    key: 'ERROR',
    value: '错误',
    color: '#F7222D',
  },
  URGENT: {
    key: 'URGENT',
    value: '紧急告警',
    color: '#F7222D'
  },
  IMPORTANT: {
    key: 'IMPORTANT',
    value: '重要告警',
    color: '#FC8C23'
  },
  MINOR: {
    key: 'MINOR',
    value: '次要告警',
    color: '#FBDB32'
  },
  INFO: {
    key: 'INFO',
    value: '信息告警',
    color: '#108EE9'
  }
}