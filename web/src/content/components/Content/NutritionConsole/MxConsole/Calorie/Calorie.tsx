import * as React from 'react'
import MxConsole from '../MxConsole'
import { LabelDataDisplayTypes } from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import { AppTypes } from '../../../../../App'
import { ProgressBarFillTypes } from '../../../../../../redux/store/templates/dailyState'
import { BarColorsTypes } from '../../../../../utils/MiscellaneousInterfaces'
import { Calories, Units, Mx } from '../../../../../utils/Enums'

interface CalorieConsoleTypes extends AppTypes {

}

const CalorieConsole = (props: CalorieConsoleTypes) => {

    const calories = props.dailyState.calories
    const units =  (props.memberState.metric ?   Units.CaloriesMetric : Units.CaloriesImperial)

    const CalorieBarColors: BarColorsTypes = {
        barFillColor: `${Calories.BarFillColor}`,
        barInnerFillColor: `${Calories.BarInnerFillColor}`,
        barTotalFillColor: `${Calories.BarTotalFillColor}`,
    }

    const CalorieBarFills: ProgressBarFillTypes = {
        fill: calories.progressBarFills.fill,
        innerFill: calories.progressBarFills.innerFill,
        targetFill: calories.progressBarFills.targetFill,
        totalFill: calories.progressBarFills.totalFill,
        last: {
            fill: calories.progressBarFills.last.fill,
            innerFill: calories.progressBarFills.last.innerFill
        }
    }

    const CalorieLabelData: LabelDataDisplayTypes[] = [
        {label: `${Calories.Consumed}`, data: calories.consumed},
        {label: `${Calories.Burned}`, data: calories.burned},
        {label: `${Calories.Allotted}`, data: calories.allotted},
        {label: `${Calories.Target}`, data: calories.target},
    ]

    CalorieLabelData.map(calorieLabel => {
        calorieLabel.extraData = units
    })

    return (
        <div id="calorie-console-root">
           <MxConsole
               heading={Mx.Calories}
               labelDataArray={CalorieLabelData}
               barColors={CalorieBarColors}
               barFills={CalorieBarFills}
               onClick={props.toggleModal(Mx.Calories)}
           />
        </div>
    )
}

export default CalorieConsole