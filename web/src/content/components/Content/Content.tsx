import * as React from 'react'
import { Route, Switch } from 'react-router'
import NutritionConsole from './NutritionConsole/NutritionConsole'
import ActionsConsole from './ActionsConsole/ActionsConsole'
import UserActions from './UserActions/UserActions'
import ModalCollection from './ModalCollection/ModalCollection'
import CreateMember from './CreateOrEditMember/CreateMember'
import {AppTypes} from '../../App'

interface ContentTypes extends AppTypes {}
interface ContentState {}

class Content extends React.Component<ContentTypes, ContentState> {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        const showLandscapeTabletAndAbove = (screen.width > 768)
        const showMobileContent = (screen.width <= 768)

        return (
            <div id="content-root" className={`${this.props.appState.signedIn ? "" : "signed-out-content"}`}>
                {showLandscapeTabletAndAbove && <div id="landscape-tablet-and-above-content">
                    <Switch>
                        <Route
                            exact={true}
                            path="/"
                            render={()=> {
                                return (
                                    <div>
                                        <NutritionConsole {...this.props}/>
                                        <ActionsConsole {...this.props}/>
                                    </div>
                                )
                            }}
                        />
                        {!this.props.appState.signedIn && <Route
                            exact={true}
                            path="/register"
                            render={() => {
                                return (
                                    <CreateMember {...this.props} device="landscape-tablet-and-above"/>
                                )
                            }}
                        />}
                    </Switch>
                </div>}
                {showMobileContent && <div id="mobile-and-portrait-tablet-content">
                    <Switch>
                        {["/", "/index.html"].map((path, index) =>
                            <Route
                                key={index}
                                exact={true}
                                path={path}
                                render={() => {
                                    return (
                                        <NutritionConsole {...this.props}/>
                                    )
                                }}
                            />
                        )}
                        <Route
                            path="/actions"
                            render={() => {
                                return (
                                    <ActionsConsole {...this.props}/>
                                )
                            }}
                        />
                        {!this.props.appState.signedIn && <Route
                            exact={true}
                            path="/register"
                            render={() => {
                                return (
                                    <CreateMember {...this.props} device="mobile-and-portrait-tablet"/>
                                )
                            }}
                        />}
                    </Switch>
                </div>}
                <UserActions {...this.props} />
                {this.props.appState.showModal && <ModalCollection {...this.props}/>}
            </div>
        )
    }

}


export default Content