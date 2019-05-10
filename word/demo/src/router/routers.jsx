import Index from 'view/index'
import Detail from 'view/index/detali';

const Routers = [{
    path: '/index',
    name:'首页',
    component: Index,
    children: [{
        path: '/index/detail',
        name:'子页',
        component: Detail
    }]
}]

export default Routers