<template>
   <div class="date-range-select__date-buttons">
      
      <button class="btn btn-light btn-sm" type="button" @click="select_today">
         Today
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_yesterday">
         Yesterday
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_2_days_ago">
         2 days ago
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_week_2_date">
         Week to date
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_month_2_date">
         Month to date
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_last_week">
         Last week
      </button>
      
      <button class="btn btn-light btn-sm" type="button" @click="select_last_month">
         Last month
      </button>
   </div>

</template>

<script>
'use strict';

export default {
   props: {
      weekStartDay: {
         type: String,
         default: 'Monday',
         required: false,
         validator: function (value) {
            return [
            'Monday',
            'Sunday',
            ].indexOf(value) !== -1
         }// /validator()
      },// /weekStartDay{}
   },// /props{}

   methods: {
      select_today(){
         const date_start = new Date();
         const date_end = new Date( date_start );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_today()

      select_yesterday(){
         const date_start = new Date();
         const date_end = new Date( date_start );

         date_start.setDate( date_start.getDate() - 1 );
         date_end.setDate( date_end.getDate() - 1 );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_yesterday()

      select_2_days_ago(){
         const date_start = new Date();
         const date_end = new Date( date_start );

         date_start.setDate( date_start.getDate() - 2 );
         date_end.setDate( date_end.getDate() - 2 );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_2_days_ago()

      select_week_2_date(){
         const date_start = new Date();
         const date_end = new Date();
         var n_date_offset = date_start.getDay();

         if( n_date_offset > 0 ) {
            // Today is not Sunday
            n_date_offset--;
         }
         else {
            /**
             * 12-19-2011
             * Walt said he did not want this button to work like the original
             * resource picker. He wants the week begining on Monday.
             * ~~ 12-19-2011
             */
            switch( this.week_start_day ){
            case 'Monday':
               n_date_offset = 6;
               break;

            case 'Sunday':
               n_date_offset = 7;
               break;

            default:
               throw new Error( `Invalid week_start_day "${this.week_start_day}".`);
            }// /switch()
         }// /if()
         
         date_start.setDate( date_start.getDate()-n_date_offset );

         this.$emit( 'input', {
            start: date_start,
            end: date_end,
         });
      },// /select_week_2_date()

      select_month_2_date(){
         const date_start = new Date();
         const date_end = new Date( date_start );
         
         date_start.setDate( 1 );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_month_2_date()

      select_last_week(){
         const date_start = new Date();
         const date_end = new Date( date_start );

         const n_date_offset = date_start.getDay();
         
         // First set start date to Monday of this week.
         date_start.setDate( date_start.getDate() - n_date_offset );
         
         // Then set start date to Monday of last week.
         date_start.setDate( date_start.getDate() - 6 );
         
         // Set end date to Monday of this week.
         date_end.setDate( date_end.getDate() - n_date_offset );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_last_week()

      select_last_month(){
         const date_start = new Date();
         const date_end = new Date( date_start );
         
         // First set start date to end of last month.
         date_start.setDate( 0 );
         
         // Then set start date to begining of last month.
         date_start.setDate( 1 );
         
         // Set end date to end of last month.
         date_end.setDate( 0 );

         this.$emit( 'input', {
            start: date_start,
            end: date_end
         });
      },// /select_last_month()
   },// /methods{}
};
</script>

<style scoped>

.date-range-select__date-buttons
{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: stretch;
   /* background-color: #ff0000; */
}

.date-range-select__date-buttons .btn
{
   display: block;
   width: 50%;
   margin: auto;
   margin-bottom: 0.77em;
}

.date-range-select__date-buttons .btn:last-child
{
   margin-bottom: 0;
}

.btn-light
{
   border: 1px solid #cccccc;
}

/* Small only */
/*@media screen and (min-width: 576px) {}*/

/* Medium and up */
@media screen and (min-width: 768px) 
{
   .date-range-select__date-buttons .btn
   {
      width: 11em;
      margin: 0;
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
