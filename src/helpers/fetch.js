import interceptorHttp from "./interceptorHttp";

const baseUrl = process.env.REACT_APP_API_URL;

const getHttp =(token)=>{
    return interceptorHttp(baseUrl,token);
  }
   
const postRequest = (token,endpoint,data)=>{
    return new Promise(async (resolve,reject)=>{
        getHttp(token)
        .post(`${endpoint}`,data)
        .then(response=>{
            resolve(response)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }/${ endpoint }`;
    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return postRequest(false,endpoint,data)
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => { 
    const token = localStorage.getItem('token') || '';
    if ( method === 'GET' ) {
        return new Promise(async (resolve,reject)=>{
            getHttp(token)
            .get(`${endpoint}`)
            .then(response=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }else{
        return postRequest(token,endpoint,data)
    }
    
}


export {
    fetchSinToken,
    fetchConToken
}