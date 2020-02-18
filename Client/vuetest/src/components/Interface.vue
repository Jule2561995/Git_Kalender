<template>
  <div class="Interface">

  <b-container>
    <form>
      <h1>Geburtstagskalender</h1><br/>

  <!--  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">

      <template v-slot:first>
        <b-form-select-option :value="null" disabled>-- Select a month --</b-form-select-option>
      </template>

        <b-form-select-option value="A">Januar</b-form-select-option>
        <b-form-select-option value="B">Februar</b-form-select-option>
        <b-form-select-option value="C">März</b-form-select-option>
        <b-form-select-option value="D">April</b-form-select-option>
        <b-form-select-option value="E">Mai</b-form-select-option>
        <b-form-select-option value="F">Juni</b-form-select-option>
        <b-form-select-option value="G">Juli</b-form-select-option>
        <b-form-select-option value="H">August</b-form-select-option>
        <b-form-select-option value="I">September</b-form-select-option>
        <b-form-select-option value="J">Oktober</b-form-select-option>
        <b-form-select-option value="K">November</b-form-select-option>
        <b-form-select-option value="L">Dezember</b-form-select-option>
    </b-form-select>

    <div class="mt-3">Selected:{{ selected }}</div>
  </div> -->

<!--  <b-row class="justify-content-md-center">
            <b-col sm="3">
              <b-button type="button" name="button" variant="outline-primary" v-on:click="back">Back</b-button>
            </b-col>

            <b-col sm="3">
              <b-table>{{ year.month }}</b-table>
            </b-col>

            <b-col sm="3">
            <b-button type="button" name="button" variant="outline-primary" v-on:click="forward">Forward</b-button>
            </b-col>
  </b-row>

  <b-pagination-nav :year="year" use-router></b-pagination-nav> -->


      <br>

      <b-row class="justify-content-md-center">
        <!--    <b-table-lite striped hover :items="items"></b-table-lite> -->
      </b-row>
      <br>

      <b-row class="justify-content-md-center">
        <b-col sm="3">
            <b-form-input v-model="firstname" placeholder="Name"></b-form-input>
          <!--  <div class="mt-2">{{ text }}</div> -->
        </b-col>
        <b-col sm="3">
            <b-form-input v-model="birthday" placeholder="Datum" type='date'></b-form-input>
          <!--  <div class="mt-2">{{ text }}</div> -->
        </b-col>
      </b-row>
      <br>

      <b-row class="justify-content-md-center">
        <b-col sm="3">
            <b-button type="button" variant="outline-primary" v-on:click="add">Confirm</b-button>
        </b-col>
      </b-row>

    </form>
  </b-container>
  </div>
</template>


<script>
import io from "socket.io-client";
export default {

name: 'Interface',

data: function() {
  return {
    socket: io.connect("http://localhost:3000"), //in der Variable 'socket' wird die Verbindung zum localhost gespeichert.
    firstname:"",
    birthday:"",
  //  year:['Januar','Februar','März','April'

  //    {month: 'Januar'},
  //    {month: 'Februar'},
  //    {month: 'März'},
  //    {month: 'April'},
  //    {month: 'Mai'},
  //    {month: 'Juni'},
  //    {month: 'Juli'},
  //    {month: 'August'},
  //    {month: 'September'},
  //    {month: 'Oktober'},
  //    {month: 'November'},
  //    {month: 'Dezember'},
  //  ],

  //  output: this.year[this.counter],

  //  items:[
  //    {firstname: 'Jule', date:'25.06.1995'},
  //    {firstname: 'Lars', date:'01.10.1996'},
  //    {firstname: 'Melanie', date:'23.07.1987'},
  //    ],
    }
  },

 probs: {
   msg: String
 },

 methods:{
   add(){
    this.socket.emit('eintrag', this.firstname, this.birthday);
    this.firstname = "";
    this.birthday = "";
  },

   back(){
      this.counter --;
      if (this.counter < 0){
        this.counter = 11;
     }
   },

    forward(){
      this.counter ++;
      if (this.counter > 11) {
        this.counter = 0;
      }
    }
 }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
