import PageType from "../../shared/config/pageInterface";
import "./background"

const Background = (pageAny: any) => {

    const page = pageAny as PageType

    return (
        <div>
            {page.typ}
        </div>
    )
}

export default Background;