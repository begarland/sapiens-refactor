import * as React from 'react'
import Header from './components/Header/Header'

import Routes from './sample/Routes'
import { AppStateTypes } from '../redux/store/templates/appState'

const reactLogo = './assets/images/reactReduxTS.png'

interface AppTypes {
    appState: AppStateTypes;
    navigateToRedux: (MouseEvent) => void;
    navigateToObservable: (MouseEvent) => void;
    goBackToApp: (MouseEvent) => void;
    triggerObservable: (MouseEvent) => void;
    logoClick: (MouseEvent) => void;
}

const App = (props: AppTypes) => {
    return (
        <div className="App">
            <Header/>
            <Routes {...props}/>
        </div>
    )
}

export default App
