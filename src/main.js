'use strict';

import Vue from 'vue';
import Main from './Main.vue';


class PluginStore {

   constructor (data = {}) {
      this.storeVM = Vue.observable(data);
   }
   
   get state () {
      return this.storeVM;
   }
}// /PluginStore()


const VueBootstrapDateRangeSelect = {

   install: function( Vue, options ){
      const o_settings = Object.assign( {
         tag_name: 'vue-bootstrap-date-range-select',
      }, options );

      Vue.component( o_settings.tag_name, Main );
      Vue.mixin({
         beforeCreate(){
            // Provide access to the plugin data.
            this.$date_range_select_store = new PluginStore({
               date_end: new Date(),
               date_start: new Date(),
               name: Math.floor( Math.random() * 1000000 ),
            });
         },// /beforeCreate()

         computed: {
            date_range_select_state (){
               return this.$date_range_select_store.state;
            },// /date_range_select_state()
         },// /computed()

         methods: {
            date_range_select_set_end( o_date ){
               this.$date_range_select_store.state.date_end = new Date( o_date );
            },// /date_range_select_set_end()

            date_range_select_set_start( o_date ){
               this.$date_range_select_store.state.date_start = new Date( o_date );
            },// /date_range_select_set_start()
         },// /methods{}
      });
      
   },// /install()

};// /VueBootstrapDateRangeSelect{}

export default VueBootstrapDateRangeSelect;
