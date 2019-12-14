import dotenv from 'dotenv';
import twilio from 'twilio';
const db = require('../model/senators.json');
dotenv.config();

const {
    SID: accountSid,
    KEY: TwilloAuthToken,
  } = process.env;


twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;

class MadBot {
    /**
     * @memberof MadBot
     * @param {object} req - Request sent to the route
     * @param {object} res - Response sent from the controller
     * @param {object} next - Error handler
     * @returns {object} - object representing response message
     */
    static getSenator(req, res)  {
      const twiml = new MessagingResponse();
      const userInput = req.body.Body;

      if(userInput == 'Mad o'){
        twiml.message('You sabi person! 😃. I am Make A Difference Bot (M.A.D Bot). If you want to contact your senator(s), I am your person. However, to avoid stories that touch, I have some few guidelines for you:\n 1. To get the contact details of your senator(s), tell me the name of the state only and start  every word with capital letter (e.g: Lagos). \n 2. Do not put space between states with two (or more😏) words. (e.g CrossRiver). \n 3. Do not put the word \'state\'. (I no need am 😒).\n Oya hit me! 🥊');
      }else{

        let senator = db.find(el => el.state == userInput);
      
        if(senator){
          let yourSenators=[];
          senator["data"].forEach(element => {
            yourSenators.push('*Name:* '+ element.name +' *Phone:* ' + element.phone + ' *Email:* ' + element.email)
          })
          yourSenators = yourSenators.toString().split(',');
          yourSenators = yourSenators.join(',\n');
          
          twiml.message('Meet Your Senators:\n '+ yourSenators);
          res.set('Content-Type', 'text/xml');
        }else{
          twiml.message('I no understand o! 😕. Do you need the instructions again? Type \'Mad o\'');
        res.set('Content-Type', 'text/xml');
        }
      }

      return res.status(200).send(twiml.toString());
      
      
       /** if(userInput =='Hi'){
            twiml.message(`I dey work o. Oyaa gbefun!`);
            res.set('Content-Type', 'text/xml');

            return res.status(200).send(twiml.toString());  
       }
        else{
            twiml.message(`Mad o! I no even understand you sef.`)
            res.set('Content-Type', 'text/xml');

            return res.status(200).send(twiml.toString());  
        }  */
      }     
  }
  export default MadBot;