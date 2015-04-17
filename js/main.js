$(function() {
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("buWMcHVkpXrUcQ8LlyY8t4nTQxaHLY10w97A09bH", "2hhbkfu8YDfOexCcY7g79rEg0QCvv0uNm1b6dl2q"); // p-clearance-001
	current = Parse.User.current();
	if(!current){
		window.open("login.html","_self");
	}
	$("#username").html(current.attributes.username);
	console.log(current);
});

function code_generator(){
	code =  Math.floor(Math.random() * 26) + Date.now();

	return code.toString();
}

$('#logout').click(function(){
	Parse.User.logOut();
	window.open("login.html","_self");
});

$('#btnStep1').click(function(){
	var EMAYA_PERSON = Parse.Object.extend("EMAYA_PERSON");
    var emaya_person = new EMAYA_PERSON();
	person_code = code_generator();
    emaya_person.set("ID",1);
    emaya_person.set("VERSION",1);
    emaya_person.set("ENTITY_ID",1);
    emaya_person.set("FNAME",$("#fname").val());
    emaya_person.set("LNAME",$("#lname").val());
    emaya_person.set("MNAME",$("#mname").val());
    emaya_person.set("FULLNAME",$("#fname").val() + ' ' + $("#mname").val() + ' ' + $("#lname").val());
    emaya_person.set("SUFIX",$("#sufix").val());
    emaya_person.set("SEX",$("#sex").val());
    emaya_person.set("ALIAS",$("#alias").val());
    emaya_person.set("CITIZENSHIP",$("#citizenship").val());
    emaya_person.set("CIVILSTATUS",$("#civilstatus").val());
    emaya_person.set("RELIGION",$("#religion").val());
    emaya_person.set("OCCUPATION",$("#occupation").val());
    emaya_person.set("BIRTHDATE",$("#birtdate").val());
    emaya_person.set("BIRTHPLACE",$("#birthplace").val());
    emaya_person.set("WEIGHT",parseInt($("#weight").val()));
    emaya_person.set("HEIGHT",parseInt($("#height").val()));
    emaya_person.set("CODE",person_code);
    emaya_person.set("PHONENO",$("#phoneno").val());
  
    emaya_person.save(null,{
        success:function(emaya_person) { 
            console.log(emaya_person);
			insertEmayaPoliceClearance(emaya_person.id,person_code);
			window.open('step2.html',"_self");
        },
        error:function(error) {
            alert('Error in inserting data to EMAYA_PERSON ' + error);
        }
	});
});

function insertEmayaPoliceClearance(person_id,person_code){
	var EMAYA_POLICE_CLEARANCE = Parse.Object.extend("EMAYA_POLICE_CLEARANCE");
    var emaya_police_clearance = new EMAYA_POLICE_CLEARANCE();
	police_clearance_code = code_generator();
    emaya_police_clearance.set("ID",1);
    emaya_police_clearance.set("VERSION",1);
    emaya_police_clearance.set("ISSUEDATE",new Date());
    emaya_police_clearance.set("ENTITY_ID",1);
    emaya_police_clearance.set("PURPOSE",$("#purpose").val());
    emaya_police_clearance.set("FINDINGS","");
    emaya_police_clearance.set("PERSON_ID",person_id);
    emaya_police_clearance.set("FULLNAME",$("#fname").val() + ' ' + $("#mname").val() + ' ' + $("#lname").val());
    emaya_police_clearance.set("POL_CLRAPP_ID",1);
    emaya_police_clearance.set("APPROVED_BY",1);
    emaya_police_clearance.set("PREPARED_BY",1);
    emaya_police_clearance.set("CERTIFIED_BY",1);
    emaya_police_clearance.set("MOD_STAMP","");
    emaya_police_clearance.set("PERSON_CODE",person_code);
    emaya_police_clearance.set("APPROVED_BY_CODE","");
    emaya_police_clearance.set("PREPARED_BY_CODE","");
    emaya_police_clearance.set("CERTIFIED_BY_CODE","");
    emaya_police_clearance.set("CODE",police_clearance_code);
    emaya_police_clearance.set("ORNOS",$("#ornos").val());
    emaya_police_clearance.set("ORDATE",new Date());
  
    emaya_police_clearance.save(null,{
        success:function(emaya_police_clearance) { 
            console.log(emaya_police_clearance);
			pol_clrapp_id = insertPolClearApplication(person_id,emaya_police_clearance.id,person_code,police_clearance_code);
			alert(pol_clrapp_id);
			emaya_police_clearance.set("POL_CLRAPP_ID",pol_clrapp_id);
			emaya_police_clearance.save(null, {
				success:function(){
					console.log(emaya_police_clearance);
					return;
				},
				error:function(error){
					alert('Error in updating the POL_CLRAPP_ID ' + error);
				}
			});
        },
        error:function(error) {
            alert('Error in inserting data to EMAYA_POLICE_CLEARANCE ' + error);
        }
	});
}

function insertPolClearApplication(person_id,police_clr_id,person_code,pol_clr_code){
	var EMAYA_POLCLEAR_APPLICATION = Parse.Object.extend("EMAYA_POLCLEAR_APPLICATION");
    var emaya_polclear_application = new EMAYA_POLCLEAR_APPLICATION();
	polclear_application_code = code_generator();
    emaya_polclear_application.set("ID",1);
    emaya_polclear_application.set("VERSION",1);
    emaya_polclear_application.set("APPDATE",new Date());
    emaya_polclear_application.set("ENTITY_ID",1);
    emaya_polclear_application.set("PERSON_ID",person_id);
    emaya_polclear_application.set("STATUS_ID",1);
    emaya_polclear_application.set("POLICE_CLR_ID",police_clr_id);
    emaya_polclear_application.set("PREPARED_BY",1);
	emaya_polclear_application.set("MOD_STAMP",new Date());
    emaya_polclear_application.set("PERSON_CODE",person_code);
    emaya_polclear_application.set("POL_CLR_CODE",pol_clr_code);
    emaya_polclear_application.set("PREPARE_BY_NAME","");
    emaya_polclear_application.set("PREPARE_BY_CODE","");
    emaya_polclear_application.set("CODE",polclear_application_code);
    emaya_polclear_application.set("CREATE_STAMP",new Date());
    emaya_polclear_application.set("ORNOS",$("#ornos").val());
    emaya_polclear_application.set("ORDATE",new Date());
  
    emaya_polclear_application.save(null,{
        success:function(emaya_polclear_application) { 
            console.log(emaya_polclear_application);
			return emaya_polclear_application.id;
        },
        error:function(error) {
            alert('Error in inserting data to EMAYA_POLCLEAR_APPLICATION ' + error);
        }
	});
}