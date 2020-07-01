import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Navigation from 'containers/Navigation';
import Home from 'containers/Home';
import Provider from 'store/Provider';
import Background from 'components/background/Background';
import Btn from '../components/background/Button';
// import HeatMapCom from '../components/background/HeatMap_com';
// import HeatMapTel from '../components/background/HeatMap_tel';
// import HeatMapNav from '../components/background/HeatMap_nav';
// import HeatMapInt from '../components/background/HeatMap_int';
import Log from 'components/Log';

import Pages from 'components/pages/Pages';
import Page32 from 'components/pages/Page32';
import Trace from 'components/pages/Trace';

import 'css/normalize.css';
import 'css/main.css';

const { Header, Content, Sider } = Layout;

// const VERSION = 1;
const VERSION = 2;

const Version = ({ version }) => {
  switch (version) {
    case 1:
      return (
        <Header>
          <Navigation mode={'horizontal'} />
        </Header>
      );
    case 2:
      return (
        <Sider>
          <Navigation mode={'inline'} />
        </Sider>
      );
    default:
      return null;
  }
}
export default () => (
  <Router>
    <Layout>
      <Provider>
        <Version version={VERSION} />
        <Content>
          <Log />
          <div className='relative_visualArea'>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/main/:webtype' component={Background} />
            {
              Pages.map((item, index) => item.map((Page, idx) => <Route key={index + '-' + idx} path={'/main/wireless/' + index + '-' + idx} component={Page} />))
            }
            <Route path='/main/wireless/1-0' component={Btn} />
            <Route path='/main/wireless/3-2' component={Page32} />
            <Route path='/main/trace' component={Trace} />
          </div>
        </Content>
      </Provider>
    </Layout>
  </Router>
)