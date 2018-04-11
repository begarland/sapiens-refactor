import * as React from 'react'
import CalorieConsole from './MxConsole/Calorie/Calorie'
import HydrationConsole from './MxConsole/Hydration/Hydration'
import NutrientsConsole from './NutrientsConsole/NutrientsConsole'
import {AppTypes} from '../../../App'

interface NutritionConsoleTypes extends AppTypes {


}

const NutritionConsole = (props: NutritionConsoleTypes) => {
    const doNothing = () => {return null}
    const preventInteraction = () => props.toggleModal('sign-in-or-register')
    const nutritionOnClick = (props.appState.signedIn ? doNothing() : preventInteraction()  )
    return (
        <div id="nutrition-console-root" onClick={nutritionOnClick}>
            <CalorieConsole {...props}/>
            <HydrationConsole {...props}/>
            <NutrientsConsole {...props}/>

        </div>
    )
}

export default NutritionConsole
