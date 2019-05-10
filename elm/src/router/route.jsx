import Home from 'view/home'
import Detail from 'view/detail'

const Route = [{
    path: "/home",
    component: Home
},{
    path: "/detail/:id",
    component: Detail
}]

export default Route