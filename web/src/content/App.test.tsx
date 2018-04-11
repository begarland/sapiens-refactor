import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'
import {dailyState} from '../redux/store/templates/dailyState'
import {memberState} from '../redux/store/templates/memberState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {

    const navigateToNutritionFunction = sinon.spy()
    const navigateToActionsFunction = sinon.spy()
    const navigateToNestedActionFunction = sinon.spy()
    const navigateBackFromNestedActionFunction = sinon.spy()
    const navigateToFunction = sinon.spy()
    const toggleUserActionsFunction = sinon.spy()
    const toggleModalFunction = sinon.spy()
    const handleDragFunction = sinon.spy()
    const inputChangeFunction = sinon.spy()
    const signInFunction = sinon.spy()
    const signOutFunction = sinon.spy()
    const forgotPasswordFunction = sinon.spy()


    const AppAllProps = (
        <App
            appState={appState}
            dailyState={dailyState}
            memberState={memberState}
            navigateToNutrition={navigateToNutritionFunction}
            navigateToActions={navigateToActionsFunction}
            navigateToNestedAction={navigateToNestedActionFunction}
            navigateBackFromNestedAction={navigateBackFromNestedActionFunction}
            navigateTo={navigateToFunction}
            toggleUserActions={toggleUserActionsFunction}
            toggleModal={toggleModalFunction}
            handleDrag={handleDragFunction}
            inputChange={inputChangeFunction}
            signOut={signOutFunction}
            signIn={signInFunction}
            forgotPassword={forgotPasswordFunction}

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

