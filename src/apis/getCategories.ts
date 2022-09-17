import axios from 'axios'


const getCatsCategories = async () => {
    const {data} = await axios.get('https://api.thecatapi.com/v1/categories')
    return data
}


const CatsCategoriesApi = {
   getCatsCategories
}


export default CatsCategoriesApi