

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $(".dropdown-button").dropdown({hover: true, belowOrigin: true, constrainWidth: false});
    $('ul.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//Algolia Search Init
var search = instantsearch({
   appId: '2B9RC67QYJ',
   apiKey: '88450a0a5df5d1f6e7da2db0a56c70a5', // search only API key, no ADMIN key
   indexName: 'dev_masters',
   urlSync: true,
   searchParameters: {
     hitsPerPage: 10
  },
  searchFunction: function(helper) {
    var hits = $('.search-results');
    if (helper.state.query === '') {
      $('.search-results').hide();
      return;
    }
    helper.search();
    $('.search-results').show();
  },

});

// search.addWidget(
//  instantsearch.widgets.searchBox({
//    container: '#search-box',
//    cssClasses: {
//      input: 'browser-default'
//    }
//  })
// );

search.addWidget({
  init: function(opts) {
    const helper = opts.helper;
    const input = document.querySelector('#search-box');
    input.addEventListener('input', function(e) {
      helper.setQuery(e.currentTarget.value) // update the parameters
            .search(); // launch the query
    });
  }
});

search.addWidget(
 instantsearch.widgets.hits({
   container: '#hits',
   templates: {
     item: document.getElementById('hit-template').innerHTML,
     empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
   }
 })
);

search.addWidget(
 instantsearch.widgets.pagination({
   container: '#pagination'
 })
);

search.start();
