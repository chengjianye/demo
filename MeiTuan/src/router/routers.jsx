import Goods from 'view/index/list'
import Shopcar from 'view/index/shopcar'
const Routers = [{
    path: '/list',
    name:'商品',
    component: Goods,
},{
    path: '/shopcar',
    name:'购物车',
    component: Shopcar,
}]

export default Routers