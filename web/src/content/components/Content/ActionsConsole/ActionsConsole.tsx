import * as React from 'react'
import ActionsHome from './ActionsHome/ActionsHome'
import { Route, Switch } from 'react-router'
import {AppTypes} from '../../../App'

interface ActionsConsoleTypes extends AppTypes {}

const ActionsConsole = (props: ActionsConsoleTypes) => {
    return (
        <div id="actions-console-root">
            {props.appState.showActionsBackButton &&
                <span
                    id="actions-back-button-span"
                    onClick={props.navigateBackFromNestedAction}
                >
                    <i
                        id="actions-back-button"
                        className="fas fa-caret-square-left"
                    />
                </span>
            }
            <Switch>
                {["/", "/actions"].map((path, index) =>
                <Route
                    key={index}
                    exact={true}
                    path={path}
                    render={() => {
                        return (
                            <ActionsHome {...props} />
                        )
                    }}
                />)}
                {["/", "/actions/"].map((path, index) =>
                <Route
                    key={index}
                    exact={true}
                    path={`${path}test`}
                    render={() => {
                        return (
                            <h1>something </h1>
                        )
                    }}
                />)}

            </Switch>
        </div>
    )
}

export default ActionsConsole
