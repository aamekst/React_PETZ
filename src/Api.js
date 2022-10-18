const BASE_API = '';

export default {
    checkToken: async () =>{


    },

    Signin: async () => {

        const req = await fetch('${BASE_API}/auth/login', {
            method: 'POST',
            header:{
                Accept: 'application/json'
            }


        })

    },

    SignUp: async () =>{
        
    },



};