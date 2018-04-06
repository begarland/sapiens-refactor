import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {

    const navigateToReduxFunction = sinon.spy()
    const navigateToObservableFunction = sinon.spy()
    const goBackToAppFunction = sinon.spy()
    const triggerObservableFunction = sinon.spy()
    const logoClickFunction = sinon.spy()

    const AppAllProps = (
        <App
            appState={appState}
            navigateToRedux={navigateToReduxFunction}
            navigateToObservable={navigateToObservableFunction}
            goBackToApp={goBackToAppFunction}
            triggerObservable={triggerObservableFunction}
            logoClick={logoClickFunction}
        />)

    let AppAllPropsShallow

    beforeEach(() => {
        AppAllPropsShallow = shallow(AppAllProps)
    })


    describe('all props', () => {
        it('should exist', () => {
            expect(AppAllPropsShallow.exists()).toEqual(true)
        })
    })

})

