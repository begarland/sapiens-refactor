import * as React from 'react'
import MxConsole from '../MxConsole'
import { AppTypes } from '../../../../../App'
import { LabelDataDisplayTypes } from '../../../../../common/LabelDataDisplay/LabelDataDisplay'
import { BarColorsTypes } from '../../../../../utils/MiscellaneousInterfaces'
import { ProgressBarFillTypes } from '../../../../../../redux/store/templates/dailyState'
import { Hydration, Units, Mx, Modals } from '../../../../../utils/Enums'



interface HydrationConsoleTypes extends AppTypes {

}

const HydrationConsole = (props: HydrationConsoleTypes) => {

    const hydration = props.dailyState.hydration
    const units = (props.memberState.metric ? Units.HydrationMetric : Units.HydrationImperial)

    const HydrationBarColors: BarColorsTypes = {
        barFillColor: `${Hydration.BarFillColor}`,
        barInnerFillColor: `${Hydration.BarInnerFillColor}`,
        barTotalFillColor: `${Hydration.BarTotalFillColor}`,
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
        {label: `${Hydration.Hydrated}`, data: props.dailyState.hydration.hydrated},
        {label: `${Hydration.Dehydrated}`, data: props.dailyState.hydration.dehydrated},
        {label: `${Hydration.BaseHydration}`, data: props.dailyState.hydration.baseHydration},
        {label: `${Hydration.Target}`, data: props.dailyState.hydration.targetHydration},
    ]

    HydrationLabelData.map(HydrationLabel => {
        HydrationLabel.extraData = units
    })

    return (
        <div id="hydration-console-root">
            <MxConsole
                heading={Mx.Hydration}
                labelDataArray={HydrationLabelData}
                barColors={HydrationBarColors}
                barFills={HydrationBarFills}
                onClick={props.toggleModal(Modals.Hydration)}
            />

        </div>
    )
}

export default HydrationConsole