import * as React from 'react'
import { Route, Switch } from 'react-router'
import NutritionConsole from './NutritionConsole/NutritionConsole'
import ActionsConsole from './ActionsConsole/ActionsConsole'
import {AppTypes} from '../../App'
import UserActions from './UserActions/UserActions'
import Modal from '../../common/Modal/Modal'

interface ContentTypes extends AppTypes {}

const Content = (props: ContentTypes) => {
    return (
        <div id="content-root">
            <div id="landscape-tablet-and-above-content">
                <NutritionConsole {...props}/>
                <ActionsConsole {...props}/>
            </div>
            <div id="mobile-and-portrait-tablet-content">
                <Switch>
                    {["/", "/index.html"].map((path, index) =>
                        <Route
                            key={index}
                            exact={true}
                            path={path}
                            render={() => {
                                return (
                                    <NutritionConsole {...props}/>
                                )
                            }}
                        />
                    )}
                    <Route
                        path="/actions"
                        render={() => {
                            return (
                                <ActionsConsole {...props}/>
                            )
                        }}
                    />
                </Switch>
            </div>
            <UserActions {...props} />
            {props.appState.showModal && <Modal />}
        </div>
    )
}

export default Content