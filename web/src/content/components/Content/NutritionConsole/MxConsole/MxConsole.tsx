import * as React from 'react'
import {LabelDataDisplayTypes} from '../../../../common/LabelDataDisplay/LabelDataDisplay'
import {BarColorsTypes} from '../../MiscellaneousInterfaces'
import ProgressBar from '../../../../common/ProgressBar/RegularProgressBar/ProgressBar'
import HeadingComponent from '../../../../common/HeadingComponent/HeadingComponent'
import LabelDataArrayDisplay from '../../../../common/LabelDataDisplay/LabelDataArrayDisplay'
import {ProgressBarFillTypes} from '../../../../../redux/store/templates/dailyState'

interface MxConsoleTypes {
    heading: string;
    labelDataArray: LabelDataDisplayTypes[];
    barColors: BarColorsTypes;
    barFills: ProgressBarFillTypes;

}
const MxConsole = (props: MxConsoleTypes) => {
    return (
        <div className="mx-console">
            <HeadingComponent heading={props.heading}/>
            <ProgressBar
                type={props.heading}
                firstUpperSlider={props.labelDataArray[0].label}
                firstLowerSlider={props.labelDataArray[1].label}
                secondLowerSlider={props.labelDataArray[2].label}
                secondUpperSlider={props.labelDataArray[3].label}
                barFillColor={props.barColors.barFillColor}
                barInnerFillColor={props.barColors.barInnerFillColor}
                barTotalFillColor={props.barColors.barTotalFillColor}
                barFill={props.barFills.fill}
                barInnerFill={props.barFills.innerFill}
                barTargetFill={props.barFills.targetFill}
                barTotalFill={props.barFills.totalFill}
            />
            <LabelDataArrayDisplay labelDataArray={props.labelDataArray}/>
        </div>
    )
}

export default MxConsole