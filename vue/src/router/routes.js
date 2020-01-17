import Home from '../views/Home';
import Main from '../views/Main';

export default [
  {
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/main/:boardSize',
    name: 'main',
    component: Main,
  },
];
