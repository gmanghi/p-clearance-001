$(function() {
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("buWMcHVkpXrUcQ8LlyY8t4nTQxaHLY10w97A09bH", "2hhbkfu8YDfOexCcY7g79rEg0QCvv0uNm1b6dl2q"); // p-clearance-001
	current = Parse.User.current();
	if(!current){
		window.open("login.html","_self");
	}
	$("#username").html(current.attributes.username);
	
	var EMAYA_PERSON = Parse.Object.extend("EMAYA_PERSON");
	var query = new Parse.Query(EMAYA_PERSON);
	query.find({
		success: function(result) {
			console.log(result)
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
});

$('#logout').click(function(){
	Parse.User.logOut();
	window.open("login.html","_self");
});