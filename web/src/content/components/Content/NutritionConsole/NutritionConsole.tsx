import * as React from 'react'
import CalorieConsole from './MxConsole/Calorie/Calorie'
import HydrationConsole from './MxConsole/Hydration/Hydration'
import NutrientsConsole from './NutrientsConsole/NutrientsConsole'
import {AppTypes} from '../../../App'

interface NutritionConsoleTypes extends AppTypes {


}

const NutritionConsole = (props: NutritionConsoleTypes) => {
    return (
        <div id="nutrition-console-root">
            <CalorieConsole {...props}/>
            <HydrationConsole {...props}/>
            <NutrientsConsole {...props}/>

        </div>
    )
}

export default NutritionConsole
