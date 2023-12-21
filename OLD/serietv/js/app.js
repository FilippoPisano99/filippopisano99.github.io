$(document).ready(function(){
	$("#loginBox").hide();
	$("#addBox").hide();
	$("#logBox").hide();
	$("#sideBar").hide();
	boot();
	startAuthListener();

	$("#loginBtn").on("click",function () {
		login($("#emailIn").val() , $("#passwordIn").val());
	});
	$("#exitImg").on("click",function () {
		logout();
	});

	$("#signinBtn").on("click",function () {
		signin($("#emailIn").val() , $("#passwordIn").val());
	});
	$("#addtvBtn").on("click",function () {
		$("#addBox").slideToggle("fast");
	});

	$("#settingsImg, #settingsImgSideBar").on('click', function() {
		$("#sideBar").slideToggle("fast");
	});

	$("#posttv").on('click', function() {
		nome= $("#nometvIn").val()
		st 	= $("#sttvIn").val()
		ep 	= $("#eptvIn").val()
		url = $("#imgtvIn").val()
		addtv(nome,st,ep,url);
	});

	$("#avatarImg").on("click",function () {
		$("#loginBox").slideToggle("fast");
	});
	$("#imgtvIn").focusout(function() {
		$("#sampleTvImg").attr('src', $("#imgtvIn").val());
	});

});