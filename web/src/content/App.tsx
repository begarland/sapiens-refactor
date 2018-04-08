import * as React from 'react'
import Header from './components/Header/Header'

import { AppStateTypes } from '../redux/store/templates/appState'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import {DailyStateTypes} from '../redux/store/templates/dailyState'
import {UserStateTypes} from '../redux/store/templates/userState'
import Mouse = JQuery.Mouse
import InvisibleFullScreen from './common/InvisibleFullScreen/InvisibleFullScreen'

export interface AppTypes {
    appState: AppStateTypes;
    dailyState: DailyStateTypes;
    userState: UserStateTypes;
    navigateToNutrition: (MouseEvent) => void;
    navigateToActions: (MouseEvent) => void;
    navigateToNestedAction: (MouseEvent) => void;
    navigateBackFromNestedAction: (MouseEvent) => void;
    navigateTo: (string) => (MouseEvent) => void;
    toggleUserActions: (MouseEvent) => void;
    toggleModal: (MouseEvent) => void;

}

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <Header {...props} />
            <Content {...props} />
            <Footer {...props} />
            <InvisibleFullScreen {...props} />
        </div>
    )
}

export default App
