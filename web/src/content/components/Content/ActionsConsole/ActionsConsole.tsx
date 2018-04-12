import * as React from 'react'
import ActionsHome from './ActionsHome/ActionsHome'
import { Route, Switch } from 'react-router'
import {AppTypes} from '../../../App'
import IconComponent from '../../../common/IconComponent/IconComponent'

interface ActionsConsoleTypes extends AppTypes {}

const ActionsConsole = (props: ActionsConsoleTypes) => {
    return (
        <div id="actions-console-root">
            {props.appState.showActionsBackButton &&
                <IconComponent
                    id="actions-back-button"
                    faIcon="caret-square-left"
                    onClick={props.navigateBackFromNestedAction}
                />
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
            </Switch>
        </div>
    )
}

export default ActionsConsole
