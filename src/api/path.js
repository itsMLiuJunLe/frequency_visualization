//export const baseUrl = "http://localhost:8080/";
// export const baseUrl = "http://175.24.78.162:8080/";
export const baseUrl = "http://192.168.1.2:8080/"

export const wireOptionUrl = 'http://localhost:8080/api/option/wire-v2';
export const socketUrl = 'ws://127.0.0.1:8080/websocket/1';
export const path32 = [{
  title: `时频占用`,
  pos: 'left-top',
  url: baseUrl + 'api/option/1/Time_3',
  dataUrl: baseUrl + 'api/data/Time_3'
},{
  title: '区域用频热力图',
  pos: 'left-bottom',
  url: baseUrl + 'api/option/1/Area_HeatMap',
  dataUrl: baseUrl + 'api/data/Area_HeatMap',
  url_1: baseUrl + 'api/option/2/Area_HeatMap',
  dataUrl_1: baseUrl + 'api/data/Area_HeatMap',
}, {
  title: '区域用频甘特图',
  pos: 'right-center',
  url: baseUrl + 'api/option/1/Area_Gunt',
  dataUrl: baseUrl + 'api/data/Area_Gunt',
  url_1: baseUrl + 'api/option/2/Area_Gunt',
  dataUrl_1: baseUrl + 'api/data/Area_Gunt',
}];
const path = [
  // 采集节点 0
  [
    // 统计特性 0-0
    [{
      title: '频谱数据箱线',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Statistic_1',
      dataUrl: baseUrl + 'api/data/Statistic_1',
      url_1: baseUrl + 'api/option/2/Statistic_1',
      dataUrl_1: baseUrl + 'api/data/Statistic_1',
    }, {
      title: '频谱分布特性统计',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Statistic_2',
      dataUrl: baseUrl + 'api/data/Statistic_2',
      url_1: baseUrl + 'api/option/2/Statistic_2',
      dataUrl_1: baseUrl + 'api/data/Statistic_2',
    }, {
      title: '时间-频段占用',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Time_Region_3',
      dataUrl: baseUrl + 'api/data/Time_Region_3',
      url_1: baseUrl + 'api/option/2/Time_Region_3',
      dataUrl_1: baseUrl + 'api/data/Time_Region_3',
      // title: '信道数据趋势对比',
      // pos: 'right-center',
      // url: baseUrl + 'api/option/Statistic_3',
      // dataUrl: baseUrl + 'api/data/Statistic_3',
    }],
    // 时域特性 0-1
    [{
      title: '固定频段下频谱变化',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/Time_1',
      dataUrl: baseUrl + 'api/data/Time_1',
      url_1: baseUrl + 'api/option/2/Time_1',
      dataUrl_1: baseUrl + 'api/data/Time_1',
    }, 
    // {
    //   title: '频谱时序预测',
    //   pos: 'left-bottom',
    //   url: baseUrl + 'api/option/1/Time_2',
    //   dataUrl: baseUrl + 'api/data/Time_2',
    //   url_1: baseUrl + 'api/option/2/Time_2',
    //   dataUrl_1: baseUrl + 'api/data/Time_2',
    //   url_2: baseUrl + 'api/option/3/Time_2',
    //   dataUrl_2: baseUrl + 'api/data/Time_2',
    // }, 
    {
      title: '时间-频段占用',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Time_3',
      dataUrl: baseUrl + 'api/data/Time_3',
      url_1: baseUrl + 'api/option/2/Time_3',
      dataUrl_1: baseUrl + 'api/data/Time_3',
    }],
    // 频域特性 0-2
    [{
      title: '信道-时幅分布',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Frequency_1',
      dataUrl: baseUrl + 'api/data/Frequency_1',
      url_1: baseUrl + 'api/option/2/Frequency_1',
      dataUrl_: baseUrl + 'api/data/Frequency_1',
    }, {
      title: '频谱分布特性统计',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Frequency_2',
      dataUrl: baseUrl + 'api/data/Frequency_2',
      url_1: baseUrl + 'api/option/2/Frequency_2',
      dataUrl_1: baseUrl + 'api/data/Frequency_2',
    }, {
      title: '信道聚类结果',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Frequency_3',
      dataUrl: baseUrl + 'api/data/Frequency_3',
      url_1: baseUrl + 'api/option/2/Frequency_3',
      dataUrl_1: baseUrl + 'api/data/Frequency_3',
    }],
    // 三维特性 0-3
    [{
      title: '信道三维信息展示',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/3D_1',
      dataUrl: baseUrl + 'api/data/3D_1',
      url_1: baseUrl + 'api/option/2/3D_1',
      dataUrl_1: baseUrl + 'api/data/3D_1',
    }]
  ],
  // 域频管中心 1
  [
    // 时域特性 1-0
    [{
      title: '固定频段下频谱变化',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Time_Region_1',
      dataUrl: baseUrl + 'api/data/Time_Region_1',
      url_1: baseUrl + 'api/option/2/Time_Region_1',
      dataUrl_1: baseUrl + 'api/data/Time_Region_1',
    }, {
      title: '频谱时序预测',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Time_Region_2',
      dataUrl: baseUrl + 'api/data/Time_Region_2',
      url_1: baseUrl + 'api/option/2/Time_Region_2',
      dataUrl_1: baseUrl + 'api/data/Time_Region_2',
      url_2: baseUrl + 'api/option/3/Time_Region_2',
      dataUrl_2: baseUrl + 'api/data/Time_Region_2',
    }, {
      title: '时间-频段占用',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Time_Region_3',
      dataUrl: baseUrl + 'api/data/Time_Region_3',
      url_1: baseUrl + 'api/option/2/Time_Region_3',
      dataUrl_1: baseUrl + 'api/data/Time_Region_3',
    }],
    // 频域特性 1-1
    [{
      title: '信道-时幅分布',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Frequency_region_1',
      dataUrl: baseUrl + 'api/data/Frequency_region_1',
      url_1: baseUrl + 'api/option/2/Frequency_region_1',
      dataUrl_1: baseUrl + 'api/data/Frequency_region_1',
    }, {
      title: '用频瀑布图',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Frequency_region_2',
      dataUrl: baseUrl + 'api/data/Frequency_region_2',
      url_1: baseUrl + 'api/option/2/Frequency_region_2',
      dataUrl_1: baseUrl + 'api/data/Frequency_region_2',
    }, {
      title: '信道聚类结果',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Frequency_region_3',
      dataUrl: baseUrl + 'api/data/Frequency_region_3',
      url_1: baseUrl + 'api/option/2/Frequency_region_3',
      dataUrl_1: baseUrl + 'api/data/Frequency_region_3',
    }],
    // 三维特性 1-2
    [{
      title: '信道三维信息展示',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/3D_Region_1',
      dataUrl: baseUrl + 'api/data/3D_Region_1',
      url_1: baseUrl + 'api/option/2/3D_Region_1',
      dataUrl_1: baseUrl + 'api/data/3D_Region_1',
    }, {
      title: '信道三维信息展示',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/3D_Region_2',
      dataUrl: baseUrl + 'api/data/3D_Region_2',
      url_1: baseUrl + 'api/option/2/3D_Region_2',
      dataUrl_1: baseUrl + 'api/data/3D_Region_2',
    }]
  ],
  // 频管中心 2
  [
    // 时域特性 2-0
    [{
      title: '固定频段(2.400GHz)下频谱实时变化',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Time_Center_1',
      dataUrl: baseUrl + 'api/data/Time_Center_1',
      // url_1: baseUrl + 'api/option/2/Time_Center_1',
      // dataUrl_1: baseUrl + 'api/data/Time_Center_1',
    }, {
      title: '频谱时序预测',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Time_Center_2',
      dataUrl: baseUrl + 'api/data/Time_Center_2',
      // url_1: baseUrl + 'api/option/2/Time_Center_2',
      // dataUrl_1: baseUrl + 'api/data/Time_Center_2',
    }, {
      title: '时间-频段占用',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Time_Center_3',
      dataUrl: baseUrl + 'api/data/Time_Center_3',
      // url_1: baseUrl + 'api/option/2/Time_Center_3',
      // dataUrl_1: baseUrl + 'api/data/Time_Center_3',
    }],

    // 频域特性 2-1
    [{
      title: '信道-时幅分布',
      pos: 'left-top',
      url: baseUrl + 'api/option/1/Frequency_center_1',
      dataUrl: baseUrl + 'api/data/Frequency_center_1',
      // url_1: baseUrl + 'api/option/2/Frequency_center_1',
      // dataUrl_1: baseUrl + 'api/data/Frequency_center_1',
    }, {
      title: '用频瀑布图',
      pos: 'left-bottom',
      url: baseUrl + 'api/option/1/Frequency_center_2',
      dataUrl: baseUrl + 'api/data/Frequency_center_2',
      // url_1: baseUrl + 'api/option/2/Frequency_center_2',
      // dataUrl_1: baseUrl + 'api/data/Frequency_center_2',
    }, {
      title: '信道聚类结果',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Frequency_center_3',
      dataUrl: baseUrl + 'api/data/Frequency_center_3',
      // url_1: baseUrl + 'api/option/2/Frequency_center_3',
      // dataUrl_1: baseUrl + 'api/data/Frequency_center_3',
    }],
    // 三维特性 2-2
    [{
      title: '信道三维信息展示',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/3D_Center_1',
      dataUrl: baseUrl + 'api/data/3D_Center_1',
      // url_1: baseUrl + 'api/option/2/3D_Center_1',
      // dataUrl_1: baseUrl + 'api/data/3D_Center_1',
    }, {
      title: '信道三维信息展示',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/3D_Center_2',
      dataUrl: baseUrl + 'api/data/3D_Center_2',
      // url_1: baseUrl + 'api/option/2/3D_Center_2',
      // dataUrl_1: baseUrl + 'api/data/3D_Center_2',
    }],
  ],
  // 资源信息 3
  [
    // 气候信息 3-0
    [{
      title: '区域环境天气信息',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/Area_Temp',
      dataUrl: baseUrl + 'api/data/Area_Temp',
      url_1: baseUrl + 'api/option/2/Area_Temp',
      dataUrl_1: baseUrl + 'api/data/Area_Temp',
    }, {
      title: '区域雨量流量信息',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Area_Rrain',
      dataUrl: baseUrl + 'api/data/Area_Rrain',
      url_1: baseUrl + 'api/option/2/Area_Rrain',
      dataUrl_1: baseUrl + 'api/data/Area_Rrain',
    }],
    // 指导信息 3-1
    [{
      title: '区域用频热力图',
      pos: 'left-center',
      url: baseUrl + 'api/option/1/Area_HeatMap',
      dataUrl: baseUrl + 'api/data/Area_HeatMap',
      url_1: baseUrl + 'api/option/2/Area_HeatMap',
      dataUrl_1: baseUrl + 'api/data/Area_HeatMap',
    }, {
      title: '区域用频甘特图',
      pos: 'right-center',
      url: baseUrl + 'api/option/1/Area_Gunt',
      dataUrl: baseUrl + 'api/data/Area_Gunt',
      url_1: baseUrl + 'api/option/2/Area_Gunt',
      dataUrl_1: baseUrl + 'api/data/Area_Gunt',
    }]
  ],
];

export { path }