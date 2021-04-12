# vue-bootstrap-date-range-select
Vue plugin to make it easy to add a bootstrap styled date range picker for your project.

## Install
```shell
yarn add https://github.com/lucentminds/vue-bootstrap-date-range-select
```

or

```shell
npm install --save https://github.com/lucentminds/vue-bootstrap-date-range-select
```


## Useage
Import and use the plugin. Make sure the bootstrap css is included somewhere in your project too.
```js
// Import bootstrap css.
import 'bootstrap/dist/css/bootstrap.css';

// Import plugin.
import VueBootstrapDateRangeSelect from 'vue-bootstrap-date-range-select';

// Use plugin.
Vue.use(VueBootstrapDateRangeSelect);
```

Add the tag wherever you want to see the blocking notifications.
```html
<vue-bootstrap-date-range-select></vue-bootstrap-date-range-select>
```

Set the start or end date from your Vue component using the global function. 
```js
   this.date_range_select_set_start( new Date() );
   this.date_range_select_set_end( new Date() );
```

## Custom tag name

You do not have to use the full `vue-bootstrap-date-range-select` html tag name to make this work. Simply define your own tag name when you use the plugin like this...
```js
...

// Use plugin.
Vue.use(VueBootstrapDateRangeSelect,{
   tag_name: 'my-daterange-picker'
});
```

Now you can use your custom tag called `my-daterange-picker` like so...
```html
<my-daterange-picker></my-daterange-picker>
```

## Props

   ### `week-start-day` (optional)
   Defaults to `Monday`.
   ```html
   <vue-bootstrap-date-range-select week-start-day="Sunday"/>
   ```

## Events

   ### `@cancel`
   Triggered when the cancel button is clicked.
   ```html
   <vue-bootstrap-date-range-select @cancel="on_cancel"/>
   ...
   <script>
   ...   
   on_cancel(){
      console.log( 'No date selected.' );
   }
   </script>
   ```

   ### `@change-end`
   Triggered when as the end date is changed.
   ```html
   <vue-bootstrap-date-range-select @change-end="on_change_end"/>
   ...
   <script>
   ...   
   on_change_end( o_end_date ){
      console.log( 'The end date is now:', o_end_date );
   }
   </script>
   ```

   ### `@change-start`
   Triggered when as the start date is changed.
   ```html
   <vue-bootstrap-date-range-select @change-start="on_change_start"/>
   ...
   <script>
   ...   
   on_change_start( o_start_date ){
      console.log( 'The start date is now:', o_start_date );
   }
   </script>
   ```

   ### `@submit`
   Triggered when a full date range has been submitted.
   ```html
   <vue-bootstrap-date-range-select @submit="on_submit"/>
   ...
   <script>
   ...   
   on_submit( o_date_range ){
      console.log( 'The start date is:', o_date_range.start );
      console.log( 'The start end is:', o_date_range.end );
   }
   </script>
   ```
