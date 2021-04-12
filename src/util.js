'use strict';

var util = {};

util.format_datetime = function( o_date ){
   const a_date = [
      ''.concat( o_date.getMonth()+1 ).padStart( 2, '0' ),
      ''.concat( o_date.getDate() ).padStart( 2, '0' ),
      ''.concat( o_date.getFullYear() ).padStart( 2, '0' )
   ];
   const a_time = [
      ''.concat( o_date.getHours() ).padStart( 2, '0' ),
      ''.concat( o_date.getMinutes() ).padStart( 2, '0' ),
      '00'
   ];
   return ''.concat( a_date.join( '/' ), ' ', a_time.join( ':' ) );
};// /format_datetime()

util.format_date = function( o_date ){
   var a_date = [
      ''.concat( o_date.getMonth()+1 ).padStart( 2, '0' ),
      ''.concat( o_date.getDate() ).padStart( 2, '0' ),
      ''.concat( o_date.getFullYear() ).padStart( 2, '0' )
   ];
   return ''.concat( a_date.join( '-' ) );
};// /format_date()

util.format_datetime_12 = function( o_date ){
   return ''.concat( util.format_date( o_date ), ' ', util.format_time_12( o_date ) );
};// /format_datetime_12()

util.format_time_12 = function( o_date ){
   const n_hours = o_date.getHours();
   const a_time = [
         ''.concat( util.hours_24_to_12( n_hours ) ).padStart( 2, '0' ),
         ''.concat( o_date.getMinutes() ).padStart( 2, '0' ),
         ''.concat( o_date.getSeconds() ).padStart( 2, '0' ),
   ];
   return ''.concat( a_time.join( ':' ), ' ',util.ampm( n_hours ) );
};// /format_datetime_12()

util.hours_24_to_12 = function( n_hours ){
   if( n_hours == 0 ){
      return 12;
   }

   if( n_hours > 12 ){
      return n_hours - 12;
   }

   return n_hours;
   };// /hours_24_to_12()

   util.ampm = function( n_hours ){
   if( n_hours >= 12 ){
      return 'pm';
   }

   return 'am';
};// /ampm()


util.object_pick = ( o_obj, a_keys ) => {
   var i, l, c_key, o_new = {};

   for( i = 0, l = a_keys.length; i < l; i++ ){
      c_key = a_keys[ i ];
      if( o_obj.hasOwnProperty( c_key ) ){
         o_new[ c_key ] = o_obj[ c_key ];
      }
   }// /for()

   return o_new;
};// /object_pick()
   
/**
 * 12-16-2014
 * This method tries to convert a string into an integer. If it fails we
 * return a default number.
 * ~~ Scott Johnson
 */
util.toInt = function( cString, nDefault ) {
   var n = parseInt( cString, 10 );
   
   nDefault = nDefault || 0;
   
   if ( isNaN( n ) ) {
      return nDefault;
   }
   
   return n;
};// /toInt()

// (###) ###-###
util.format_phone_local = function( c_phone ){
   var c_digits = ''.concat( c_phone ).replace(/\D/g, '');
   var a_match = c_digits.match(/^(\d{3})(\d{3})(\d{4})$/);

   if( !a_match ){
      return c_phone;
   }

   return ''.concat( a_match[1],'-', a_match[2],'-',a_match[3] );
};// /format_phone_local()


util.wait = function( n_ms ){
   return new Promise(function( resolve ){
      setTimeout( function(){
         resolve();
      }, n_ms );
   });
};// /wait()

export default util;