import Home from 'view/home'
import Business from 'view/business'
import Edit from 'view/edit'

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