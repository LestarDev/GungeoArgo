import { useDispatch, useSelector } from "react-redux";
import BossType from "../shared/config/bossInterface";
import PageType from "../shared/config/pageInterface";
import ThisRound from "../shared/config/roundInterface";
import { setBoss, bossIsFalse, bossIsTrue, setRoundEffect, dmgTyp, setDamageType, setPageNr1, setPageNr2, setPageNr3, setPageNr4, setPageNr5, setPageNr6, setPageNr7, setPageNr8, setPageNr9, addATK, addHP, addGOLD, subGOLD, subATK, subHP, setPage1, setPage2, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9 } from "./../shared/config/currentSlice"

type changeTyp = "ATK" | "HP" | "GOLD"

const usePlayer = () => {

    const dispatch = useDispatch();
    const {ATK, HP, GOLD, DamageType, RoundEffect, isBoss, currentBoss, page1, page2, page3, page4, page5, page6, page7, page8, page9} = (useSelector((state) => state) as any).currency;

    const setCurrentBoss = (boss: BossType) => {
        dispatch(setBoss(boss))
    }

    const setPlayerDamageType = (typ: dmgTyp) => {
        dispatch(setDamageType(typ));
    }

    const setBossValue =  (v: boolean) => {
        v ? dispatch(bossIsTrue()) : dispatch(bossIsFalse())
    }

    const getPage = (pageNr: number) => {
        switch(pageNr){
            case 1:
                return page1
            case 2:
                return page2
            case 3:
                return page3
            case 4:
                return page4
            case 5:
                return page5
            case 6:
                return page6
            case 7:
                return page7
            case 8:
                return page8
            default:
                return page9
        }
    }

    const setPageNr = (pageNr: number, value: number) => {
        switch(pageNr){
            case 1:
                dispatch(setPageNr1(value))
                break;
            case 2:
                dispatch(setPageNr2(value))
                break;
            case 3:
                dispatch(setPageNr3(value))
                break;
            case 4:
                dispatch(setPageNr4(value))
                break;
            case 5:
                dispatch(setPageNr5(value))
                break;
            case 6:
                dispatch(setPageNr6(value))
                break;
            case 7:
                dispatch(setPageNr7(value))
                break;
            case 8:
                dispatch(setPageNr8(value))
                break;
            case 9:
                dispatch(setPageNr9(value))
                break;
            default:
                console.log("Error")
        }
    }

    const setPage = (pageNR: number, toPage: PageType) => {
        switch(pageNR){
            case 1:
                dispatch(setPage1(toPage))
                break;
            case 2:
                dispatch(setPage2(toPage))
                break;
            case 3:
                dispatch(setPage3(toPage))
                break;
            case 4:
                dispatch(setPage4(toPage))
                break;
            case 5:
                dispatch(setPage5(toPage))
                break;
            case 6:
                dispatch(setPage6(toPage))
                break;
            case 7:
                dispatch(setPage7(toPage))
                break;
            case 8:
                dispatch(setPage8(toPage))
                break;
            case 9:
                dispatch(setPage9(toPage))
                break;
            default:
                console.log("Error")
        }
    } 

    const add = (typ: changeTyp, amount: number) => {
        switch(typ){
            case "ATK":
                dispatch(addATK(amount))
                break;
            case "HP":
                dispatch(addHP(amount))
                break;
            case "GOLD":
                dispatch(addGOLD(amount))
                break;
            default:
                console.log("Error!")
        }
    }

    const substract = (typ: changeTyp, amount: number) => {
        switch(typ){
            case "ATK":
                dispatch(subATK(amount))
                break;
            case "HP":
                dispatch(subHP(amount))
                break;
            case "GOLD":
                dispatch(subGOLD(amount))
                break;
            default:
                console.log("Error!")
        }
    }

    const addFire = (n: number) => {
        const currentRound: ThisRound = {
            untilFired: RoundEffect.untilFired+n,
            untilPoisonEffect: RoundEffect.untilPoisonEffect,
            untilSuperAbility: RoundEffect.untilSuperAbility,
            iced: RoundEffect.iced
        }
        dispatch(setRoundEffect(currentRound))
    }

    const addIce = (n: number) => {
        const currentRound: ThisRound = {
            untilFired: RoundEffect.untilFired,
            untilPoisonEffect: RoundEffect.untilPoisonEffect,
            untilSuperAbility: RoundEffect.untilSuperAbility,
            iced: RoundEffect.iced+n
        }
        dispatch(setRoundEffect(currentRound))
    }

    const restartSuperAbility = () => {
        const currentRound: ThisRound = {
            untilFired: RoundEffect.untilFired,
            untilPoisonEffect: RoundEffect.untilPoisonEffect,
            untilSuperAbility: 10,
            iced: RoundEffect.iced
        }
        dispatch(setRoundEffect(currentRound))
    }

    const nextRound = () => {
        const untilFiredValue: number =  RoundEffect.untilFired==0 ? 0 : 1;
        const untilPoisonEffectValue: number = RoundEffect.untilPoisonEffect==0 ? 0 : 1;
        const untilSuperAbilityValue: number = RoundEffect.untilSuperAbility==0 ? 0 : 1;
        const icedValue: number = RoundEffect.iced==0 ? 0 : 1;
        const currentRound: ThisRound = {
            untilFired: RoundEffect.untilFired-untilFiredValue,
            untilPoisonEffect: RoundEffect.untilPoisonEffect-untilPoisonEffectValue,
            untilSuperAbility: RoundEffect.untilSuperAbility-untilSuperAbilityValue,
            iced: RoundEffect.iced-icedValue
        }
        dispatch(setRoundEffect(currentRound));
    }

    return ({
        setPage, add, substract, setPageNr, getPage, setPlayerDamageType, nextRound, addFire, addIce, restartSuperAbility, setBossValue, setCurrentBoss,
        page1, page2, page3, page4, page5, page6, page7, page8, page9,
        HP, ATK, GOLD, DamageType, RoundEffect, isBoss, currentBoss
    })

}

export default usePlayer