$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

// Display dimmer when hovering element with '.screen' class

$('.screen')
  .dimmer({
    on: 'hover'
  })
;

// Button

$('#book-studio').click(function() {
	window.open("http://m.me/newspayper.fr");
});

    $(function() {
        $('.datepicker').calendar({
          type: 'date',
          formatter: {
            date: function (date, settings) {
              if (!date) return '';
              var day = date.getDate();
              var month = date.getMonth() + 1;
              var year = date.getFullYear();
              return day + '/' + month + '/' + year;
            }
          }
        });

        $('.datepicker').calendar('set date', new Date(parseInt(publication.date_parution)));

    });


