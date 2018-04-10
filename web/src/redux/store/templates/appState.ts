export const appState: AppStateTypes = {
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    activeFooterButton: 'nutrition',
    showActionsBackButton: false,
    showUserActions: false,
    userActionsDrawerClass: '',
    showModal: true,
    modalSelection: 'calories',
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
    name: string;
    age: number;
    favoriteColor: string;
}
export interface AdjustableSliderTypes {
    calories: { consumed: number; burned: number; };
    hydration: {hydrated: number; dehydrated: number;};
}