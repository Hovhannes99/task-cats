import {Button} from "../atoms/button";
import {Link} from 'react-router-dom'
import {ICategories} from "../../store/reducer/cats-categories";

const CatsOfCategories = ({category}: { category: ICategories }) => (<div className="cats-names">
    { // @ts-ignore
        <Link to={`/${category.id}`}><Button
            className={"button-categories"}>{category.name}</Button></Link>}
</div>)

export default CatsOfCategories