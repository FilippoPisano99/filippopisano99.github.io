
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
					url:'FastFileShare/fastfileshare.html'
				},
				{
					icon:'tv',
					url:'serietv/'
				},
				{
					icon:'face',
					url:'https://g93fb50e595cd1f-dbfil.adb.eu-milan-1.oraclecloudapps.com/ords/r/base/collectorhub'
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
				title:'Github',
				img:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec aliquam tellus, ut laoreet leo. Quisque nec accumsan nisl. Curabitur a erat at ipsum volutpat egestas. Sed ultricies augue quis felis varius accumsan. Mauris ullamcorper felis nisl, eget consequat diam tempus vel. Nullam cursus quam ut tortor bibendum, et consectetur tortor convallis. Aliquam bibendum urna sit amet urna congue gravida. Maecenas convallis placerat turpis, ut dictum massa efficitur quis. Praesent iaculis auctor risus, eget dapibus nulla. Sed luctus molestie ex eu feugiat. Phasellus a finibus risus.'
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
