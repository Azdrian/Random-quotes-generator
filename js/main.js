/* 
  *Author: U'el Azdrian small
  *Date: Copyright, November 3rd 2016
  *File Name: Main.css
  *Website: https://azdrian.github.io/Random-quotes-machine/

*/
$(document).ready(function() {
// Declare viariables
var $quoteUrl = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    $quote,
    $author;

// make a request to the foristmatic API for random quotes and display it on the page
var $getQuote = function() {
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

   //Request  quote when page is loaded
  $.getJSON($quoteUrl, $getQuote, "jsonp");
  
  //Get a random quote when button is click
  $("#random-button").on("click", function() {
    $.getJSON($quoteUrl, $getQuote, "jsonp");
  });

  //Add class for zoom in effect when a quote is requested upon clicking the random button
  $('#quote,#author').addClass("animated zoomIn");
 

});
