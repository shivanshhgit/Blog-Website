export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title: 'loading...',
        message : 'Data is being loaded,Please wait'
    },
    success:{
        title:'Success',
        message:'Data successfully loaded'
    }, 
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server.Please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occurred while parsing the data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server'
    }
}
export const SERVICE_URLS = {
    userSignup:{url:'/signup',method:'POST'}
}