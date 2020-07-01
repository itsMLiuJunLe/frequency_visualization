import React, { useRef } from 'react';

import { Card } from 'antd';

import CardTitle from './CardTitle';
import CardBody from './CardBody';

import 'css/card.css';

export default ({ title, pos, index, url, dataUrl }) => {
  const divRef = useRef(null);
  return (
    <div className={`chart-card pos-${pos}`} ref={divRef}>
      <Card title={<CardTitle title={title} divRef={divRef} index={index} dataUrl={dataUrl} />}>
        <CardBody url={url} title={title}/>
      </Card>
    </div>
  );
}