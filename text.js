users.limitToLast(1).on('child_added', function(childSnapshot){
    user = childSnapshot.val();

    $("#firstName").html(user.firstName)
    $("#lastName").html(user.lastName)
    $("#email").html(user.email)
    $("#phone").html(user.phone)
    $("#license").html(user.license)

});



var accountSid ='{{AC355bbbd5431e7f69a73c32163563f1f5}}';
var authToken ='{{b932ab0663de9a4bc734fdfe0d03b98f}}';

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid,authToken);

client.messages.create({
    body: user.firstName + user.lastName + 'is route to Station ',
    to: station.number,
    from: user.phone,
}, function(err,message){
    console.log(message.sid);
});
