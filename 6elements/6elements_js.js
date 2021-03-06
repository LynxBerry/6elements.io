Vue.component('elements6',{
	template: '<div id="elements6" class="d-inline-block align-top"><div class="mybox" style="background-color:rgb(0,105,181);"></div><div class="mybox" style="background-color:rgb(120,34,120);"></div><div class="mybox" style="background-color:rgb(254,105,53);"></div><div class="mybox" style="background-color:rgb(164,85,34);" ></div><div class="mybox" style="background-color:rgb(255,208,65);"></div><div class="mybox" style="background-color:rgb(252,0,45);"></div></div>'
	}

);

//Register a component
//Have to register before root instance
//It is registered globally, so it can be used across all the root instances
Vue.component('my-menubar', {
	props:['menuitems','lang'],
	template: '<div id="menubar"><my-menuitem v-for="menuitem in menuitems" v-bind:menuitem="menuitem[lang]" v-bind:key="menuitem.id"></my-menuitem></div>',
	components:{
		'my-menuitem':{
			props: ['menuitem'],
			template: '<div class="menuitem"> {{menuitem}} </div>'
		}
	}
});

Vue.component('main-section',{
    props:['bgPic','mainMsg'],
    template: '<div id="mainsection"><slot>main section</slot></div>'

});


//Root instance
//Data flow in from root down to children
var app = new Vue({
	el: '#app',
	data: {
        message2: "This is a relatively short message. I show I am here.",
        message3: "This is statement. This is statement. This is statement.",
        message4: "more messages, more messages, more messages, more messages, more messages, more messages,more messages, more messages, more messages",
        titleMessage3: "THIS IS A TITLE",
        footmessage: "\u00A9 2017 6elements Management",
		payload:{},
		lang:"zh"
	},

    created: function(){
        console.log("tracer:root component created."); //tracer

        this.fetchData();


    },

    methods:{
        fetchData: function(){
            // bind this
            var _this = this;
            axios.get('/6elements/6elements_data.json').then(function (response){
                console.log("tracer:data fetched"); //tracer
                _this.payload = response.data ;
            }).catch(function(error){
                console.log(error);
            })
        },
				changeLang: function(mylang) {
					this.lang = (this.lang === "en")? "zh" : "en";
					console.log("invoked");
					//this.lang = mylang;
				}
			}

});
