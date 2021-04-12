<template>
   <div class="date-range-select">
      <date-buttons class="date-range-select__date-buttons-top" @input="on_button_input"></date-buttons>

      <div class="date-range-select__row">
         <div class="date-range-select__date date-range-select__date-start">
               <vuejs-datepicker class="date-range-select__datepicker" 
                  :inline="true" :value="date_start" @input="on_input_start"
                  autocomplete="off" format="MM-dd-yyyy"></vuejs-datepicker>

               <div class="text-muted">
                  From: {{date_start_formatted}}
               </div>
         </div>

         <div class="date-range-select__date date-range-select__date-end">
               <vuejs-datepicker class="date-range-select__datepicker"
                  :inline="true" :value="date_end" @input="on_input_end"
                  autocomplete="off" format="MM-dd-yyyy"></vuejs-datepicker>

               <div class="text-muted">
                  To: {{date_end_formatted}}
               </div>
         </div>

         <date-buttons class="date-range-select__date-buttons-bottom"  @input="on_button_input"></date-buttons>

      </div>

      <div class="date-range-select__submit-row">
         <button class="btn btn-light" @click="on_cancel_click">
            Cancel
         </button>
         <button class="btn btn-primary" @click="on_submit_click">
            Submit
         </button>
      </div>

   </div>
</template>

<script>
'use strict';
import vuejsDatepicker from 'vuejs-datepicker';
import DateButtons from './date-buttons';
import util from './util';

export default {
   props: {
      date_end: {
         type: Date,
         default: function(){ return new Date() },
      },
      date_start: {
         type: Date,
         default: function(){ return new Date() },
      },
   },// /props{}

   components: {
      vuejsDatepicker,
      DateButtons
   },// /components{}

   data(){
      return {
      };
   },// /data()

   computed: {
      date_start_formatted(){
         return util.format_date( this.date_start );
      },// /date_start_formatted()

      date_end_formatted(){
         return util.format_date( this.date_end );
      },// /date_end_formatted()
   },// /computed()

   methods:{
      on_button_input( o_input ){
         this.$emit( 'submit', {
            end: o_input.end,
            start: o_input.start,
         } );
      },// /on_button_input()

      on_input_end( o_date_end ){
         this.$emit( 'change', {
            end: o_date_end,
            start: this.date_start,
         } );
         this.$emit( 'change-end', o_date_end );
      },// /on_input_end()

      on_input_start( o_date_start ){
         this.$emit( 'change', {
            end: this.date_end,
            start: o_date_start,
         } );
         this.$emit( 'change-start', o_date_start );
      },// /on_input_start()

      on_submit_click(){
         this.$emit( 'submit', {
            end: this.date_end,
            start: this.date_start,
         } );
      },// /on_submit_click()

      on_cancel_click(){
         this.$emit( 'cancel' );
      },// /on_cancel_click()
   },// /methods{}
};
</script>

<style scoped>
.date-range-select
{
   padding-bottom: 5em;
}

.date-range-select__date
{
   margin-bottom: 2em;
}

.date-range-select__date-buttons-top
{
   display: block;
   margin-bottom: 2em;
}


.date-range-select__submit-row .btn
{
   display: block;
   width: 10em;
   margin: auto;
   margin-bottom: 1em;
}

.date-range-select__datepicker
{
   margin: auto;
   display: inline-block;
}

.date-range-select__row
{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 1em;
}


.date-range-select .btn-light
{
   border: 1px solid #cccccc;
}

/* .date-range-select
.date-range-select *
{
   background-color: #cccccc;
   opacity: 0.8;
} */

/* Small only */
@media screen and (max-width: 767px)
{
   .date-range-select__date-buttons-bottom
   {
      display: none;
   }
}

/* Medium and up */
@media screen and (min-width: 768px) 
{
   .date-range-select
   {
      max-width: 52em;
   }

   .date-range-select__row
   {
      flex-direction: row;
      align-items: flex-start;
   }

   .date-range-select__date-buttons-top
   {
      display: none;
   }

   .date-range-select__date-buttons-bottom
   {
      height: 19.5em;
      overflow: hidden;
   }
   
   .date-range-select__submit-row
   {
      display: flex;
      justify-content: space-between;
   }

   .date-range-select__submit-row .btn
   {
      display: initial;
      width: 11em;
      margin: initial;
   }

   .date-range-select__date
   {
      margin-bottom: 0;
   }

}

/* Medium only */
/*@media screen and (min-width: 768px) and (max-width: 991px) {}*/

/* Large and up */
/*@media screen and (min-width: 992px) {}*/

/* Large only */
/*@media screen and (min-width: 992px) and (max-width: 1199px) {}*/

/* X-Large and up */
/*@media screen and (min-width: 1200px) {}*/

</style>
