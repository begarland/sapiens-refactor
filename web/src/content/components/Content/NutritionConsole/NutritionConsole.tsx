import * as React from 'react'
import ProgressBar from '../../../common/ProgressBar/ProgressBar'
import LabelComponent from '../../../common/LabelComponent/LabelComponent'

interface NutritionConsoleTypes {
}

const NutritionConsole = (props: NutritionConsoleTypes) => {
    const CalorieBarColors = {
        barFillColor: '#5AAE61',
        barInnerFillColor: '#1B7837',
        barTotalFillColor: '#CAE9AB',
    }
    const HydrationBarColors = {
        barFillColor: '#4393C3',
        barInnerFillColor: '#2166AC',
        barTotalFillColor: '#92C5DE',
    }


    return (
        <div id="nutrition-console-root">
            <LabelComponent label="Calories" hideColon={true}/>
            <ProgressBar
                type="test"
                secondLowerSlider="test"
                firstLowerSlider="test"
                firstUpperSlider="test"
                secondUpperSlider="test"
                barFillColor={CalorieBarColors.barFillColor}
                barInnerFillColor={CalorieBarColors.barInnerFillColor}
                barTotalFillColor={CalorieBarColors.barTotalFillColor}
            />
            <LabelComponent label="Hydration" hideColon={true}/>
            <ProgressBar
                type="test"
                secondLowerSlider="test"
                firstLowerSlider="test"
                firstUpperSlider="test"
                secondUpperSlider="test"
                barFillColor={HydrationBarColors.barFillColor}
                barInnerFillColor={HydrationBarColors.barInnerFillColor}
                barTotalFillColor={HydrationBarColors.barTotalFillColor}
            />
        </div>
    )
}

export default NutritionConsole
