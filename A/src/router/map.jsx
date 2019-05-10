import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class RouteMap extends Component {
    render() {
        const { routes } = this.props;
        const defaultRoute = <Route key='0' path='/' render={() => {
            return <Redirect to='/home' />
        }} exact></Route>
        return <Switch>
            {
                routes.length && routes.map((item, index) => {
                    if (item.component) {
                        const { children: routes, component: Component } = item;
                        return <Route key={index} path={item.path} render={(api) => {
                            return <Component routes={routes} api={api} />
                        }}></Route>
                    }
                    return true
                }).concat([defaultRoute])
            }
        </Switch>
    }
}

export default RouteMap
