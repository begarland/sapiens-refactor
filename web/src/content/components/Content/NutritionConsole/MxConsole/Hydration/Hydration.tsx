import * as React from 'react'
import {LabelDataDisplayTypes} from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import MxConsole from '../MxConsole'
import {AppTypes} from '../../../../../App'
import {BarColorsTypes} from '../../../MiscellaneousInterfaces'
import {ProgressBarFillTypes} from '../../../../../../redux/store/templates/dailyState'



interface HydrationConsoleTypes extends AppTypes {

}

const HydrationConsole = (props: HydrationConsoleTypes) => {

    const hydration = props.dailyState.hydration
    const units = (props.userState.metric ? 'L' : 'oz')

    const HydrationBarColors: BarColorsTypes = {
        barFillColor: '#2166AC',
        barInnerFillColor: '#328DC1',
        barTotalFillColor: '#92C5DE',
    }

    const HydrationBarFills: ProgressBarFillTypes = {
        fill: hydration.progressBarFills.fill,
        innerFill: hydration.progressBarFills.innerFill,
        targetFill: hydration.progressBarFills.targetFill,
        totalFill: hydration.progressBarFills.totalFill,
        last: {
            fill: hydration.progressBarFills.last.fill,
            innerFill: hydration.progressBarFills.last.innerFill
        }
    }

    const HydrationLabelData: LabelDataDisplayTypes[] = [
        {label: 'hydrated', data: props.dailyState.hydration.hydrated},
        {label: 'dehyrated', data: props.dailyState.hydration.dehydrated},
        {label: 'base hydration', data: props.dailyState.hydration.baseHydration},
        {label: 'target', data: props.dailyState.hydration.targetHydration},
    ]

    HydrationLabelData.map(HydrationLabel => {
        HydrationLabel.extraData = units
    })

    return (
        <div id="hydration-console-root">
            <MxConsole
                heading="hydration"
                labelDataArray={HydrationLabelData}
                barColors={HydrationBarColors}
                barFills={HydrationBarFills}
                onClick={props.toggleModal('hydration')}

            />

        </div>
    )
}

export default HydrationConsole