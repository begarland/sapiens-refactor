export enum Units {
    CaloriesMetric = 'kCals',
    CaloriesImperial = 'cals',
    HydrationMetric = 'L',
    HydrationImperial = 'oz'
}

export enum Mx {
    Calories = 'calories',
    Hydration = 'hydration',
}

export enum Calories {
    Consumed = 'consumed',
    Burned = 'burned',
    Allotted = 'allotted',
    Target = 'target',
    MaxSlideAdjust = 2500,
    BarFillColor = '#1B7837',
    BarInnerFillColor = '#5AAE61',
    BarTotalFillColor = '#CAE9AB',
}

export enum Hydration {
    Hydrated = 'hydrated',
    Dehydrated = 'dehydrated',
    BaseHydration = 'base hydration',
    Target = 'target',
    MaxSlideAdjustMetric = 5,
    MaxSlideAdjustImperial = 160,
    BarFillColor = '#2166AC',
    BarInnerFillColor = '#328DC1',
    BarTotalFillColor = '#92C5DE',
}

export enum UI {
    SliderBarWidth = 300,
    ProgressBarWidth = 300,
}

export enum FooterButtons {
    Nutrition = 'nutrition',
    Actions = 'actions'
}

export enum Modals {
    None = 'none',
    SignInOrRegister = 'sign-in-or-register',
    SignIn = 'sign-in',
    ForgotPassword = 'forgot-password',
    Register = 'register',
    SignOut = 'sign-out',
    WeighIn = 'weigh-in',
    Calories = 'calories',
    Hydration = 'hydration',
    Error = 'error',
}

export enum Spinners {
    SignIn = 'sign-in',
    ForgotPassword = 'forgot-password'
}
