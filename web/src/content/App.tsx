import * as React from 'react'
import Header from './components/Header/Header'

import { AppStateTypes } from '../redux/store/templates/appState'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

const reactLogo = './assets/images/reactReduxTS.png'

export interface AppTypes {
    appState: AppStateTypes;
    navigateToNutrition: (MouseEvent) => void;
    navigateToActions: (MouseEvent) => void;

}

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <Header/>
            <Content {...props}/>
            <Footer {...props}/>
        </div>
    )
}

export default App
