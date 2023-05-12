
const { default: axios } = require('axios');
const apiResponse = async (message) => {

    try {		
        await axios.post('https://xa5xgz9rgd.execute-api.us-east-1.amazonaws.com/Stage/process_input', {
            "question": message
        })
        .then(res => {

            try {                
                return res.data.processed_output                
            } catch (error) {
                console.log(error)
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {apiResponse};