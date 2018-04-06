import * as React from 'react'
import { Route, Switch } from 'react-router'
import NutritionConsole from './NutritionConsole/NutritionConsole'
import ActionsConsole from './ActionsConsole/ActionsConsole'

interface ContentTypes {}

const Content = (props: ContentTypes) => {
    return (
        <div id="content-root">
            <div id="landscape-tablet-and-above-content">
                <NutritionConsole {...props}/>
                <ActionsConsole {...props}/>
            </div>
            <div id="mobile-and-portrait-tablet-content">
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={() => {
                            return (
                                <NutritionConsole {...props}/>
                            )
                        }}
                    />
                    <Route
                        exact={true}
                        path="/actions"
                        render={() => {
                            return (
                                <ActionsConsole {...props}/>
                            )
                        }}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Content