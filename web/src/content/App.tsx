import * as React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import InvisibleFullScreen from './common/InvisibleFullScreen/InvisibleFullScreen'
import { AppStateTypes } from '../redux/store/templates/appState'
import { DailyStateTypes } from '../redux/store/templates/dailyState'
import { MemberStateTypes } from '../redux/store/templates/memberState'
import {Paths} from './utils/Enums'

export interface AppTypes {
    appState: AppStateTypes;
    dailyState: DailyStateTypes;
    memberState: MemberStateTypes;
    location?: {
        hash: string;
        pathname: string;
        search: string;
        state: string;
    }
    navigateToNutrition: (event: MouseEvent) => void;
    navigateToActions: (event: MouseEvent) => void;
    navigateBackFromNestedAction: (event: MouseEvent) => void;
    navigateTo: (location: string) => (event: MouseEvent) => void;
    toggleUserActions: (event: MouseEvent) => void;
    toggleModal: (modalSelection: string) => (event: MouseEvent) => void;
    handleDrag: (mxSelection: string) => (event: MouseEvent, ui: {x: number}) => void;
    inputChange: (inputType: string) => (id: string, value: string | boolean) => void;
    signIn: () => void;
    signOut: () => void;
    forgotPassword: () => void;
    weighIn: () => void;
    stepBack: (inputType: string) => (event: MouseEvent) => void;
    stepForward: (inputType: string) => (event: MouseEvent) => void;
    stepTo: (inputType: string) => (event: MouseEvent, stepNumber: number) => void;

}

const App = (props: AppTypes) => {
    const test = ()=> {return null}
    return (
        <div className="App" onClick={test}>
            <Header {...props} />
            <InvisibleFullScreen {...props} />
            <Content {...props} />
            {props.location.pathname !== Paths.Register && <Footer {...props} />}
        </div>
    )
}

export default App
