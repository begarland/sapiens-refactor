import * as React from 'react'
import Draggable from 'react-draggable'
import {locationsAreEqual} from 'history'

export interface AdjustableSliderTypes {
    id: string;
    label: string;
    units: string;
    deltaValue: number;
    sliderThumbColor?: string;
    largeTickLocations: number [];
    numSmallTicks: number;
    handleDrag: (MouseEvent, Object) => void;


}

const AdjustableSlider = (props: AdjustableSliderTypes) => {
    const smallTick = (position: number, index: number) => {
        return (<div className="small-tick" style={{left: position}} key={index}/>)
    }

    const largeTick = (position: number, thickness: number, index: number) => {
        return (<div className="large-tick" style={{left: position, width: thickness + 'px'}} key={index}/>)
    }

    const onStart = (event: Event) => {
        event.preventDefault()
    }

    const handleDrag = (event: Event, ui: any) => {
        props.handleDrag(event, ui)

    }

    const extraData = (
            <h4 id={props.id + '-extra-data'} className="slider-label slider-extra-data">
                {props.deltaValue} {props.units}
            </h4>
        )


    let smallTicksLocations: number [] = []
    props.largeTickLocations.map((location, index) => {
        const distance = (300/(props.largeTickLocations.length - 1))/(props.numSmallTicks + 1)
        if (index < props.largeTickLocations.length - 1) {
            for (let i = 0; i <= props.numSmallTicks; i++) {
                smallTicksLocations.push(location + ( distance * i))
            }
        }})


    let ticks = (
        <div className="tick-adjustment">
            {props.largeTickLocations.map((location, index) => {
                return largeTick(location, 2, index)
            })}
            {smallTicksLocations.map((location, index)=> {
                return smallTick(location, index)
            })}
        </div>
        )

    return (
        <div className="slider-container">
            <h4 id={props.id + '-label'} className="slider-label">{props.label}:</h4>
            {extraData}
            <div className="slider-bar">
                {ticks}
                <Draggable
                    axis="x"
                    defaultPosition={{x: 0, y: 0}}
                    bounds={{top: 0, left: 0, right: 300, bottom: 0}}
                    onStart={(event) => {onStart(event)}}
                    onDrag={(event, ui) => {handleDrag(event, ui)}}
                >
                    <div className="invisible-slider">
                        <div
                            className="slider-thumb"
                            style={{borderColor: `transparent transparent ${props.sliderThumbColor ? props.sliderThumbColor : '#66AA55'} transparent`}}
                        />
                    </div>
                </Draggable>
            </div>

        </div>
    )
}

export default AdjustableSlider