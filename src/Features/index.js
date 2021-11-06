import React, { useEffect} from 'react'
import Card from "../Components/Card"
import { Link, Switch, Route } from "react-router-dom";
import { routes } from "../Routes";
import { useSelector, useDispatch } from 'react-redux';
import { getTodoList } from '../Redux/Action';
import { countScheduled, countDone } from '../Helper';

const FeatureRoute = () => {
    const dispatch = useDispatch()
    const dataList = useSelector((state) => state.listReducer.dataList)

    console.log(countScheduled(dataList));

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch])
    console.log(dataList.filter((list) => list.status=== 0).length);
    return (
        <>
            <div className="container card-wrapper">
                <Link style={{textDecoration: "none", color: "white"}} to="/">
                    <Card styleName="card-shadow card-bg-red">
                    <div className="icon-group">
                        <i className="far fa-clock"></i>
                        <span>{countScheduled(dataList)}</span>
                    </div>
                    <h2>Scheduled</h2>
                    </Card>
                </Link>
                <Link style={{textDecoration: "none", color: "white"}} to="/done">
                    <Card styleName="card-shadow card-bg-blue">
                    <div className="icon-group">
                        <i className="far fa-calendar-check"></i>
                        <span>{countDone(dataList)}</span>
                    </div>
                    <h2>Done</h2>
                    </Card>
                </Link>
            </div>
            <div className="container" style={{marginTop: "30px"}}>
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