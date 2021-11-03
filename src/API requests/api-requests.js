import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';


export const fetchPosts = async () => {
    try{
        const response = await axios.get('/posts');
        return response.data;
        
    } catch (err) {
        return err;
    }


}
