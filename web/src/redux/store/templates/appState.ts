export const appState: AppStateTypes = {
    signedIn: false,
    signInProps: {
        showSpinner: false,
    },
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        signIn: {
            email: '',
            password: '',
            showPassword: false,
        }
    },
    activeFooterButton: 'nutrition',
    showActionsBackButton: false,
    showUserActions: false,
    userActionsDrawerClass: '',
    showModal: false,
    modalSelection: 'none',
    adjustableSlider: {
        calories: {
            consumed: 0,
            burned: 0,
        },
        hydration: {
            hydrated: 0,
            dehydrated: 0,
        }
    }
}

export interface AppStateTypes {
    signedIn: boolean;
    signInProps: SignInPropTypes;
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
}

export interface InputTypes {
    signIn: {
        email: string;
        password: string;
        showPassword: boolean;
    }
}
export interface AdjustableSliderTypes {
    calories: { consumed: number; burned: number; };
    hydration: {hydrated: number; dehydrated: number;};
}

export interface SignInPropTypes {
    showSpinner: boolean;
}