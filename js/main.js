var $quoteUrl = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?    method=getQuote&lang=en&format=jsonp&jsonp=?",
  $quote, $author,
  $getQuote = function() {
    $.ajax({
      url: $quoteUrl,
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {

        if (data.quoteAuthor === "") {
          $author = $("#author").text(data.quoteAuthor = "Unknown");
        }
        $tweetUrl = "https://twitter.com/intent/tweet?text='" + data.quoteText + "' " + data.quoteAuthor;

        $(".twitter-share-button").attr("href", $tweetUrl);

        $quote = $("#quote").text(data.quoteText);
        $author = $("#author").text(data.quoteAuthor);

        $('#random-quote').append($quote).append($author);

      }

    });
  };

$(document).ready(function() {
  $.getJSON($quoteUrl, $getQuote, "jsonp");

  $("#random-button").on("click", function() {
    $.getJSON($quoteUrl, $getQuote, "jsonp");
  });

  $('#quote,#author').addClass("animated zoomIn");
  /*
  $( "#quote".before( '" ');
  $( "#quote".after( ' "');
  */

});
