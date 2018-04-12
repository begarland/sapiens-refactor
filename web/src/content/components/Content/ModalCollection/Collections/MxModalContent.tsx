import * as React from 'react'
import AdjustableSliderArrayCreator from '../../../../common/AdjustableSlider/AdjustableSliderArrayDisplay'
import { AppTypes } from '../../../../App'
import { AdjustableSliderTypes } from '../../../../common/AdjustableSlider/AdjustableSlider'
import { Mx, Units, Calories, Hydration } from '../../../../utils/Enums'

interface MxModalContentTypes extends AppTypes {}

const MxModalContent = (props: MxModalContentTypes) => {
        let largeTickLocations: number[] = []
        let content: boolean
        let contentArray: AdjustableSliderTypes [] = []
        const modalSelection = props.appState.modalSelection
        if (modalSelection === Mx.Calories){
            content = true
            largeTickLocations = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            contentArray = [
                {
                    id: `${Mx.Calories}-${Calories.Consumed}`,
                    label: `${Calories.Consumed}`,
                    units: (props.memberState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                    deltaValue: props.appState.adjustableSlider.calories.consumed,
                    handleDrag: props.handleDrag(`${Mx.Calories}`,`${Calories.Consumed}`),
                    sliderThumbColor: `${Calories.BarFillColor}`,
                    largeTickLocations,
                    numSmallTicks: 4,

                },
                {
                    id: `${Mx.Calories}-${Calories.Burned}`,
                    label: `${Calories.Burned}`,
                    units: (props.memberState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                    deltaValue: props.appState.adjustableSlider.calories.burned,
                    handleDrag: props.handleDrag( `${Mx.Calories}`,`${Calories.Burned}`),
                    sliderThumbColor: `${Calories.BarInnerFillColor}`,
                    largeTickLocations,
                    numSmallTicks: 4,

                },
            ]
        } else if (modalSelection === Mx.Hydration) {
            const largeTickLocationsImperial = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            const largeTickLocationsMetric = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            largeTickLocations = (props.memberState.metric ? largeTickLocationsMetric : largeTickLocationsImperial)
            const numSmallTicks = (props.memberState.metric ? 3 : 4)
            content = true
            contentArray = [
                {
                    id: `${Mx.Hydration}-${Hydration.Hydrated}`,
                    label: `${Hydration.Hydrated}`,
                    units: (props.memberState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                    deltaValue: props.appState.adjustableSlider.hydration.hydrated,
                    handleDrag: props.handleDrag(`${Mx.Hydration}`, `${Hydration.Hydrated}`),
                    sliderThumbColor: `${Hydration.BarFillColor}`,
                    largeTickLocations,
                    numSmallTicks,
                },
                {
                    id: `${Mx.Hydration}-${Hydration.Dehydrated}`,
                    label: `${Hydration.Dehydrated}`,
                    units: (props.memberState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                    deltaValue: props.appState.adjustableSlider.hydration.dehydrated,
                    handleDrag: props.handleDrag(`${Mx.Hydration}`, `${Hydration.Dehydrated}`),
                    sliderThumbColor: `${Hydration.BarInnerFillColor}`,
                    largeTickLocations,
                    numSmallTicks,
                },
            ]
        }
        else {
            content = false

        }
        return (
            <div id="mx-modal-content">
                {content && <AdjustableSliderArrayCreator array={contentArray}/>}
            </div>
        )
}

export default MxModalContent
