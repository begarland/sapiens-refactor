import * as React from 'react'
import AdjustableSliderArrayCreator from '../../../../common/AdjustableSlider/AdjustableSliderArrayDisplay'
import { AppTypes } from '../../../../App'
import { AdjustableSliderTypes } from '../../../../common/AdjustableSlider/AdjustableSlider'
import { Mx, Units, Calories, Hydration, UI } from '../../../../utils/Enums'

interface MxModalContentPropTypes extends AppTypes {}
interface MxModalContentStateTypes {
    deltaValueConsumed: number;
    deltaValueBurned: number;
    deltaValueHydrated: number;
    deltaValueDehydrated: number;
}

class MxModalContent extends React.Component<MxModalContentPropTypes, MxModalContentStateTypes> {
    constructor(props: MxModalContentPropTypes){
        super(props)
        this.state = {
            deltaValueConsumed: 0,
            deltaValueBurned: 0,
            deltaValueHydrated: 0,
            deltaValueDehydrated: 0,
        }

        this.handleDragConsumed = this.handleDragConsumed.bind(this)
        this.handleDragBurned = this.handleDragBurned.bind(this)
        this.handleDragHydrated = this.handleDragHydrated.bind(this)
        this.handleDragDehydrated = this.handleDragDehydrated.bind(this)
    }

    handleDragConsumed(event: Event, ui: any) {
        this.setState({
            deltaValueConsumed: Math.round((ui.x * Calories.MaxSlideAdjust) / UI.ProgressBarWidth)
        })
    }
    handleDragBurned(event: Event, ui: any) {
        this.setState({
            deltaValueBurned: Math.round((ui.x * Calories.MaxSlideAdjust) / UI.ProgressBarWidth)
        })
    }
    handleDragHydrated(event: Event, ui: any) {
        if (this.props.userState.metric) {
            this.setState({
                deltaValueHydrated: +((ui.x * Hydration.MaxSlideAdjustMetric) / UI.ProgressBarWidth).toFixed(3)
            })
        } else {
            this.setState({
                deltaValueHydrated: Math.round((ui.x * Hydration.MaxSlideAdjustImperial) / UI.ProgressBarWidth)
            })
        }
    }
    handleDragDehydrated(event: Event, ui: any) {
        if (this.props.userState.metric) {
            this.setState({
                deltaValueDehydrated: +((ui.x * Hydration.MaxSlideAdjustMetric) / UI.ProgressBarWidth).toFixed(3)
            })
        } else {
            this.setState({
                deltaValueDehydrated: Math.round((ui.x * Hydration.MaxSlideAdjustImperial) / UI.ProgressBarWidth)
            })
        }
    }


    render() {
        let largeTickLocations: number[] = []
        let content: boolean
        let contentArray: AdjustableSliderTypes [] = []
        const modalSelection = this.props.appState.modalSelection
        if (modalSelection === Mx.Calories){
            content = true
            largeTickLocations = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            contentArray = [
                {
                    id: `${Mx.Calories}-${Calories.Consumed}`,
                    label: `${Calories.Consumed}`,
                    units: (this.props.userState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                    deltaValue: this.state.deltaValueConsumed,
                    handleDrag: this.handleDragConsumed,
                    sliderThumbColor: `${Calories.BarFillColor}`,
                    largeTickLocations,
                    numSmallTicks: 4,

                },
                {
                    id: `${Mx.Calories}-${Calories.Burned}`,
                    label: `${Calories.Burned}`,
                    units: (this.props.userState.metric ? Units.CaloriesMetric : Units.CaloriesImperial),
                    deltaValue: this.state.deltaValueBurned,
                    handleDrag: this.handleDragBurned,
                    sliderThumbColor: `${Calories.BarInnerFillColor}`,
                    largeTickLocations,
                    numSmallTicks: 4,

                },
            ]
        } else if (modalSelection === Mx.Hydration) {
            const largeTickLocationsImperial = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            const largeTickLocationsMetric = [0, 59.5, 119.5, 179.5, 239.5, 299.5]
            largeTickLocations = (this.props.userState.metric ? largeTickLocationsMetric : largeTickLocationsImperial)
            const numSmallTicks = (this.props.userState.metric ? 3 : 4)
            content = true
            contentArray = [
                {
                    id: `${Mx.Hydration}-${Hydration.Hydrated}`,
                    label: `${Hydration.Hydrated}`,
                    units: (this.props.userState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                    deltaValue: this.state.deltaValueHydrated,
                    handleDrag: this.handleDragHydrated,
                    sliderThumbColor: `${Hydration.BarFillColor}`,
                    largeTickLocations,
                    numSmallTicks,
                },
                {
                    id: `${Mx.Hydration}-${Hydration.Dehydrated}`,
                    label: `${Hydration.Dehydrated}`,
                    units: (this.props.userState.metric ? Units.HydrationMetric : Units.HydrationImperial),
                    deltaValue: this.state.deltaValueDehydrated,
                    handleDrag: this.handleDragDehydrated,
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
}

export default MxModalContent
