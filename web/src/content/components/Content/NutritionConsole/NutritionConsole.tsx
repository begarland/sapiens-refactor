import * as React from 'react'
import ProgressBar from '../../../common/ProgressBar/RegularProgressBar/ProgressBar'
import HeadingComponent from '../../../common/HeadingComponent/HeadingComponent'
import MiniProgressBar from '../../../common/ProgressBar/MiniProgressBar/MiniProgressBar'

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
            <HeadingComponent heading="Calories"/>
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
            <hr/>
            <HeadingComponent heading="Hydration"/>
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
            <hr/>
            <MiniProgressBar type="test" barFills={{barTotalFill: 100, barFill: 30}} />

        </div>
    )
}

export default NutritionConsole
