
Parse.initialize("WkMFpIGuB9xvuhlwUS8ib1XS6OeZ6erZceUaTcwy", "oMUymZTsCt1GzXBICCWtkpMuFNwnwzJpSW70NTm0");

$( "#invest-button" ).click(function() {
	$("#invest-button").hide();
	$(".request-form-div").show();
});

$(".request-submit").click(function(e) {
	e.preventDefault();
	var firstName = $(".fname").val();
	var lastName = $(".lname").val();
	var email = $(".email").val();

	console.log(firstName + ' ' + lastName + ' ' + email);

	var Requester = Parse.Object.extend("Requester");
	var requester = new Requester();

	requester.set('first_name', firstName);
	requester.set('last_name', lastName);
	requester.set('email', email);

	requester.save(null, {
	  success: function(requester) {
	    // Execute any logic that should take place after the object is saved.
	  },
	  error: function(requester, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and description.
	   alert('Failed to create new object, with error code: ' + error.description);
	  }
	});
	$(".request-form-div").hide();
	$(".invite-confirm-div").show();
});


