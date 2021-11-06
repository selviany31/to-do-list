import React from 'react'
import Card from "../Components/Card"
import { Link, Switch, Route } from "react-router-dom";
import { routes } from "../Routes";

const FeatureRoute = () => {
    return (
        <>
            <div className="container card-wrapper">
                <Link style={{textDecoration: "none", color: "white"}} to="/">
                    <Card styleName="card-shadow card-bg-red">
                    <div className="icon-group">
                        <i className="far fa-clock"></i>
                        <span>3</span>
                    </div>
                    <h2>Scheduled</h2>
                    </Card>
                </Link>
                <Link style={{textDecoration: "none", color: "white"}} to="/done">
                    <Card styleName="card-shadow card-bg-blue">
                    <div className="icon-group">
                        <i className="far fa-calendar-check"></i>
                        <span>3</span>
                    </div>
                    <h2>Done</h2>
                    </Card>
                </Link>
            </div>
            <div className="container">
            <Switch>
                {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
                ))}
            </Switch>
            </div>
        </>
    )
}

export default FeatureRoute;