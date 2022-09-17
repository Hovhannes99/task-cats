import {useCallback, useEffect} from "react";
import CatsCategoriesApi from "../../apis/getCategories";
import {useDispatch, useSelector} from "react-redux";
import {catsCategories} from "../../store/action";
import {ICategories} from "../../store/reducer/cats-categories";
import CatsOfCategories from "../molecules/catsCategories";

const CatsCategories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: { catsCategories: { data: ICategories[] | any } }) => state?.catsCategories.data)
    const getCatsCategories = useCallback(
        async () => {
            try {
                const data: ICategories[] | any = await CatsCategoriesApi.getCatsCategories()
                dispatch(catsCategories(data))
                return data
            } catch (e) {
                console.log(e)
            }
        }, [dispatch]);

    useEffect(() => {
        getCatsCategories()
    }, [])

    return (
        <nav className="categories-cats">
            <div className={"categories-wrapper"}>
                <div>
                    {categories.map((item: ICategories, index: number) => (
                        <CatsOfCategories category={item} key={item.id + "" + index}/>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default CatsCategories

//         <CatsCategories/>
//     </nav>
// )
//
//
// export default Categories