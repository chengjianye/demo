import Home from 'view/index/home'
import Business from 'view/index/business'
import Edit from 'view/index/edit'

const Routes = [{
    path: '/home',
    component: Home,
    name: '首页'
}, {
    path: '/business',
    component: Business,
    name: '业务'
}, {
    path: '/edit',
    component: Edit,
    name: '编辑'
}]

export default Routes