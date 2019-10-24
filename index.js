var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
        document.getElementById("app").classList.toggle("bg-red-500");
        document.this.classList.toggle('active');
        // alert("Oh… lol");
        var person = {
          firstName: "John",
          lastName : "Doe",
          id     : 5566,
          fullName : function() {
            return this.firstName + " " + this.lastName;
          }
        };
      }
    }
});

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('music', {
  template:
})

new Vue({ el: '.components-demo' })