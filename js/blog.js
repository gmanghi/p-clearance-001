$(function() {
	
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("buWMcHVkpXrUcQ8LlyY8t4nTQxaHLY10w97A09bH", "2hhbkfu8YDfOexCcY7g79rEg0QCvv0uNm1b6dl2q"); // p-clearance-001
	/*
    var TestObject = Parse.Object.extend("Person");
    var testObject = new TestObject();
    testObject.save({FNAME: "glenn"}).then(function(object) {
		alert("yay! it worked");
    });
	*/
	
	
	Parse.Cloud.run('createPerson', {
			FNAME: "Glenn",
			LNAME: "Manghi"
		}, 
		{
		success: function(result) {
			// result is 'Hello world!'
		},
		error: function(error) {
		
		}
	});
	
});