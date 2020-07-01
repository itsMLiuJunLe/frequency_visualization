import React from 'react';

import { Container, Jumbotron, Card } from 'react-bootstrap';
import imageStatistic from 'img/statistic.png';
import imageTime from 'img/time.png';
import imageFrequency from 'img/frequency.png';
import image3D from 'img/3D.png';

export default () => {
  return (
    <>
      <Jumbotron as="section" className='text-center'>
        <Container>
          <h1 className='mb-4'>城市大数据电磁态势分析平台中心层次</h1>
          <p className="lead text-muted">结构层次：包含<strong>采集节点</strong>和<strong>域频管中心</strong>和<strong>频管中心</strong>三个层次</p>
          <p className="lead text-muted">系统介绍：本系统为用户提供<strong>全面精准</strong>的频谱<strong>数据预测</strong>与<strong>可视分析</strong>功能，涵盖时域、频域、三维等特性</p>
        </Container>
      </Jumbotron>
      <div className='row mb-3 ml-3 mr-3'>
        <div className='col-12 col-lg-3'>
          <Card>
            <Card.Img variant="top" src={imageStatistic} />
            <Card.Body>
              <Card.Title>统计特性</Card.Title>
              <Card.Text>主要组件: 频谱箱线图、频谱分布特性统计、信道同期对比</Card.Text>
              <hr />
              <Card.Text>主要功能: 以频谱的原始数据作为分析对象，探究频谱数据的统计特性</Card.Text>
              <hr />
              <Card.Text>亮点: 观察频谱数据的分布特性</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-lg-3'>
          <Card>
            <Card.Img variant="top" src={imageTime} />
            <Card.Body>
              <Card.Title>时域特性</Card.Title>
              <Card.Text>主要组件: 频段实时变化、频谱时序预测、时间频段占用</Card.Text>
              <hr />
              <Card.Text>主要功能: 以频谱的时间域为分析对象，分析探测区域的频谱的时域变化情况</Card.Text>
              <hr />
              <Card.Text>亮点: 观察频谱数据的时域特性</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-lg-3'>
          <Card>
            <Card.Img variant="top" src={imageFrequency} />
            <Card.Body>
              <Card.Title>频域特性</Card.Title>
              <Card.Text>主要组件: 信道关联性、信道聚类结果、信道-时幅分布</Card.Text>
              <hr />
              <Card.Text>主要功能: 以频谱的频域作为分析对象，分析探测区域的频谱的频域统计特性</Card.Text>
              <hr />
              <Card.Text>亮点: 观察频谱数据的频域特性</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-lg-3'>
          <Card>
            <Card.Img variant="top" src={image3D} />
            <Card.Body>
              <Card.Title>三维特性</Card.Title>
              <Card.Text>主要组件: 信道三维信息展示、频谱三维信息展示</Card.Text>
              <hr />
              <Card.Text>主要功能: 以频谱的信道和频域作为分析对象，探究探测区域的时-频-幅三个维度的特性</Card.Text>
              <hr />
              <Card.Text>亮点: 观察频谱数据的时-频-幅特性</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}