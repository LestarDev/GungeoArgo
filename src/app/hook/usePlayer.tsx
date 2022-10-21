import { useDispatch, useSelector } from "react-redux";
import { setPage, addATK, addHP, addMOC, addStaticDEF, subATK, subHP, subMOC, subStaticDEF } from "./../shared/config/currentSlice"

type pageType = "Eq"
type changeTyp = "ATK" | "statDEF" | "HP" | "MOC"

const usePlayer = () => {

    const dispatch = useDispatch();
    const {page, ATK, statDEF, HP, MOC} = (useSelector((state) => state) as any).currency;

    const moveToPage = (page: pageType) => {
        switch(page){
            case "Eq":
                dispatch(setPage(1))
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
            case "statDEF":
                dispatch(addStaticDEF(amount))
                break;
            case "HP":
                dispatch(addHP(amount))
                break;
            case "MOC":
                dispatch(addMOC(amount))
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
            case "statDEF":
                dispatch(subStaticDEF(amount))
                break;
            case "HP":
                dispatch(subHP(amount))
                break;
            case "MOC":
                dispatch(subMOC(amount))
                break;
            default:
                console.log("Error!")
        }
    }

    return ({
        moveToPage, add, substract,
        page,
        HP, ATK, statDEF, MOC
    })

}

export default usePlayer