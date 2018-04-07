import * as React from 'react'
import {LabelDataDisplayTypes} from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import MxConsole from '../MxConsole'
import {AppTypes} from '../../../../../App'
import {ProgressBarFillTypes} from '../../../../../../redux/store/templates/dailyState'
import {BarColorsTypes} from '../../../MiscellaneousInterfaces'

interface CalorieConsoleTypes extends AppTypes {

}

const CalorieConsole = (props: CalorieConsoleTypes) => {

    const calories = props.dailyState.calories
    const units =  (props.userState.metric ? 'kCal' : 'cals')

    const CalorieBarColors: BarColorsTypes = {
        barFillColor: '#5AAE61',
        barInnerFillColor: '#1B7837',
        barTotalFillColor: '#CAE9AB',
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
        {label: 'consumed', data: calories.consumed},
        {label: 'burned', data: calories.burned},
        {label: 'allotted', data: calories.allotted},
        {label: 'target', data: calories.target},
    ]

    CalorieLabelData.map(calorieLabel => {
        calorieLabel.extraData = units
    })

    return (
        <div id="calorie-console-root">
           <MxConsole
               heading="calories"
               labelDataArray={CalorieLabelData}
               barColors={CalorieBarColors}
               barFills={CalorieBarFills}
           />
        </div>
    )
}

export default CalorieConsole