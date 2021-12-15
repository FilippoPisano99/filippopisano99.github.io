
var Navbar = Vue.component('Navbar',{
	template:`
		<div class='NavBar'>
			<NavbarItem v-for="NavItem in navbar_items" :item="NavItem" ></NavbarItem>
		</div>
	`,

	data(){
		return {
			navbar_items:[
				{
					icon:'home',
					url:'/'
				},
				{
					icon:'share',
					url:'/FastFileShare/fastfileshare.html'
				},
				{
					icon:'tv',
					url:'/serietv/'
				},
				{
					icon:'account_balance_wallet',
					url:'https://g93fb50e595cd1f-db26hbu.adb.eu-milan-1.oraclecloudapps.com/ords/r/dev/wallet'
				}
			]
		};
	}

});
var NavbarItem = Vue.component('NavbarItem',{
	template:`
		<a :href="item.url" class='NabBarItem' >
			<i class="material-icons">{{item.icon}}</i>
		</a>
	`,
	props:['item']
});

var Cardlist = Vue.component('Cardlist',{
	template:`
		<div class="content">
			<Carditem v-for='card in cards' :item="card" ></Carditem>
		</div>
	`,
	data(){
		return{
			cards:[{
				title:'Ciao',
				img:'/img/batman.gif',
				content:'rem ipsum dolor sit amet consectetur adipisicing'
			}]
		};
	}
})

var CardItem = Vue.component('Carditem',{
	template:`
		<div class='cardItem'>
			<div class="cardTitle">
				{{item.title}}
			</div>
			<div class="cardContent">
				<img class="cardIcon" :src="item.img">
				{{item.content}}
			</div>
		</div>
	`,
	props:['item']

});


var app = new Vue({
	el: '#app'
})
