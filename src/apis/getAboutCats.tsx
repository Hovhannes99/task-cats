import axios from 'axios'

const getAboutCats = async (id: string | undefined) => {
    const {data} = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
    return data
}
const getMoreCats = async (pageId: number, id: string) => {
    const {data} = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${pageId}&category_ids=${id}`)
    return data
}

const AboutCatsApi = {
    getAboutCats,
    getMoreCats
}


export default AboutCatsApi