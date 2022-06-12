import axios from 'axios'

let url ='http://localhost:8000';

export const contacts = async () => {
    try{
        let response = await axios.get(`${url}/getContacts`)
        return response.data
    }
    catch(error){
        console.error(`Contacts endpoint error: ${error}`)
    }
}

export const message = async (number)=>{
    try{
        let response = await axios.post(`${url}/sendMessage/${number}`)
         return response.data
    }
    catch(error){
        console.error(`Message endpoint error: ${error}`)
    }
}