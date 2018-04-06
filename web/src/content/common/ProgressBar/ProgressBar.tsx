import * as React from 'react'
import SliderBar from './SliderBar/SliderBar'

interface ProgressBarPropsTypes {
    type: string;
    barTotalFill?: number;
    barTotalFillColor?: string;
    barFill?: number;
    barFillColor?: string;
    barInnerFill?: number;
    barInnerFillColor?: string;
    barTempFill?: number;
    barTempInnerFill?: number;
    barTargetFill?: number;
    borderColor?: string;
    firstUpperSlider?: string;
    secondUpperSlider?: string;
    firstLowerSlider?: string;
    secondLowerSlider?: string;
    onClick?: Function;
}

interface ProgressBarStateTypes {
    barTotalFill: number;
    barFill: number;
    barInnerFill: number;
    barTotalFillColor: string;
    barFillColor: string;
    barInnerFillColor: string;
    borderColor: string;
}

class ProgressBar extends React.Component<ProgressBarPropsTypes, ProgressBarStateTypes> {
    constructor(props: any) {
        super(props)
        this.state = {
            barTotalFill: props.barTotalFill || 0,
            barFill: props.barFill || 0,
            barInnerFill: props.barInnerFill || 0,

            barTotalFillColor: props.barTotalFillColor || '#CAE9AB',
            barFillColor: props.barFillColor || '#5AAE61',
            barInnerFillColor: props.barInnerFillColor || '#1B7837',
            borderColor: props.borderColor || '#222222',

        }
    }

    render() {
        return (
            <div
                id="outermost-progress-bar-container"
                onClick={() => {this.props.onClick()}}
            >
                {this.props.secondUpperSlider &&
                    <SliderBar
                        id={this.props.type + this.props.secondUpperSlider.toLowerCase()}
                        type="upper"
                        location={this.props.barTotalFill}
                        fillColor={this.state.barFillColor}
                        fill={true}

                    />
                }

                {this.props.firstUpperSlider &&
                    <SliderBar
                        id={this.props.type + this.props.firstUpperSlider.toLowerCase()}
                        type="upper"
                        location={this.props.barFill}
                        fill={false}
                    />
                }

                <div
                    id="progress-bar"
                >
                    <div
                        id={this.props.type + '-progress-bar-outline'}
                        className="progress-bar-outline"
                        style={{borderColor: `${this.state.borderColor}`}}
                    >
                        <div
                            id={this.props.type + '-progress-bar-fill-total'}
                            className="progress-bar-fill-total"
                            style={{
                                width: `${this.props.barTotalFill}px`,
                                background: this.state.barTotalFillColor,

                            }}
                        >
                            <div
                                id={this.props.type + '-progress-bar-fill'}
                                className="progress-bar-fill"
                                style={{
                                    width: this.props.barFill + 'px',
                                    backgroundColor: `${this.state.barFillColor}`,
                                }}
                            >
                                <div
                                    id={this.props.type + '-progress-bar-inner-fill'}
                                    className="progress-bar-inner-fill"
                                    style={{
                                        width: this.props.barInnerFill + 'px',
                                        backgroundImage: `repeating-linear-gradient( -45deg,
                                                ${this.state.barInnerFillColor}, ${this.state.barInnerFillColor} 3px,
                                            transparent 3px, transparent 6px)`,
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.secondLowerSlider &&
                    <SliderBar
                        id={this.props.type + this.props.secondLowerSlider.toLowerCase()}
                        type="lower"
                        location={this.props.barTargetFill}
                        fillColor={this.state.barInnerFillColor}
                        fill={true}

                    />
                }

                {this.props.firstLowerSlider &&
                    <SliderBar
                        id={this.props.type + this.props.firstLowerSlider.toLowerCase()}
                        type="lower"
                        location={(this.state.barFill > this.state.barInnerFill
                            ? (this.state.barFill - this.state.barInnerFill)
                            : 0)}
                        fill={false}

                    />
                }
            </div>
        )

    }
}

export default ProgressBar