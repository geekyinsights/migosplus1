var accountSid ='AC355bbbd5431e7f69a73c32163563f1f5';
var authToken ='b932ab0663de9a4bc734fdfe0d03b98f';

var twilio = require('twilio')(accountSid,authToken);
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
