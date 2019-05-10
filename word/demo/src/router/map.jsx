import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class RouteMap extends Component {
    render() {
        const { routers } = this.props
        const defaultRoute = <Route key='0' path='/' render={() => {
            return <Redirect to='/index'></Redirect>
        }} exact></Route>
        return <Switch>
            {
                routers.length && routers.map((item, index) => {
                    const { children: routers, component: Component } = item
                    if (item.component) {
                        return <Route key={index} path={item.path} render={(api) => {
                            return <Component routers={routers}  api={api}></Component>
                        }}></Route>
                    }
                    return true
                }).concat([defaultRoute])
            }
        </Switch>
    }
}

export default RouteMap