function boot() 
{
	var config = {
		apiKey: "AIzaSyDSr-4s5CaN67Y_uwLzTEy6Bgcp9W_Gkc8",
		authDomain: "fastfileshare-a1d9a.firebaseapp.com",
		databaseURL: "https://fastfileshare-a1d9a.firebaseio.com",
		projectId: "fastfileshare-a1d9a",
		storageBucket: "fastfileshare-a1d9a.appspot.com",
		messagingSenderId: "1047709308783"
	};
	firebase.initializeApp(config);
}


function setB64Img(file) 
{
	var out="NULLA";
	var reader = new FileReader();

	reader.addEventListener("load",function (e) {
		document.getElementById('image').src = event.target.result;
	});
	reader.readAsDataURL( file );
}

function getRandomKey() {
	return Math.random().toString(36).substring(3);
}

