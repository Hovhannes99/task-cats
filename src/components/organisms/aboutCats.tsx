import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AboutCatsApi from "../../apis/getAboutCats";
import {Button} from "../atoms/button";
import {seeMoreCats} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {IMoreCats} from "../../store/reducer/seeMoreCats";
import Cat from "../molecules/cat";


const AboutCats = () => {
    const {id} = useParams()
    const [pageId, setPageId] = useState(0);
    const dispatch = useDispatch()
    const moreCats = useSelector((state: { moreCats: { data: IMoreCats[] | any } }) => state?.moreCats.data)

    const aboutCats = async () => {
        try {
            const data: IMoreCats[] | any = await AboutCatsApi.getAboutCats(id)
            dispatch(seeMoreCats(data))
            return data
        } catch (e) {
            console.log(e)
        }
    }
    const handleSeeMoreCats = async () => {
        try {
            setPageId(pageId + 1)
            const data: IMoreCats[] | any = await AboutCatsApi.getMoreCats(pageId, id || "1")
            dispatch(seeMoreCats(moreCats?.concat(data)))
            return data
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
         aboutCats()
    }, [id])

    return (
        <div className={"cats-wrapper"}>
            <div className={"cats-wrapper__container"}>
                {moreCats.map((cat: IMoreCats, index: number) => (
                    <Cat cats={cat} key={cat.id + index}/>
                ))}
                <Button className={"button-see-more"} onClick={() => {handleSeeMoreCats()}}>See more</Button>
            </div>
        </div>
    )
}
export default AboutCats