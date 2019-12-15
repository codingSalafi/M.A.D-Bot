# M.A.D Bot
Make A Difference (M.A.D) Bot is a WhatsApp Bot that allows anyone to be able to contact their representatives in the senate(i.e senators). When you wish to contact your senators just ask M.A.D Bot.

M.A.D Bot is live! To get started:
1. Simply add this phone number to your WhatsApp Contact : +1 415 523 8886
2. Save it as M.A.D Bot
3. Type 'join faster-husband' to hook up with the chat bot
4. Type 'Mad o' to get started.
5. Hooray! Your senators' contacts now at your beck and call.
### Disclaimer: All actions taken by user(s) with this bot is solely their (the user's) responsibility.

NB: This bot operates on the Twilio sandbox version of the Whatsapp Bot, so if you experience any hiccups, I apologize.

## Developer Usage
- Clone the repo
- cd into the folder
- `npm install`
- Install ngrok
- Signup/Login to Twilio https://www.twilio.com/
- Create Project (Programmable SMS)
- Copy and paste the SID and KEY into the .env file
- Run `npm start` in terminal
- Start ngrok `ngrok http 8080` in terminal
- Copy the ngrok hosting url
- Hook up your phone with the bot here https://www.twilio.com/console/sms/whatsapp/learn
- Go to the WhatsApp Sandbox section in your Twilio project https://www.twilio.com/console/sms/whatsapp/sandbox
- Paste 'your_ngrok_url/api/madbot/incoming' into the box 'when a message comes in' and save
 
Now you have it all setup!


## Special Credit
Though this is just a simple and basic Whatsapp bot, I'ld still like to appreciate
- Prosper Otemuyiwa (Twitter:@unicodeveloper) for inspiring this with his tweet. https://twitter.com/unicodeveloper/status/1198112247207383041
- @VillageParrot (Twitter) for making available to us the contact details
- Adjogbe Tejiri (@TejiriAdjogbe) for making it easy to use the contacts as he helped convert to JSON.
- Michael Ekpang for his amazing tutorial which gave me the best intro to the Twilio-Whatsapp Bot. https://medium.com/the-andela-way/build-a-whatsapp-bot-in-10-minutes-using-node-js-and-twilio-9869b443bf5e

### If you would like to hit me up on this, I am CodingSalafi @codingSalafi(Twitter), imudathir4@gmail.com (Mail)


