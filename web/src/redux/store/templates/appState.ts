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
}

export interface AppStateTypes {
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;
    activeFooterButton: string;


}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}