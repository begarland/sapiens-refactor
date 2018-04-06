import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {

    const navigateToNutritionFunction = sinon.spy()
    const navigateToActionsFunction = sinon.spy()


    const AppAllProps = (
        <App
            appState={appState}
            navigateToNutrition={navigateToNutritionFunction}
            navigateToActions={navigateToActionsFunction}
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

