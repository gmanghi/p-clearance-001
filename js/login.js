$(function() {
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("buWMcHVkpXrUcQ8LlyY8t4nTQxaHLY10w97A09bH", "2hhbkfu8YDfOexCcY7g79rEg0QCvv0uNm1b6dl2q"); // p-clearance-001
	current = Parse.User.current();
	// if(current){
		// window.open('step1.html',"_self");
	// }
});

$('.form-signin').on('submit', function(e) {
    // Prevent Default Submit Event
    e.preventDefault();
	
    // Get data from the form and put them into variables
    var data = $(this).serializeArray();
	username = data[0].value;
	password = data[1].value;
	
	Parse.User.logIn(username,password,function(response){
		console.log(response);
		if(response){
			window.open('step1.html',"_self");
		}
		else{
			alert('Invalid Credentials');
		}
	});
	
	// Parse.Cloud.run('login', {
		// username: username,
		// password: password
	// }, 
	// {
		// success: function(result) {
			// alert('Welcome!');
			// // window.open("step1.html","_self");
		// },
		// error: function(error) {
			// console.log(error);
			// alert(error.message);
		// }
	// });
});