import * as React from 'react'
import CalorieConsole from './MxConsole/Calorie/Calorie'
import HydrationConsole from './MxConsole/Hydration/Hydration'
import NutrientsConsole from './NutrientsConsole/NutrientsConsole'

interface NutritionConsoleTypes {


}

const NutritionConsole = (props: NutritionConsoleTypes) => {
    return (
        <div id="nutrition-console-root">
            <CalorieConsole/>
            <HydrationConsole/>
            <NutrientsConsole/>

        </div>
    )
}

export default NutritionConsole
