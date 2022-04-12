import React from 'react';
import Navbars from'./views/Base/Navbars';
import Navs from'./views/Base/Navs';
import Dashboard from'./views/Dashboard';


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  ];

export default routes;
