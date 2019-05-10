import Home from 'view/home'
import Detail from 'view/detail'
import Search from 'view/search'
import Classification from 'view/classification'
import PersonalCenter from 'view/PersonalCenter'

const Routes = [{
    path:'/home',
    component:Home,
    name:'首页'
},{
    path:'/classification',
    component:Classification,
    name:'分类'
},{
    path:'/PersonalCenter',
    component:PersonalCenter,
    name:'分类'
},{
    path:'/detail/:id',
    component:Detail,
    name:'分类'
},{
    path:'/search',
    component:Search,
    name:'搜索'
}]

export default Routes