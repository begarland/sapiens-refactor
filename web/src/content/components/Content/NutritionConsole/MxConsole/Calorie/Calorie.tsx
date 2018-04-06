import * as React from 'react'
import HeadingComponent from '../../../../../common/HeadingComponent/HeadingComponent'
import ProgressBar from '../../../../../common/ProgressBar/RegularProgressBar/ProgressBar'
import LabelDataArrayDisplay from '../../../../../common/LabelDataDisplay/LabelDataArrayDisplay'
import {LabelDataDisplayTypes} from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import MxConsole from '../MxConsole'

interface CalorieConsoleTypes {

}

const CalorieConsole = (props: CalorieConsoleTypes) => {

    const CalorieBarColors = {
        barFillColor: '#5AAE61',
        barInnerFillColor: '#1B7837',
        barTotalFillColor: '#CAE9AB',
    }

    const CalorieLabelData: LabelDataDisplayTypes[] = [
        {label: 'consumed', data: 1000},
        {label: 'burned', data: 200},
        {label: 'allotted', data: 1500},
        {label: 'target', data: 1300},
    ]

    CalorieLabelData.map(calorieLabel => {
        calorieLabel.extraData = 'kCal'
    })

    return (
        <div id="calorie-console-root">
           <MxConsole heading="calories" labelDataArray={CalorieLabelData} barColors={CalorieBarColors}/>
        </div>
    )
}

export default CalorieConsole