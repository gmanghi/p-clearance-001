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
			var table = "<table class='table table-bordered'>";
			table += "<th>ID</th>";
			table += "<th>VERSION</th>";
			table += "<th>ENTITY_ID</th>";
			table += "<th>FNAME</th>";
			table += "<th>LNAME</th>";
			table += "<th>MNAME</th>";
			table += "<th>FULLNAME</th>";
			table += "<th>SUFIX</th>";
			table += "<th>SEX</th>";
			table += "<th>ALIAS</th>";
			table += "<th>CITIZENSHIP</th>";
			table += "<th>CIVILSTATUS</th>";
			table += "<th>RELIGION</th>";
			table += "<th>OCCUPATION</th>";
			$.each(result, function(a,b){
				table += "<tr>";
				table += "<td>"+b.attributes['ID']+"</td>";
				table += "<td>"+b.attributes['VERSION']+"</td>";
				table += "<td>"+b.attributes['ENTITY_ID']+"</td>";
				table += "<td>"+b.attributes['FNAME']+"</td>";
				table += "<td>"+b.attributes['LNAME']+"</td>";
				table += "<td>"+b.attributes['MNAME']+"</td>";
				table += "<td>"+b.attributes['FULLNAME']+"</td>";
				table += "<td>"+b.attributes['SUFIX']+"</td>";
				table += "<td>"+b.attributes['SEX']+"</td>";
				table += "<td>"+b.attributes['ALIAS']+"</td>";
				table += "<td>"+b.attributes['CITIZENSHIP']+"</td>";
				table += "<td>"+b.attributes['CIVILSTATUS']+"</td>";
				table += "<td>"+b.attributes['RELIGION']+"</td>";
				table += "<td>"+b.attributes['OCCUPATION']+"</td>";
				table += "</tr>";
			});
			table += "</table>";
			$("#emaya_person").html(table);
			
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
	var EMAYA_PERSON_PICTURE = Parse.Object.extend("EMAYA_PERSON_PICTURE");
	var query = new Parse.Query(EMAYA_PERSON_PICTURE);
	query.find({
		success: function(result) {
			var table = "<table class='table table-bordered'>";
			table += "<th>ID</th>";
			table += "<th>PERSON_ID</th>";
			table += "<th>PICTURE</th>";
			table += "<th>PERSON_CODE</th>";
			$.each(result, function(a,b){
				table += "<tr>";
				table += "<td>"+b.attributes['ID']+"</td>";
				table += "<td>"+b.attributes['PERSON_ID']+"</td>";
				table += "<td><img src='"+b.attributes['PICTURE']+"' style='width:250px;'/></td>";
				table += "<td>"+b.attributes['PERSON_CODE']+"</td>";
				table += "</tr>";
			});
			table += "</table>";
			$("#emaya_person_picture").html(table);
			
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