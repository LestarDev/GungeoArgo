import { useDispatch, useSelector } from "react-redux";
import PageType from "../shared/config/pageInterface";
import { setPageNr1, setPageNr2, setPageNr3, setPageNr4, setPageNr5, setPageNr6, setPageNr7, setPageNr8, setPageNr9, addATK, addHP, addGOLD, subGOLD, subATK, subHP, setPage1, setPage2, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9 } from "./../shared/config/currentSlice"

type changeTyp = "ATK" | "HP" | "GOLD"

const usePlayer = () => {

    const dispatch = useDispatch();
    const {ATK, HP, GOLD, page1, page2, page3, page4, page5, page6, page7, page8, page9} = (useSelector((state) => state) as any).currency;

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

    return ({
        setPage, add, substract, setPageNr,
        page1, page2, page3, page4, page5, page6, page7, page8, page9,
        HP, ATK, GOLD
    })

}

export default usePlayer