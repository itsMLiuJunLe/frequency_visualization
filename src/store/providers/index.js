import React from 'react';

import { DataSwitch } from './data-switch';
import { ChartResize } from './chart-resize';
import { Log } from './log';
import { RequestAddr } from './request-addr';

export default [
  // 这里添加每个Provider
  RequestAddr,
  Log,
  DataSwitch,
  ChartResize
].map((ProviderItem, index) => (<ProviderItem key={index} />));