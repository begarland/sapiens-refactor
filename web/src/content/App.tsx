import * as React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import InvisibleFullScreen from './common/InvisibleFullScreen/InvisibleFullScreen'
import { AppStateTypes } from '../redux/store/templates/appState'
import { DailyStateTypes } from '../redux/store/templates/dailyState'
import { MemberStateTypes } from '../redux/store/templates/memberState'

export interface AppTypes {
    appState: AppStateTypes;
    dailyState: DailyStateTypes;
    memberState: MemberStateTypes;
    navigateToNutrition: (MouseEvent) => void;
    navigateToActions: (MouseEvent) => void;
    navigateBackFromNestedAction: (MouseEvent) => void;
    navigateTo: (string) => (MouseEvent) => void;
    toggleUserActions: (MouseEvent) => void;
    toggleModal: (string) => (MouseEvent) => void;
    handleDrag: (mxType: string, selection: string) => (MouseEvent, Object) => void;
    inputChange: (inputType: string) => (id: string, value: string | boolean) => void;
    signIn: () => void;
    signOut: () => void;
    forgotPassword: () => void;
    weighIn: () => void;

}

const App = (props: AppTypes) => {
    const test = ()=> {return null}
    return (
        <div className="App" onClick={test}>
            <Header {...props} />
            <InvisibleFullScreen {...props} />
            <Content {...props} />
            <Footer {...props} />
        </div>
    )
}

export default App
