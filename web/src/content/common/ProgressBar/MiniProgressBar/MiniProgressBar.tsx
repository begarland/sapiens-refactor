import * as React from 'react'
import MiniSliderBar from './MiniSliderBar/MiniSliderBar'

export interface MiniProgressBarProps {
    type: string;
    extraData?: {consumed: number, allotted: number};
    barFills?: {barTotalFill?: number, barTotalFillColor?: string,
        barFill?: number, barFillColor?: string, barTargetFill?: number};
    borderColor?: string;
    onClick?: Function;
}
class MiniProgressBar extends React.Component<MiniProgressBarProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            barTotalFill: props.barFills.barTotalFill || 0,
            barFill: props.barFills.barFill || 0,

            barTotalFillColor: props.barFills.barTotalFillColor || '#C2A5CF',
            barFillColor: props.barFills.barFillColor || '#762A83',
            borderColor: props.barFills.borderColor || '#222222',

        }
    }

    render() {
        return (

            <div
                id="outermost-mini-progress-bar-container"
            >
                <MiniSliderBar
                    id={this.props.type + '-slider'}
                    type="upper"
                    location={this.props.barFills.barFill - 3}

                />
                <div
                    id="mini-progress-bar"
                >
                    <div
                        id={this.props.type + '-mini-progress-bar-outline'}
                        className="mini-progress-bar-outline"
                        style={{borderColor: `${this.state.borderColor}`}}
                    >
                        <div
                            id={this.props.type + '-mini-progress-bar-fill-total'}
                            className="mini-progress-bar-fill-total"
                            style={{
                                width: `${this.props.barFills.barTotalFill}px`,
                                background: this.state.barTotalFillColor,

                            }}
                        >
                            <div
                                id={this.props.type + '-mini-progress-bar-fill'}
                                className="mini-progress-bar-fill"
                                style={{
                                    width: this.props.barFills.barFill + 'px',
                                    backgroundColor: this.state.barFillColor,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default MiniProgressBar