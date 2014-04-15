(function ($) {
  $(document).ready(function () {


    $('.test1').on('click', function () {
      $.when($.ajax('http://localhost:3030/user?username=Billy&password=Fish'))
          .then(function (data) {
              console.log(data.response);
              $('.result1').append('<p>Api Key: ' + data.response + '</p>');
              $.when($.ajax('http://localhost:3030/product?id=10&key=' + data.response + ''))
                  .done(function (data) {
                      console.log(data.response);
                      $('.result1').append('<p>Resource request: ' + data.response + '</p>');
                    })
                  .fail(function (data) {
                      console.log(data.response);
                      $('.result1').append('<p>Resource request: ' + data.response + '</p>');
                    });
            });
    });


    $('.test2').on('click', function () {
      $.when($.ajax('http://localhost:3030/user?username=Billy'))
          .then(function (data) {
              console.log(data.response);
              $('.result2').append('<p>Api Key: ' + data.response + '</p>');
              $.when($.ajax('http://localhost:3030/product?id=10&key=null'))
                  .done(function (data) {
                      console.log(data.response);
                      $('.result2').append('<p>Resource request: ' + data.response + '</p>');
                    })
                  .fail(function (data) {
                      console.log(data.response);
                      $('.result2').append('<p>Resource request: ' + data.response + '</p>');
                    });
            });
    });

  });
})(jQuery);
