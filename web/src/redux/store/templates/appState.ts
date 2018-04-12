import {FooterButtons, Modals} from '../../../content/utils/Enums'

export const appState: AppStateTypes = {
    signedIn: true,
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        signIn: {
            email: '',
            password: '',
            showPassword: false,
        },
        forgotPassword: {
            email: '',
            emailExistsInDB: null,
        }
    },
    activeFooterButton: FooterButtons.Nutrition,
    showActionsBackButton: false,
    showUserActions: false,
    userActionsDrawerClass: '',
    showModal: true,
    modalSelection: Modals.ForgotPassword,
    adjustableSlider: {
        calories: {
            consumed: 0,
            burned: 0,
        },
        hydration: {
            hydrated: 0,
            dehydrated: 0,
        }
    },
    spinners: {
        signIn: true,
        forgotPassword: false,
    },
    error: '',
}

export interface AppStateTypes {
    signedIn: boolean;
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;
    activeFooterButton: string;
    showActionsBackButton: boolean;
    showUserActions: boolean;
    userActionsDrawerClass: string;
    showModal: boolean;
    modalSelection: string;
    adjustableSlider: AdjustableSliderTypes;
    spinners: SpinnerTypes;
    error: string;
}

export interface InputTypes {
    signIn: {
        email: string;
        password: string;
        showPassword: boolean;
    },
    forgotPassword: {
        email: string;
        emailExistsInDB: null | boolean;
    }
}
export interface AdjustableSliderTypes {
    calories: {consumed: number; burned: number;};
    hydration: {hydrated: number; dehydrated: number;};
}

export interface SpinnerTypes {
    signIn: boolean;
    forgotPassword: boolean;
}

