function boot() {
	var config = {
		apiKey: "AIzaSyAaGD5hoqeVflUsfBjF11DkJa3Pqq8Kw2U",
		authDomain: "serietv2-db766.firebaseapp.com",
		databaseURL: "https://serietv2-db766.firebaseio.com",
		projectId: "serietv2-db766",
		storageBucket: "serietv2-db766.appspot.com",
		messagingSenderId: "660215737420"
	};
	firebase.initializeApp(config);
}

function signin(em,pwd) {
	err = false;
	firebase.auth().createUserWithEmailAndPassword(em, pwd).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		errlog(errorCode +"<br/>" + errorMessage);
		err = true;
	}).then(function(user) {
		if(!err)
		{
			clearAllInputs();
			createNewUserRecord(user);
			$("#loginBox").slideToggle("fast");
		}
	});
}

function login(em,pwd) {
	err = false;
	firebase.auth().signInWithEmailAndPassword(em,pwd).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		errlog(errorCode +"<br/>" + errorMessage);
		err = true;
	}).then(function () {
		if(!err){
			clearAllInputs();
			$("#loginBox").slideToggle("fast");
		}
	});
}

function logout() {
	firebase.auth().signOut();
}

function startAuthListener () {
	firebase.auth().onAuthStateChanged(function(user) {
		log("###Auth Listener Triggered###");
		//Logged?
		if(user!=null)
		{
			$("#addtvBtn").show();
			log("email:" + user.email);
			log("uid:" + user.uid);
			startTvListener(user.uid);
		}
		else
		{
			$("#addtvBtn").hide();
			$("#postWall").empty();
			log("Not logged");
		}
		log("#############################");
	});
}

function createNewUserRecord(user) {
	firebase.database().ref("users/"+user.uid).set({
		email: user.email
	});
}

function addtv(nome,st,ep,url) {
	user = firebase.auth().currentUser;
	firebase.database().ref("users/"+user.uid+"/tv").push({
		nome: nome,
		st  : st,
		ep 	: ep,
		url : url
	}).then(function() {
		$("#addBox").slideToggle("fast");
		clearAllInputs();
	}, function(err) {
		var errorCode = err.code;
		var errorMessage = err.message;
		alert(errorCode +"<br/>" + errorMessage);
	});
}

function startTvListener(uid) {
	firebase.database().ref("users/"+uid+"/tv").on("value",function (data) 
	{
		$("#postWall").empty();
		$.each(data.val(),function(idx, e) {
			postOnWall(e);
		});
		
	})
}
function postOnWall(e) {
	html ='<div class="tvBox">';
	html +=('<img class="tvImg" src="'+e.url+'" onerror="this.src=\'http://img.theepochtimes.com/n3/eet-content/uploads/2016/03/15/androiddev101.jpg\'">');
	html +=('<h1>'+e.nome+'</h1>');
	html +=('<p>Stagione: <br/>'+e.st+'</p>');
	html +=('<p>Episodio: <br/>'+e.ep+'</p>');
	html +=('</div>');

	$("#postWall").append(html);
}



function clearAllInputs() {
	$("#emailIn").val("")
	$("#passwordIn").val("")
	$("#nometvIn").val("")
	$("#sttvIn").val("")
	$("#eptvIn").val("")
	$("#imgtvIn").val("")
}

function log(text) {
	$("#log").append(text+"<br/>");
}
function errlog(text) {
	$("#log").append("<span style='color:red;'>"+text+"</span><br/>");
}
