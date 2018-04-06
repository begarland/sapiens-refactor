import * as React from 'react'

interface SliderBarTypes {
    id?: string;
    location: number;
    type: string;
    fill?: boolean;
    fillColor?: string;
}

const SliderBar = (props: SliderBarTypes) => {
    if (props.type === 'upper') {
        const sliderReticleWithBars = () => {
            return(
                <div className="upper-slider-circle reticle-circle reticle-circle-bars">
                    <div className="upper-slider-reticle-bar upper-bar-top"/>
                    <div className="upper-slider-reticle-bar upper-bar-right"/>
                    <div className="upper-slider-reticle-bar upper-bar-bottom"/>
                    <div className="upper-slider-reticle-bar upper-bar-left"/>
                </div>
            )
        }

        const sliderReticleWithCircles = () => {
            return(
                <div className="upper-slider-circle reticle-circle">
                    <div className="upper-slider-reticle-circle upper-middle-circle">
                        <div className="upper-slider-reticle-circle upper-inner-circle"/>
                    </div>
                </div>
            )
        }

        return(
            <div
                id={props.id}
                className="outermost-upper-slider-bar-container"
                style={{marginLeft: `${props.location - 6}px`}}
            >
                <div id="upper-slider-bar-img-container">
                    {props.fill &&
                    <div className="upper-slider-circle" style={{backgroundColor: props.fillColor}}>
                        {sliderReticleWithCircles()}
                    </div>
                    }
                    {!props.fill && sliderReticleWithBars()}
                </div>
                <div id="vertical-line-upper"/>
            </div>
        )

    } else if (props.type === 'lower') {
        const sliderReticleWithBars = () => {
            return(
                <div className="lower-slider-circle reticle-circle">
                    <div className="lower-slider-reticle-bar lower-bar-top"/>
                    <div className="lower-slider-reticle-bar lower-bar-right"/>
                    <div className="lower-slider-reticle-bar lower-bar-bottom"/>
                    <div className="lower-slider-reticle-bar lower-bar-left"/>
                </div>
            )
        }

        const sliderReticleWithCircles = () => {
            return(
                <div className="lower-slider-circle reticle-circle">
                    <div className="lower-slider-reticle-circle lower-middle-circle">
                        <div className="lower-slider-reticle-circle lower-inner-circle"/>
                    </div>
                </div>
            )
        }

        return(
            <div
                id={props.id}
                className="outermost-lower-slider-bar-container"
                style={{marginLeft: `${props.location - 6}px`}}
            >
                <div id="vertical-line-lower" />
                <div id="lower-slider-bar-img-container" >
                    {props.fill &&
                    <div className="lower-slider-circle" style={{backgroundColor: props.fillColor}}>
                        {sliderReticleWithCircles()}
                    </div>
                    }
                    {!props.fill && sliderReticleWithBars()}
                </div>

            </div>
        )

    } else {
        console.error('invalid slider bar type')
        return null
    }

}

export default SliderBar