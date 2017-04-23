
var accountSid ='AC4851e7938c2970194bcc3821db6ff655';
var authToken ='64d897277252702e1671cce391870663';

var twilio = require('twilio')

var client = new twilio.RestClient(accountSid,authToken);
var followTrip = function() {
client.messages.create({
    body: 'Mary Smith 555444333 is route to Station ',
    to: +17133576031,
    from: +16018963851,
}, function(err,message){
    console.log(message.sid);
});

$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#folTrip").submit(followTrip);

});

/*
// Download the twilio-csharp library from twilio.com/docs/libraries/csharp
using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using System.Collections.Generic;

class followTrip
{

   static void Main(string[] args)
   {
        // Find your Account Sid and Auth Token at twilio.com/console
        const string accountSid = "AC4851e7938c2970194bcc3821db6ff655";
        const string authToken = "b932ab0663de9a4bc734fdfe0d03b98f'";
        TwilioClient.Init(accountSid, authToken);

        var to = new PhoneNumber("+17133576031");
        var message = MessageResource.Create(
            to,
            from: new PhoneNumber("+16018963851"),
            body: "Mary Smith license: 555444333 is route to Station"
            );
        Console.WriteLine(message.Sid);
   }
}

$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#folTrip").submit(followTrip);

});

*/
