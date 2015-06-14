Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY [at] h:mm a');
});

Template.registerHelper('log', function(data) {
  console.log(data);
});