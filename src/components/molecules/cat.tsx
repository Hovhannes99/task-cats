import {IMoreCats} from "../../store/reducer/seeMoreCats";


const Cat = ({cats}: { cats: IMoreCats }) => (
    <div className={"cats"}>
        <img src={cats.url} alt="cat"/>
    </div>
)

export default Cat