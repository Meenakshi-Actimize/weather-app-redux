import axios from "axios";


 const GetData = async (test) => {
    try {
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='+test+'&appid=5bcf2094de39c431246b353e5d2df3a8';


        console.log('meena', test);
        const response = await axios.get(`${baseURL}`);
        const jsonData = response.data;
        console.log('this is api data', jsonData)
        if (jsonData == null) {
            return [];
        } else {
            return jsonData; 
        }
    } catch (error) {
        console.error(' Api Error ---->', error );
        
    }   
}

// export const SAVE_DATA = async (data) => {
//     try {
//         const response = await axios.post(baseURL, data);
//         return response.data; 
//     } catch (error) {
//         console.error('Error');
//     }
// };

export default GetData;