//Layouts

// Pages
import Home from '~/pages/Home';
import Room from '~/pages/Room';

const publicRoutes = [
    // K can dang nhap
    { path: '/', component: Home },
    // { path: '/room', component: Room },
];

const privateRoutes = [
    //Can dang nhap
];

export { publicRoutes, privateRoutes };
