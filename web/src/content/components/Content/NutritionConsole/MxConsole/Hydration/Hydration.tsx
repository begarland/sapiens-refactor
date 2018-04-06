import * as React from 'react'
import HeadingComponent from '../../../../../common/HeadingComponent/HeadingComponent'
import ProgressBar from '../../../../../common/ProgressBar/RegularProgressBar/ProgressBar'
import {LabelDataDisplayTypes} from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import LabelDataArrayDisplay from '../../../../../common/LabelDataDisplay/LabelDataArrayDisplay'
import MxConsole from '../MxConsole'



interface HydrationConsoleTypes {

}

const HydrationConsole = (props: HydrationConsoleTypes) => {

    const HydrationBarColors = {
        barFillColor: '#4393C3',
        barInnerFillColor: '#2166AC',
        barTotalFillColor: '#92C5DE',
    }

    const HydrationLabelData: LabelDataDisplayTypes[] = [
        {label: 'hydrated', data: 100},
        {label: 'dehyrated', data: 40},
        {label: 'base hydration', data: 112},
        {label: 'target', data: 152},
    ]

    HydrationLabelData.map(HydrationLabel => {
        HydrationLabel.extraData = 'oz'
    })

    return (
        <div id="hydration-console-root">
            <MxConsole heading="hydration" labelDataArray={HydrationLabelData} barColors={HydrationBarColors}/>

        </div>
    )
}

export default HydrationConsole