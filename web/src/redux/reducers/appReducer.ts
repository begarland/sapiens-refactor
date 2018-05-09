import { appState, AppStateTypes } from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
    CHANGE_INPUT_VALUE, HANDLE_DRAG, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESSFUL, SIGN_OUT, SWITCH_BUTTON, TOGGLE_MODAL,
    TOGGLE_USER_ACTIONS, FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESSFUL,
    ZERO_OUT_SLIDERS, WEIGH_IN, WEIGH_IN_SUCCESSFUL, WEIGH_IN_FAILED, CHANGE_STEP
} from '../actions/actionTypes'

import {FooterButtons, Modals, Paths} from '../../content/utils/Enums'

const pathArray = [Paths.Favorites, Paths.History, Paths.Goals, Paths.Search]
const showActionsBackButton = (pathname) => pathArray.some(pathType => pathname.includes(pathType))

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                activeFooterButton: ((action.payload.pathname).includes(Paths.Actions) ? FooterButtons.Actions : FooterButtons.Nutrition),
                showActionsBackButton: showActionsBackButton(action.payload.pathname),
                showModal: false,
                modalSelection: Modals.None,
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputType]: {
                        ...state.inputs[action.inputType],
                        [action.key]: action.value,
                    }
                }
            }
        }
        case SWITCH_BUTTON: {
            return {
                ...state,
                activeFooterButton: action.button,
            }
        }
        case TOGGLE_USER_ACTIONS: {
            return {
                ...state,
                showUserActions: action.show,
                userActionsDrawerClass: (action.show ? 'slide-in' : 'slide-out'),
            }
        }
        case TOGGLE_MODAL: {
            return {
                ...state,
                showModal: action.show,
                modalSelection: action.modalSelection,
                showUserActions: false,
                userActionsDrawerClass: (state.showUserActions ? 'slide-out' : ''),
                inputs: appState.inputs,
            }
        }
        case HANDLE_DRAG: {
            return {
                ...state,
                adjustableSliderValues: {
                    ...state.adjustableSliderValues,
                    [action.mxSelection]: action.position
                },
                inputs: {
                    ...state.inputs,
                    adjustableSlider: {
                        ...state.inputs.adjustableSlider,
                        [action.mxSelection]: action.deltaValue
                    },
                },
            }
        }
        case ZERO_OUT_SLIDERS: {
            return {
                ...state,
                adjustableSliderValues: appState.adjustableSliderValues,
                inputs: appState.inputs
            }
        }
        case SIGN_IN: {
            return {
                ...state,
                spinners: {
                    ...state.spinners,
                    signIn: true,
                },
            }
        }
        case SIGN_IN_SUCCESSFUL: {
            return {
                ...state,
                signedIn: true,
                inputs: appState.inputs,
                spinners: {
                    ...state.spinners,
                    signIn: false,
                },
            }
        }
        case SIGN_IN_FAILED: {
            return {
                ...state,
                inputs: appState.inputs,
                spinners: {
                    ...state.spinners,
                    signIn: false,
                },
                modalSelection: Modals.Error,
                error: action.error
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                signedIn: false,
                showModal: false,
                modalSelection: Modals.None,
            }
        }
        case FORGOT_PASSWORD: {
            return {
                ...state,
                spinners: {
                    ...state.spinners,
                    forgotPassword: true,
                },
            }
        }
        case FORGOT_PASSWORD_SUCCESSFUL: {
            return {
                ...state,
                inputs: {
                    forgotPassword: {
                        email: '',
                        databaseQueried: true,
                    }
                },
                spinners: {
                    ...state.spinners,
                    forgotPassword: false,
                },
            }
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                inputs: {
                    forgotPassword: {
                        email: '',
                        databaseQueried: null,
                    }
                },
                spinners: {
                    ...state.spinners,
                    forgotPassword: false,
                },
                modalSelection: Modals.Error,
                error: action.error
            }
        }
        case WEIGH_IN: {
            return {
                ...state,
                spinners: {
                    ...state.spinners,
                    weighIn: true,
                },
            }
        }
        case WEIGH_IN_SUCCESSFUL: {
            return {
                ...state,
                inputs: appState.inputs,
                spinners: {
                    ...state.spinners,
                    weighIn: false,
                },
            }
        }
        case WEIGH_IN_FAILED: {
            return {
                ...state,
                inputs: appState.inputs,
                spinners: {
                    ...state.spinners,
                    weighIn: false,
                },
                modalSelection: Modals.Error,
                error: action.error

            }
        }
        case CHANGE_STEP: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputType]: {
                        ...state.inputs[action.inputType],
                        step: action.newStep
                    }
                }
            }
        }
        default: {
            return state
        }
    }
}