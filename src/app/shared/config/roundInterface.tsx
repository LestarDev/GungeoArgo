interface ThisRound {
    untilSuperAbility: number,
    untilPoisonEffect: number,
    untilFired: number,
    iced: number
}

export const initThisRound: ThisRound = {
    untilSuperAbility: 10,
    untilPoisonEffect: 0,
    untilFired: 0,
    iced: 0
}

export default ThisRound