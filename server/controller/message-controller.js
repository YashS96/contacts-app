import twilio from 'twilio'
import dotenv from 'dotenv'

dotenv.config();
const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

const sendMessage = async (request, response) => {

    // Fetching the phone number of the person from the qurey string
    let phone = request.params.phone;
    // console.log(phone);

    // Generating a random 6 digit OTP
    let OTP =  Math.floor(Math.random()*Math.pow(10,6));
    let digits = OTP.toString().length
    if(digits < 6){
        console.log(digits)
        let i= 6-digits;
        let str="";
        for(let j=0;j<i;j++)
             str+="0";
        OTP=str+OTP;
    }
    console.log(OTP);
    // Twilio api boilerplate async method to send message
    client.messages
    .create({
        body: `Hi. Your OTP is: ${OTP}`,
        to: phone, // Text this number (must register the number since its a trial account)
        from: '+19087389400', // From a valid Twilio number (Sender)
    })
    .then((message) => console.log(message.sid))
    .then(()=>{

        response.send(jsonData)
    })
;


}

export default sendMessage