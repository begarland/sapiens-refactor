import * as React from 'react'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../../redux/store/templates/appState'
import ObservableSample from './ObservableSample'
import ReduxSample from './ReduxSample'

export interface RoutesTypes {
    appState: AppStateTypes;
    goBackToApp: (MouseEvent) => void;
    triggerObservable: (MouseEvent) => void;
    inputChange?: (string, MouseEvent) => string;
}

const Routes = (props: RoutesTypes) => {
    return (
        <div>
            <Switch>
                <Route
                    exact={true}
                    path="/redux"
                    render={() => {
                        return (
                                <ReduxSample {...props}/>
                            )
                    }}
                />
                <Route
                    exact={true}
                    path="/redux-observable"
                    render={() => {
                        return (
                            <ObservableSample
                                appState={props.appState}
                                goBackToApp={props.goBackToApp}
                                triggerObservable={props.triggerObservable}
                            />
                        )
                    }}
                />
            </Switch>
        </div>
    )
}

export default Routes