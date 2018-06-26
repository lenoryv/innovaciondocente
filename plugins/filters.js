import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase());
Vue.filter('slice', (val, start, end) => val.slice(start, end) + '...');
Vue.filter('date', val => {
  var parts = val.split('-');
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  return mydate.toDateString();
});
