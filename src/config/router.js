import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import PersonalCreditLoan from '../pages/PersonalCreditLoan';
import SecondOrderLoan from '../pages/SecondOrderLoan'
import CarLoan from '../pages/CarLoan';
import NoMatch from '../pages/NoMatch';

export const routesConfig = [
    {
        key: 1,
        path: '/',
        txt: '最新優利專案',
        component: Home
    },
    {
        key: 2,
        path: '/personalCreditLoan',
        txt: '個人信用貸款',
        component: PersonalCreditLoan
    },
    {
        key: 3,
        path: '/secondOrderLoan',
        txt: '二順位貸款',
        component: SecondOrderLoan
    },
    {
        key: 4,
        path: '/carLoan',
        txt: '汽車貸款',
        component: CarLoan
    },
];

export const MainContent = (props) => {
    return (
        <Switch>
            {routesConfig.map(item => {
                return (
                    <Route key={item.path} exact path={item.path}>
                        {item.component}
                    </Route>
                )
            })}
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    )
}


export const withRouterConfig = (WrappedComponent) => (props) => {
    const routes = [
        {
            key: 1,
            path: '/',
            txt: '最新優利專案',
            component: Home
        },
        {
            key: 2,
            path: '/personalCreditLoan',
            txt: '個人信用貸款',
            component: PersonalCreditLoan
        },
        {
            key: 3,
            path: '/secondOrderLoan',
            txt: '二順位貸款',
            component: SecondOrderLoan
        },
        {
            key: 4,
            path: '/carLoan',
            txt: '汽車貸款',
            component: CarLoan
        },
    ];
    return (
        <Router>
            <WrappedComponent data={{ ...props, routes }} />
        </Router>
    )
}

export default withRouterConfig;
