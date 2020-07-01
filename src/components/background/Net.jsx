import React,{ useEffect } from 'react';

import { Popover } from 'antd';
import TransAnimation from './TransAnimation';
import ColorMenu from './NetMenu';
import ChangeHeatMap from './ChangeHeatMap';
import HeatMapCom from './HeatMap_com';
import HeatMapTel from './HeatMap_tel';
import HeatMapNav from './HeatMap_nav';
import HeatMapInt from './HeatMap_int';
import Close from './Close';
import { HashRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';

import 'css/signal.css';


const Icon = ({ type }) => {
  switch (type) {
    case 'center':
      return <svg viewBox="0 0 1024 1024" width="48" height="48"><path d="M 224 832 m 32 0 l 512 0 q 32 0 32 32 l 0 0 q 0 32 -32 32 l -512 0 q -32 0 -32 -32 l 0 0 q 0 -32 32 -32 Z" fill="#868686" p-id="5602"></path><path d="M 480 704 m 32 0 l 0 0 q 32 0 32 32 l 0 96 q 0 32 -32 32 l 0 0 q -32 0 -32 -32 l 0 -96 q 0 -32 32 -32 Z" fill="#868686" p-id="5603"></path><path d="M 160 128 h 704 c 35.348 0 64 28.652 64 64 v 480 c 0 35.348 -28.652 64 -64 64 H 160 c -35.348 0 -64 -28.652 -64 -64 V 192 C 96 156.652 124.652 128 160 128 Z m 189.42 311.536 h 131.508 c 0 -72.62 -58.888 -131.512 -131.508 -131.512 S 217.908 366.92 217.908 439.536 S 276.8 571.04 349.42 571.04 V 439.536 Z m 36.852 167.28 c 72.62 0 131.508 -58.892 131.508 -131.512 H 386.272 v 131.508 Z m 234.116 -244.6 c 0 14.092 11.2 25.292 25.288 25.292 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z m 0 92.856 c 0 14.088 11.2 25.288 25.288 25.288 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z m 0 92.852 c 0 14.088 11.2 25.288 25.288 25.288 h 117.42 c 14.092 0 25.292 -11.2 25.292 -25.288 c 0 -14.092 -11.2 -25.292 -25.292 -25.292 H 645.68 a 25.136 25.136 0 0 0 -25.288 25.292 Z" fill="#868686" p-id="5604"></path></svg>;
    case 'region':
      return <svg viewBox="0 0 1024 1024" width="32" height="32"><path d="M511.2 114.5c48.6 0 95.7 4.1 139.8 12.2 41.8 7.6 79 18.5 110.7 32.1 28.7 12.4 51.6 26.8 66 41.6 7.2 7.4 15.8 18.4 15.8 29.4s-8.6 22-15.8 29.4c-14.5 14.8-37.3 29.2-66 41.6-31.6 13.7-68.9 24.5-110.7 32.1-44.2 8.1-91.2 12.2-139.8 12.2s-95.7-4.1-139.8-12.2c-41.8-7.6-79-18.5-110.7-32.1-28.7-12.4-51.6-26.8-66-41.6-7.2-7.4-15.8-18.4-15.8-29.4s8.6-22 15.8-29.4c14.5-14.8 37.3-29.2 66-41.6 31.6-13.7 68.9-24.5 110.7-32.1 44.2-8.1 91.2-12.2 139.8-12.2m0-50c-211.2 0-382.3 74-382.3 165.3S300.1 395 511.2 395s382.3-74 382.3-165.3S722.4 64.5 511.2 64.5zM512.4 586.5c-98.5 0-191.5-15.3-261.8-43.2-35.7-14.2-64.1-31-84.4-50-23.5-22-36-47.4-36-73.3h50c0 26.1 33.2 54.8 88.8 76.8 64.6 25.6 151 39.7 243.4 39.7s178.8-14.1 243.4-39.7c55.6-22 88.8-50.7 88.8-76.8h50c0 25.9-12.4 51.3-36 73.3-20.3 19-48.7 35.8-84.4 50-70.3 27.9-163.3 43.2-261.8 43.2zM511.7 775.4c-98.4 0-191.3-13.9-261.5-39.1-35.7-12.8-64.1-28.1-84.4-45.3-30.5-25.9-37-51.8-37-69h50.1c0 17.2 23.2 43.9 88.2 67.3 64.9 23.3 151.8 36.1 244.6 36.1 92.8 0 179.6-12.8 244.6-36.1 65.1-23.3 88.2-50.1 88.2-67.3h50.1c0 17.2-6.4 43.1-37 69-20.3 17.2-48.7 32.5-84.4 45.3-70.2 25.2-163.1 39.1-261.5 39.1zM511.7 953.2c-98.4 0-191.2-13.7-261.5-38.7-35.7-12.7-64.1-27.8-84.4-44.9-30.6-25.7-37-51.5-37-68.7h50c0 16.9 23.2 43.3 88.2 66.4 65 23.1 151.9 35.8 244.7 35.8 92.8 0 179.7-12.7 244.7-35.8 65-23.1 88.2-49.5 88.2-66.4h50c0 17.1-6.4 42.9-37 68.7-20.3 17.1-48.7 32.2-84.4 44.9-70.3 25-163.1 38.7-261.5 38.7z" p-id="6521" fill="#515151"></path><path d="M159.6 823H153c-13.4 0-24.3-10.9-24.3-24.3V235.3c0-13.4 10.9-24.3 24.3-24.3h6.6c10.5 0 19.1 8.6 19.1 19.1v573.8c0 10.5-8.6 19.1-19.1 19.1zM875.5 825.3h-6.6c-13.4 0-24.3-10.9-24.3-24.3V238.6c0-13.4 10.9-24.3 24.3-24.3h6.6c10.5 0 19.1 8.6 19.1 19.1v572.8c0 10.5-8.6 19.1-19.1 19.1zM758.5 393c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5zM758.5 583c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5zM758.5 771c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5-14.1-31.5-31.5-31.5z" p-id="6522" fill="#515151"></path></svg>;
    case 'node':
      return <svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M482.1 293.3h60.8V677h-60.8z" fill="#A4A9AD" p-id="669"></path><path d="M512.5 617.1l-30.4-23.8v83.8h60.8v-83.8z" fill="" p-id="670"></path><path d="M482.1 293.3v110.5c9.8 2 20 3 30.4 3 10.4 0 20.6-1 30.4-3V293.3h-60.8z" fill="" p-id="671"></path><path d="M421.57 567.208L703.51 788.18l-37.508 47.856-281.94-220.974z" fill="#A4A9AD" p-id="672"></path><path d="M504 631.7l-49.3 38.7L504 709l49.3-38.6z" fill="" p-id="673"></path><path d="M392.1 604.9l-3.8 13.4 51.7 40.5 17.9-63.2-36.2-28.4z" fill="" p-id="674"></path><path d="M526.3 649.2L477 687.8l49.3 38.7 49.3-38.7z" fill="" p-id="675"></path><path d="M603.408 567.172l37.508 47.856L358.976 836l-37.507-47.855z" fill="#A4A9AD" p-id="676"></path><path d="M335.3 805.6l23.8 30.4 39.5-31 28.2-99.4-81.3 63.7zM603.4 567.2l-36.3 28.4 17.9 63.2 51.8-40.5-3.8-13.4zM679.5 769.3l-81.2-63.7 28.1 99.4 39.6 31 23.8-30.4z" fill="" p-id="677"></path><path d="M687.2 932.3L512.5 315.6 337.9 932.3l-58.5-16.6 203.9-720c3.7-13.1 15.7-22.1 29.3-22.1 13.6 0 25.5 9 29.3 22.1l203.9 720-58.6 16.6z" fill="#333E48" p-id="678"></path><path d="M541.8 195.7c-3.7-13.1-15.7-22.1-29.3-22.1-13.6 0-25.5 9-29.3 22.1l-55.9 197.4c17.2 10.5 36.5 17.9 57.1 21.5l28-99 28 99c20.6-3.6 39.9-11 57.1-21.5l-55.7-197.4z" fill="" p-id="679"></path><path d="M512.5 253.5m-109.6 0a109.6 109.6 0 1 0 219.2 0 109.6 109.6 0 1 0-219.2 0Z" fill="#D1D3D3" p-id="680"></path><path d="M369 384.1c-4.1 0-8.3-1.8-11.1-5.3-28.6-35.3-44.4-79.8-44.4-125.3s15.8-90 44.4-125.2c5-6.1 13.9-7.1 20.1-2.1 6.1 5 7 13.9 2.1 20-24.5 30.2-38 68.3-38 107.3s13.5 77.1 38 107.3c5 6.1 4 15.1-2.1 20.1-2.6 2.1-5.8 3.2-9 3.2z" fill="#FFB819" p-id="681"></path><path d="M299 440.8c-4.1 0-8.3-1.8-11.1-5.3-41.6-51.3-64.5-115.9-64.5-182s22.9-130.7 64.5-182c5-6.1 13.9-7.1 20-2.1s7 13.9 2.1 20c-37.5 46.2-58.1 104.5-58.1 164s20.6 117.8 58.1 164c5 6.1 4 15.1-2.1 20-2.6 2.3-5.7 3.4-8.9 3.4zM656 384.1c-3.2 0-6.3-1-9-3.2-6.1-5-7-13.9-2.1-20.1 24.5-30.2 38-68.3 38-107.3s-13.5-77.1-38-107.3c-5-6.1-4-15.1 2.1-20 6.1-5 15.1-4 20.1 2.1 28.6 35.3 44.4 79.8 44.4 125.2 0 45.5-15.8 90-44.4 125.3-2.8 3.5-6.9 5.3-11.1 5.3z" fill="#FFB819" p-id="682"></path><path d="M726.1 440.8c-3.2 0-6.3-1-9-3.2-6.1-5-7-13.9-2.1-20 37.5-46.2 58.1-104.5 58.1-164 0-59.6-20.6-117.8-58.1-164-5-6.1-4-15.1 2.1-20 6.1-5 15.1-4 20 2.1 41.6 51.3 64.5 115.9 64.5 182s-22.9 130.7-64.5 182c-2.8 3.3-6.9 5.1-11 5.1z" fill="#FFB819" p-id="683"></path><path d="M388.7 899.6c0-6.1-5-11.1-11.1-11.1h-138c-6.1 0-11.1 5-11.1 11.1v48.9c0 6.1 5 11.1 11.1 11.1h138c6.1 0 11.1-5 11.1-11.1v-48.9zM636.4 899.6c0-6.1 5-11.1 11.1-11.1h138c6.1 0 11.1 5 11.1 11.1v48.9c0 6.1-5 11.1-11.1 11.1h-138c-6.1 0-11.1-5-11.1-11.1v-48.9z" fill="#A4A9AD" p-id="684"></path></svg>;
    // case 'red_signal':
    //   return <svg t="1576062225892" className="icon" viewBox="0 0 1133 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3272" width="32" height="32"><path d="M616.42343 257.987297c-145.976006 0-264.491179 118.515173-264.491179 264.491179 0 145.976006 118.515173 264.491179 264.491179 264.491178 145.976006 0 264.491179-118.515173 264.491178-264.491178 0-145.976006-118.515173-264.491179-264.491178-264.491179z m0 466.834157c-111.288638 0-201.620325-90.331687-201.620325-201.620325 0-111.288638 90.331687-201.620325 201.620325-201.620324 111.288638 0 201.620325 90.331687 201.620324 201.620324 0 111.288638-90.331687 201.620325-201.620324 201.620325z" fill="#d81e06" p-id="3273"></path><path d="M770.348624 527.53705c0 6.503881-5.058574 11.562456-11.562456 11.562456H473.338038c-6.503881 0-11.562456-5.058574-11.562456-11.562456v-28.90614c0-6.503881 5.058574-11.562456 11.562456-11.562456h286.170783c6.503881 0 11.562456 5.058574 11.562456 11.562456v28.90614z" fill="#d81e06" p-id="3274"></path><path d="M591.130558 806.481299v54.199012c0 10.117149 5.058574 18.066337 12.285109 18.066337h26.738179c6.503881 0 12.285109-7.949188 12.28511-18.066337v-54.199012c-8.671842 0.722653-17.343684 1.445307-26.015526 1.445307-9.394495 0-17.343684-0.722653-25.292872-1.445307z" fill="#d81e06" p-id="3275"></path><path d="M743.610445 836.832745c10.117149 0 18.066337 7.949188 18.066337 18.066338v22.402258c0 10.117149-7.949188 18.066337-18.066337 18.066337H488.513761c-10.117149 0-18.066337-7.949188-18.066337-18.066337v-22.402258c0-10.117149 7.949188-18.066337 18.066337-18.066338h255.096684z" fill="#d81e06" p-id="3276"></path><path d="M648.942837 301.346507c7.226535 5.781228 8.671842 15.898377 2.890614 23.124911-5.781228 7.226535-15.898377 8.671842-23.124912 2.890614l-47.69513-36.855328c-7.226535-5.781228-8.671842-15.898377-2.890614-23.124911 5.781228-7.226535 15.898377-8.671842 23.124911-2.890614l47.695131 36.855328zM699.528582 270.99506c1.445307 9.394495-5.058574 17.343684-14.45307 18.788991-9.394495 1.445307-17.343684-5.058574-18.788991-14.45307l-7.949189-59.98024c-1.445307-9.394495 5.058574-17.343684 14.45307-18.788991 9.394495-1.445307 17.343684 5.058574 18.788991 14.45307l7.949189 59.98024zM611.364855 385.174312c9.394495-1.445307 15.898377-9.394495 14.45307-18.788991-1.445307-8.671842-9.394495-15.175723-18.788991-14.45307l-59.98024 7.949189c-9.394495 1.445307-15.175723 9.394495-14.453069 18.78899 1.445307 9.394495 9.394495 15.898377 18.78899 14.45307l59.98024-7.949188z" fill="#d81e06" p-id="3277"></path></svg>
    // case 'blue_signal':
    //   return <svg t="1576062225892" className="icon" viewBox="0 0 1133 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3272" width="32" height="32"><path d="M616.42343 257.987297c-145.976006 0-264.491179 118.515173-264.491179 264.491179 0 145.976006 118.515173 264.491179 264.491179 264.491178 145.976006 0 264.491179-118.515173 264.491178-264.491178 0-145.976006-118.515173-264.491179-264.491178-264.491179z m0 466.834157c-111.288638 0-201.620325-90.331687-201.620325-201.620325 0-111.288638 90.331687-201.620325 201.620325-201.620324 111.288638 0 201.620325 90.331687 201.620324 201.620324 0 111.288638-90.331687 201.620325-201.620324 201.620325z" fill="#1296db" p-id="3273"></path><path d="M770.348624 527.53705c0 6.503881-5.058574 11.562456-11.562456 11.562456H473.338038c-6.503881 0-11.562456-5.058574-11.562456-11.562456v-28.90614c0-6.503881 5.058574-11.562456 11.562456-11.562456h286.170783c6.503881 0 11.562456 5.058574 11.562456 11.562456v28.90614z" fill="#1296db" p-id="3274"></path><path d="M591.130558 806.481299v54.199012c0 10.117149 5.058574 18.066337 12.285109 18.066337h26.738179c6.503881 0 12.285109-7.949188 12.28511-18.066337v-54.199012c-8.671842 0.722653-17.343684 1.445307-26.015526 1.445307-9.394495 0-17.343684-0.722653-25.292872-1.445307z" fill="#1296db" p-id="3275"></path><path d="M743.610445 836.832745c10.117149 0 18.066337 7.949188 18.066337 18.066338v22.402258c0 10.117149-7.949188 18.066337-18.066337 18.066337H488.513761c-10.117149 0-18.066337-7.949188-18.066337-18.066337v-22.402258c0-10.117149 7.949188-18.066337 18.066337-18.066338h255.096684z" fill="#1296db" p-id="3276"></path><path d="M648.942837 301.346507c7.226535 5.781228 8.671842 15.898377 2.890614 23.124911-5.781228 7.226535-15.898377 8.671842-23.124912 2.890614l-47.69513-36.855328c-7.226535-5.781228-8.671842-15.898377-2.890614-23.124911 5.781228-7.226535 15.898377-8.671842 23.124911-2.890614l47.695131 36.855328zM699.528582 270.99506c1.445307 9.394495-5.058574 17.343684-14.45307 18.788991-9.394495 1.445307-17.343684-5.058574-18.788991-14.45307l-7.949189-59.98024c-1.445307-9.394495 5.058574-17.343684 14.45307-18.788991 9.394495-1.445307 17.343684 5.058574 18.788991 14.45307l7.949189 59.98024zM611.364855 385.174312c9.394495-1.445307 15.898377-9.394495 14.45307-18.788991-1.445307-8.671842-9.394495-15.175723-18.788991-14.45307l-59.98024 7.949189c-9.394495 1.445307-15.175723 9.394495-14.453069 18.78899 1.445307 9.394495 9.394495 15.898377 18.78899 14.45307l59.98024-7.949188z" fill="#1296db" p-id="3277"></path></svg>

    case 'red_communication':
      return <svg t="1576647668438" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1484" width="24" height="24"><path d="M512 1020C232 1020 4 792 4 512S232 4 512 4 1020 232 1020 512 792 1020 512 1020z m0-984C249.6 36 36 249.6 36 512s213.6 476 476 476 476-213.6 476-476S774.4 36 512 36z" p-id="1485" fill="#d81e06"></path><path d="M512 1012c-155.2 0-280.8-224-280.8-500S356.8 12 512 12c155.2 0 280.8 224 280.8 500S667.2 1012 512 1012z m0-984C365.6 28 247.2 244.8 247.2 512s118.4 484 264.8 484S776.8 779.2 776.8 512 658.4 28 512 28z" p-id="1486" fill="#d81e06"></path><path d="M512 1009.6c-4.8 0-8-3.2-8-8V20c0-4.8 3.2-8 8-8s8 3.2 8 8v981.6c0 4-3.2 8-8 8z" p-id="1487" fill="#d81e06"></path><path d="M925.6 788H98.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h827.2c4.8 0 8 3.2 8 8s-3.2 8-8 8zM1002.4 520H21.6c-4.8 0-8-3.2-8-8s3.2-8 8-8h981.6c4.8 0 8 3.2 8 8-0.8 4.8-4 8-8.8 8zM925.6 252H98.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h827.2c4.8 0 8 3.2 8 8 0 4-3.2 8-8 8z" p-id="1488" fill="#d81e06"></path></svg>;
    case 'red_navigation':
      return <svg t="1576647749579" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1386" width="24" height="24"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-938.666667C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m-35.029333 462.250667l-306.602667-48.768 598.144-243.114667-242.944 597.589334-48.597333-305.706667z" p-id="1387" fill="#d81e06"></path></svg>;
    case 'red_telecontrol':
      return <svg t="1576647818407" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="635" width="24" height="24"><path d="M635.832558 1024H372.291473c-36.514729 0-66.67907-30.164341-66.67907-66.67907V455.64031c0-36.514729 30.164341-66.67907 66.67907-66.67907h263.541085c36.514729 0 66.67907 30.164341 66.67907 66.67907v501.68062c0 36.514729-30.164341 66.67907-66.67907 66.67907z m-263.541085-603.286822c-19.051163 0-34.927132 15.875969-34.927132 34.927132v501.68062c0 19.051163 15.875969 34.927132 34.927132 34.927132h263.541085c19.051163 0 34.927132-15.875969 34.927132-34.927132V455.64031c0-19.051163-15.875969-34.927132-34.927132-34.927132H372.291473z" fill="#d81e06" p-id="636"></path><path d="M686.635659 547.72093H337.364341c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h349.271318c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM686.635659 896.992248H337.364341c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h349.271318c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM527.875969 960.496124h-47.627907c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h47.627907c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM480.248062 452.465116h127.007752v31.751938h-127.007752zM416.744186 452.465116h31.751938v31.751938h-31.751938zM721.562791 257.190698c-3.175194 0-7.937984-1.587597-9.525582-3.175194 0 0-1.587597 0-1.587597-1.587597-109.544186-109.544186-288.942636-109.544186-398.486821 0-6.350388 6.350388-15.875969 6.350388-22.226357 0-6.350388-6.350388-6.350388-15.875969 0-22.226357 58.741085-58.741085 138.12093-92.08062 222.263566-92.08062 84.142636 0 163.522481 33.339535 222.263566 92.08062 4.762791 6.350388 6.350388 14.288372 0 20.63876-3.175194 3.175194-7.937984 6.350388-12.700775 6.350388z" fill="#d81e06" p-id="637"></path><path d="M211.944186 161.934884c-4.762791 0-7.937984-1.587597-11.113178-4.762791-6.350388-6.350388-6.350388-15.875969 0-22.226357 171.460465-171.460465 449.289922-171.460465 620.750387 0 6.350388 6.350388 6.350388 15.875969 0 22.226357s-15.875969 6.350388-22.226356 0c-158.75969-158.75969-417.537984-158.75969-576.297675 0-3.175194 3.175194-7.937984 4.762791-11.113178 4.762791zM616.781395 336.570543c-4.762791 0-7.937984-1.587597-11.113178-4.762791a133.19938 133.19938 0 0 0-188.924031 0c-6.350388 6.350388-15.875969 6.350388-22.226357 0-6.350388-6.350388-6.350388-15.875969 0-22.226357 65.091473-65.091473 169.872868-65.091473 233.376745 0l1.587597 1.587597c4.762791 6.350388 4.762791 17.463566-3.175194 22.226357-3.175194 1.587597-6.350388 3.175194-9.525582 3.175194z" fill="#d81e06" p-id="638"></path></svg>
    case 'red_interfere':
      return <svg t="1576647866698" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="593" width="24" height="24"><path d="M511.989 431.579c-44.09 0-79.814 35.75-79.814 79.825 0 44.085 35.724 79.835 79.814 79.835 44.079 0 79.824-35.75 79.824-79.835 0-44.075-35.745-79.825-79.824-79.825zM701.046 305.813l-18.74 35.263c53.086 37.953 87.67 100.117 87.67 170.327 0 70.953-35.311 133.627-89.309 171.45l18.784 35.333c63.688-46.586 105.076-121.831 105.076-206.783 0-84.225-40.693-158.949-103.481-205.59zM323.507 717.438l20.488-34.074c-54.389-37.791-90.003-100.708-90.003-171.96 0-70.476 34.855-132.819 88.267-170.745l-20.434-34.02c-62.158 46.706-102.353 121.028-102.353 204.765 0.001 84.495 40.922 159.415 104.035 206.034z" fill="#d81e06" p-id="594"></path><path d="M406.685 610.289c-35.062-19.013-55.875-56.18-55.875-98.886 0-42.957 21.106-80.28 56.494-99.189l-18.329-35.821c-44.416 28.507-73.856 78.322-73.856 135.011 0 56.455 29.191 106.059 73.249 134.62l18.317-35.735zM636.229 377.174l-14.248 38.041c32.489 19.712 51.165 55.414 51.165 96.189 0 40.558-18.447 76.086-50.645 95.868l14.248 38.02c43.429-28.697 72.077-77.921 72.077-133.888 0.001-56.169-28.864-105.582-72.597-134.23z" fill="#d81e06" p-id="595"></path><path d="M512.013 93.174C280.69 93.174 93.182 280.695 93.182 512c0 231.307 187.508 418.826 418.831 418.826 231.315 0 418.806-187.52 418.806-418.826-0.001-231.305-187.491-418.826-418.806-418.826z m-0.001 819.795c-221.459 0-400.973-179.524-400.973-400.969 0-221.442 179.514-400.969 400.973-400.969 221.453 0 400.949 179.526 400.949 400.969 0 221.444-179.496 400.969-400.949 400.969z" fill="#d81e06" p-id="596"></path></svg>;
    case 'blue_communication':
      return <svg t="1576647668438" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1484" width="24" height="24"><path d="M512 1020C232 1020 4 792 4 512S232 4 512 4 1020 232 1020 512 792 1020 512 1020z m0-984C249.6 36 36 249.6 36 512s213.6 476 476 476 476-213.6 476-476S774.4 36 512 36z" p-id="1485" fill="#1296db"></path><path d="M512 1012c-155.2 0-280.8-224-280.8-500S356.8 12 512 12c155.2 0 280.8 224 280.8 500S667.2 1012 512 1012z m0-984C365.6 28 247.2 244.8 247.2 512s118.4 484 264.8 484S776.8 779.2 776.8 512 658.4 28 512 28z" p-id="1486" fill="#1296db"></path><path d="M512 1009.6c-4.8 0-8-3.2-8-8V20c0-4.8 3.2-8 8-8s8 3.2 8 8v981.6c0 4-3.2 8-8 8z" p-id="1487" fill="#1296db"></path><path d="M925.6 788H98.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h827.2c4.8 0 8 3.2 8 8s-3.2 8-8 8zM1002.4 520H21.6c-4.8 0-8-3.2-8-8s3.2-8 8-8h981.6c4.8 0 8 3.2 8 8-0.8 4.8-4 8-8.8 8zM925.6 252H98.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h827.2c4.8 0 8 3.2 8 8 0 4-3.2 8-8 8z" p-id="1488" fill="#1296db"></path></svg>;
    case 'blue_navigation':
      return <svg t="1576647749579" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1386" width="24" height="24"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-938.666667C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m-35.029333 462.250667l-306.602667-48.768 598.144-243.114667-242.944 597.589334-48.597333-305.706667z" p-id="1387" fill="#1296db"></path></svg>;
    case 'blue_telecontrol':
      return <svg t="1576647818407" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="635" width="24" height="24"><path d="M635.832558 1024H372.291473c-36.514729 0-66.67907-30.164341-66.67907-66.67907V455.64031c0-36.514729 30.164341-66.67907 66.67907-66.67907h263.541085c36.514729 0 66.67907 30.164341 66.67907 66.67907v501.68062c0 36.514729-30.164341 66.67907-66.67907 66.67907z m-263.541085-603.286822c-19.051163 0-34.927132 15.875969-34.927132 34.927132v501.68062c0 19.051163 15.875969 34.927132 34.927132 34.927132h263.541085c19.051163 0 34.927132-15.875969 34.927132-34.927132V455.64031c0-19.051163-15.875969-34.927132-34.927132-34.927132H372.291473z" fill="#1296db" p-id="636"></path><path d="M686.635659 547.72093H337.364341c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h349.271318c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM686.635659 896.992248H337.364341c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h349.271318c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM527.875969 960.496124h-47.627907c-9.525581 0-15.875969-6.350388-15.875969-15.875969s6.350388-15.875969 15.875969-15.875969h47.627907c9.525581 0 15.875969 6.350388 15.875969 15.875969s-6.350388 15.875969-15.875969 15.875969zM480.248062 452.465116h127.007752v31.751938h-127.007752zM416.744186 452.465116h31.751938v31.751938h-31.751938zM721.562791 257.190698c-3.175194 0-7.937984-1.587597-9.525582-3.175194 0 0-1.587597 0-1.587597-1.587597-109.544186-109.544186-288.942636-109.544186-398.486821 0-6.350388 6.350388-15.875969 6.350388-22.226357 0-6.350388-6.350388-6.350388-15.875969 0-22.226357 58.741085-58.741085 138.12093-92.08062 222.263566-92.08062 84.142636 0 163.522481 33.339535 222.263566 92.08062 4.762791 6.350388 6.350388 14.288372 0 20.63876-3.175194 3.175194-7.937984 6.350388-12.700775 6.350388z" fill="#1296db" p-id="637"></path><path d="M211.944186 161.934884c-4.762791 0-7.937984-1.587597-11.113178-4.762791-6.350388-6.350388-6.350388-15.875969 0-22.226357 171.460465-171.460465 449.289922-171.460465 620.750387 0 6.350388 6.350388 6.350388 15.875969 0 22.226357s-15.875969 6.350388-22.226356 0c-158.75969-158.75969-417.537984-158.75969-576.297675 0-3.175194 3.175194-7.937984 4.762791-11.113178 4.762791zM616.781395 336.570543c-4.762791 0-7.937984-1.587597-11.113178-4.762791a133.19938 133.19938 0 0 0-188.924031 0c-6.350388 6.350388-15.875969 6.350388-22.226357 0-6.350388-6.350388-6.350388-15.875969 0-22.226357 65.091473-65.091473 169.872868-65.091473 233.376745 0l1.587597 1.587597c4.762791 6.350388 4.762791 17.463566-3.175194 22.226357-3.175194 1.587597-6.350388 3.175194-9.525582 3.175194z" fill="#1296db" p-id="638"></path></svg>;
    case 'blue_interfere':
      return <svg t="1576647866698" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="593" width="24" height="24"><path d="M511.989 431.579c-44.09 0-79.814 35.75-79.814 79.825 0 44.085 35.724 79.835 79.814 79.835 44.079 0 79.824-35.75 79.824-79.835 0-44.075-35.745-79.825-79.824-79.825zM701.046 305.813l-18.74 35.263c53.086 37.953 87.67 100.117 87.67 170.327 0 70.953-35.311 133.627-89.309 171.45l18.784 35.333c63.688-46.586 105.076-121.831 105.076-206.783 0-84.225-40.693-158.949-103.481-205.59zM323.507 717.438l20.488-34.074c-54.389-37.791-90.003-100.708-90.003-171.96 0-70.476 34.855-132.819 88.267-170.745l-20.434-34.02c-62.158 46.706-102.353 121.028-102.353 204.765 0.001 84.495 40.922 159.415 104.035 206.034z" fill="#1296db" p-id="594"></path><path d="M406.685 610.289c-35.062-19.013-55.875-56.18-55.875-98.886 0-42.957 21.106-80.28 56.494-99.189l-18.329-35.821c-44.416 28.507-73.856 78.322-73.856 135.011 0 56.455 29.191 106.059 73.249 134.62l18.317-35.735zM636.229 377.174l-14.248 38.041c32.489 19.712 51.165 55.414 51.165 96.189 0 40.558-18.447 76.086-50.645 95.868l14.248 38.02c43.429-28.697 72.077-77.921 72.077-133.888 0.001-56.169-28.864-105.582-72.597-134.23z" fill="#1296db" p-id="595"></path><path d="M512.013 93.174C280.69 93.174 93.182 280.695 93.182 512c0 231.307 187.508 418.826 418.831 418.826 231.315 0 418.806-187.52 418.806-418.826-0.001-231.305-187.491-418.826-418.806-418.826z m-0.001 819.795c-221.459 0-400.973-179.524-400.973-400.969 0-221.442 179.514-400.969 400.973-400.969 221.453 0 400.949 179.526 400.949 400.969 0 221.444-179.496 400.969-400.949 400.969z" fill="#1296db" p-id="596"></path></svg>;
    default:
      return null;
  }
}

// 数量，注意与POTION中的center、region、node中的数组的长度匹配
const CENTER_QUANTITY = 1;
const REGION_QUANTITY = 4;
const NODE_QUANTITY = 12;
const SIGNAL_QUANTITY = 3;

// 图标信息
const CENTER_ICON_SIZE = 48;
const REGION_ICON_SIZE = 32;
const NODE_ICON_SIZE = 24;

// 位置信息
const POSITION = {
  center: {
    name: '频管中心',
    lon: [103.931664],
    lat: [30.749142],
    left: ['50%'],
    top: ['50%'],
    sig_type: []
  },
  region: {
    name: '域频管中心',
    lon: [103.867119, 103.862484, 103.99844, 103.999299],
    lat: [30.769867, 30.719115, 30.724575, 30.768835],
    left: ['32%', '30%', '69%', '69%'],
    top: ['28%', '74%', '65%', '33%'],
    sig_type: []
  },
  node: {
    name: '采集节点',
    lon: [103.825749, 103.875531, 103.858021, 103.885144, 103.800343, 103.847378, 103.997067, 104.066247, 104.015606, 103.977669, 104.04702, 104.022301],
    lat: [30.794054, 30.792137, 30.754822, 30.731953, 30.72369, 30.694615, 30.729297, 30.717197, 30.694024, 30.761017, 30.771342, 30.804228],
    left: ['20%', '43%', '28%', '23%', '25%', '40%', '60%', '78%', '65%', '63%', '78%', '73%'],
    top: ['13%', '21%', '40%', '80%', '65%', '80%', '59%', '62%', '78%', '40%', '38%', '25%'],
    sig_type: []
  },
  // red_signal: {
  //   name: '信号源-红方',
  //   lon: [100.832449, 104.432449, 99.455551, 104.455551, 101.238021, 105.2345431, 102.885144, 104.3454144, 98.54343, 101.45343, 102.847378, 105.457378, 100.457067, 103.954067, 102.063247, 106.062347, 97.034366, 105.232266, 99.233669, 101.22269, 102.04702, 104.889702, 101.032301, 102.332301],
  //   lat: [28.723054, 31.724054, 28.792137, 31.223137, 27.754822, 31.754822, 27.731953, 32.731953, 30.72369, 31.90369, 32.3434615, 29.694615, 30.694615, 30.889297, 29.717197, 31.717197, 29.694024, 30.994024, 29.651017, 31.991017, 27.771342, 31.771342, 29.804228, 32.845228],
  //   left: ['16%', '23%', '35%', '47%', '23%', '32%', '19%', '26%', '19%', '29%', '35%', '44%', '56%', '63%', '73%', '82%', '60%', '69%', '58%', '67%', '74%', '75%', '66%', '77%'],
  //   top: ['7%', '16%', '17%', '24%', '36%', '45%', '75%', '83%', '61%', '69%', '76%', '85%', '55%', '62%', '58%', '67%', '74%', '82%', '35%', '43%', '34%', '43%', '21%', '28%'],
  //   sig_type: ['通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰']
  // },
  // blue_signal: {
  //   name: '信号源-蓝方',
  //   lon: [100.832449, 104.432449, 99.455551, 104.455551, 101.238021, 105.2345431, 102.885144, 104.3454144, 98.54343, 101.45343, 102.847378, 105.457378, 100.457067, 103.954067, 102.063247, 106.062347, 97.034366, 105.232266, 99.233669, 101.22269, 102.04702, 104.889702, 101.032301, 102.332301],
  //   lat: [28.723054, 31.724054, 28.792137, 31.223137, 27.754822, 31.754822, 27.731953, 32.731953, 30.72369, 31.90369, 32.3434615, 29.694615, 30.694615, 30.889297, 29.717197, 31.717197, 29.694024, 30.994024, 29.651017, 31.991017, 27.771342, 31.771342, 29.804228, 32.845228],
  //   left: ['24%', '17%', '46%', '39%', '32%', '24%', '27%', '20%', '30%', '21%', '45%', '36%', '64%', '57%', '83%', '74%', '70%', '61%', '65%', '59%', '82%', '75%', '76%', '69%'],
  //   top: ['7%', '16%', '17%', '24%', '44%', '45%', '75%', '83%', '61%', '69%', '76%', '85%', '55%', '56%', '58%', '67%', '74%', '83%', '35%', '43%', '34%', '43%', '21%', '29%'],
  //   sig_type: ['通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰', '通信', '导航', '遥控', '干扰']
  // },

  red_communication: {
        name: '信号源-红方',
        lon: [100.832449, 101.238021, 98.54343],
        lat: [28.723054, 27.754822, 30.72369],
        left: ['1%', '2%',  '66%'],
        top: ['7%',  '67%',  '92%'],
        sig_type: ['通信', '通信', '通信']
      },
      red_navigation: {
        name: '信号源-红方',
        lon: [104.432449, 105.2345431, 101.45343],
        lat: [31.724054, 31.754822, 31.90369],
        left: ['23%',  '19%',  '69%'],
        top: ['36%', '80%',  '15%'],
        sig_type: ['导航', '导航', '导航']
      },
      red_telecontrol: {
        name: '信号源-红方',
        lon: [99.455551, 102.885144, 102.847378],
        lat: [28.792137, 27.731953, 32.3434615],
        left: ['36%', '76%',  '58%'],
        top: ['13%', '60%', '32%'],
        sig_type: ['遥控', '遥控', '遥控']
      },
      red_interfere: {
        name: '信号源-红方',
        lon: [104.455551, 104.3454144, 105.457378],
        lat: [31.223137, 32.731953, 29.694615],
        left: ['38%',  '54%',  '90%'],
        top: ['42%',  '85%',  '43%'],
        sig_type: ['干扰', '干扰', '干扰']
      },
      
      blue_communication: {
        name: '信号源-蓝方',
        lon: [100.832449, 98.54343, 100.457067],
        lat: [28.723054, 27.754822, 30.72369],
        left: ['28%',  '30%',  '70%'],
        top: ['8%',  '69%', '84%'],
        sig_type: ['通信', '通信', '通信']
      },
      blue_navigation: {
        name: '信号源-蓝方',
        lon: [104.432449, 105.2345431, 101.45343],
        lat: [31.724054, 31.754822, 31.90369],
        left: ['17%',  '29%', '80%'],
        top: ['36%',  '78%', '11%'],
        sig_type: ['导航', '导航', '导航']
      },
      blue_telecontrol: {
        name: '信号源-蓝方',
        lon: [99.455551, 102.885144, 102.847378],
        lat: [28.792137, 27.731953, 32.3434615],
        left: ['48%',  '90%',  '66%'],
        top: ['7%', '66%', '32%'],
        sig_type: ['遥控', '遥控', '遥控']
      },
      blue_interfere: {
        name: '信号源-蓝方',
        lon: [104.455551, 104.3454144, 105.457378],
        lat: [31.223137, 32.731953, 29.694615],
        left: ['34%',  '51%',  '75%'],
        top: ['30%',  '85%',  '43%'],
        sig_type: ['干扰', '干扰', '干扰']
      }
}

const IconMap = ({ type, index }) => {
  const { title, x, y, left, top, sig_type } = {
    title: POSITION[type].name,
    x: POSITION[type]['lon'][index],
    y: POSITION[type]['lat'][index],
    left: POSITION[type]['left'][index],
    top: POSITION[type]['top'][index],
    sig_type: POSITION[type]['sig_type'][index],
  };
  // 编号 = index + 1
  const num = type === 'center' ? '' : ' - ' + (index + 1);

  const content = (
    (type === 'center' || type === 'region' || type === 'node') ?
      <>
        <span>经度: {x}</span><br />
        <span>纬度: {y}</span><br />
      </>
      :
      <>
        <span>经度: {x}</span><br />
        <span>纬度: {y}</span><br />
        <span>类型: {sig_type}</span><br />
      </>

  );

  const communication_signal = (
    (type.split('_')[1] === 'communication') ? 
    ((  (type.split('_')[0] === 'red') ?<div className="red_communication" style={{zIndex: 4}}></div> :
    <div className="blue_communication" style={{zIndex: 4}} ></div>)) :
    <></>
  );
  const navigation_signal = (
    (type.split('_')[1] === 'navigation') ? 
    ((  (type.split('_')[0] === 'red') ?<div className="red_navigation" style={{zIndex: 4}}></div> :
    <div className="blue_navigation" style={{zIndex: 4}} ></div>)) :
    <></>
  );
  const telecontrol_signal = (
    (type.split('_')[1] === 'telecontrol') ? 
    ((  (type.split('_')[0] === 'red') ?<div className="red_telecontrol" style={{zIndex: 4}}></div> :
    <div className="blue_telecontrol" style={{zIndex: 4}} ></div>)) :
    <></>
  );
  const interfere_signal = (
    (type.split('_')[1] === 'interfere') ? 
    ((  (type.split('_')[0] === 'red') ?<div className="red_interfere" style={{zIndex: 4}}></div> :
    <div className="blue_interfere" style={{zIndex: 4}} ></div>)) :
    <></>
  );


  return (
    <Popover key={type + index} content={content} title={title + num}>
      <div className='map-icon' style={{ left: left, top: top }}>
        <Icon type={type} />
        {navigation_signal}
        {communication_signal}
        {telecontrol_signal}
        {interfere_signal}
      </div>
    </Popover>
  );

}

/*
 * params: 容器宽高、位置数组(百分比)
 * return: 点坐标数组
 */
const calCoor = (width, height, leftArr, topArr, offset, n) => {
  let coordinateArr = [], tempLeft = 0, tempTop = 0;
  for (let i = 0; i < n; i++) {
    tempLeft = width * Number(leftArr[i].slice(0, -1)) / 100 + offset;
    tempTop = height * Number(topArr[i].slice(0, -1)) / 100 + offset;
    coordinateArr.push([tempLeft, tempTop]);
  }
  return coordinateArr;
}

export default ({ type, width, height }) => {

  useEffect(() => {
    $('.heatMapCom').hide();
    $('.heatMapInt').hide();
    $('.heatMapTel').hide();
    $('.heatMapNav').hide();
  },[])
  // 节点、域频管、频管中心的位置信息
  const nodePoints = calCoor(width, height, POSITION.node.left, POSITION.node.top, NODE_ICON_SIZE / 2, NODE_QUANTITY);
  const regionPoints = calCoor(width, height, POSITION.region.left, POSITION.region.top, REGION_ICON_SIZE / 2, REGION_QUANTITY);
  const centerPoints = calCoor(width, height, POSITION.center.left, POSITION.center.top, CENTER_ICON_SIZE / 2, CENTER_QUANTITY);

  const icons = [];
  const trans = [];

  for (let i = 0; i < SIGNAL_QUANTITY; i++) {
    icons.push(
      <IconMap key={icons.length} type={'red_communication'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'red_navigation'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'red_telecontrol'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'red_interfere'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'blue_communication'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'blue_navigation'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'blue_telecontrol'} index={i} />
    );
    icons.push(
      <IconMap key={icons.length} type={'blue_interfere'} index={i} />
    );
  }

  for (let c = 0; c < NODE_QUANTITY; c++) {
    icons.push(
      <IconMap key={icons.length} type={'node'} index={c} />
    );
  }
  if (type === 'region' || type === 'center') {
    for (let i = 0; i < REGION_QUANTITY; i++) {
      icons.push(
        <IconMap key={icons.length} type={'region'} index={i} />
      );

      for (let j = i * 3; j < i * 3 + 3; j++) {
        trans.push(
          <TransAnimation key={trans.length} startPoint={nodePoints[j]} endPoint={regionPoints[i]} colorType={i} />
        );
      }
    }
  }
  if (type === 'center') {
    for (let i = 0; i < CENTER_QUANTITY; i++) {
      icons.push(
        <IconMap key={icons.length} type={'center'} index={i} />
      );
      for (let j = 0; j < 4; j++) {
        trans.push(
          <TransAnimation key={trans.length} startPoint={regionPoints[j]} endPoint={centerPoints[i]} colorType={j} />
        );
      }
    }
  }
  return (
    <>
    
      <div style={{position:'absolute', top:0, right:0, zIndex:5}}>
        <ColorMenu />
      </div> 
      <div style={{position:'absolute', top:0, right:'260px', zIndex:5}}>
        <ChangeHeatMap />
      </div> 
      <div className='nav1' style={{zIndex: 4}}></div>
      <div className='nav2' style={{zIndex: 4}}></div>
      <div className='int1' style={{zIndex: 4}}></div>
      <div className='int2' style={{zIndex: 4}}></div>
      <div className='int3' style={{zIndex: 4}}></div>
      <div className='int4' style={{zIndex: 4}}></div>
      <div className='tel1' style={{zIndex: 4}}></div>
      <div className='tel2' style={{zIndex: 4}}></div>
      <div className='com1' style={{zIndex: 4}}></div>
      <div className='com2' style={{zIndex: 4}}></div>
      <div className='heatMap' style={{width:'100%',height:'100%',position:'absolute', top:0, left:0, zIndex:2}}>
        <div  className='heatWrapper' style={{width:'1703px',height:'899.516px',position:'relative',  top:0, left:0, zIndex:2}}>
          <Router>
            <Route path='/main/wire/heatmapcom' component={HeatMapCom} />
            <Route path='/main/wire/heatmapnav' component={HeatMapNav} />
            <Route path='/main/wire/heatmaptel' component={HeatMapTel} />
            <Route path='/main/wire/heatmapint' component={HeatMapInt} />
            <Route path='/main/wire/heatmapcom' component={Close} />
          </Router>
        </div>
      </div>
      
      {icons}
      {trans}
    </>

  );
}