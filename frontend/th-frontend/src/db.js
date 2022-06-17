import axios from 'axios';


const BASE_URL = 'http://localhost:3001';


class Database {

    static async request(endpoint , data = {}  , method = 'get') {
        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === 'get') ? data : {};

        try{
            return (await axios({url , method , data , params})).data;
        }catch(err) {
            console.error('Database Error' , err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async findAll() {
        let res = await this.request('users');
        return res;
    }

    static async signUp(data) {
        try{
            if(data.email === '' || data.firstName === '' || data.lastName === '') throw new Error('All data fields must be filled out')
        let res = await this.request('users' , data , 'post')
        return res;
        }catch(err) {
            return (err);
        }
    }
}


export default Database;