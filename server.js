server.jsvar searchParm = "baseball";
var beginDate = "20170101";
var endDate = "20170701";
var resultSize = 5;
var apikey = "bc62fd057f6f4a088aabe90959ae3750";
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + searchParm + "&page=0&sort=newest&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=" + apikey;
console.log(queryURL);
$(".strtBtn").on('click', function (){
$.ajax({
    url: queryURL,
    method: 'GET',
}).done(function(result) {
    for (var i = 0; i < resultSize; i++) {
        
    console.log(result);
    //title
    console.log(result.response.docs[i].headline.main);
    //byline
    console.log(result.response.docs[i].byline.original);
    //section
    console.log(result.response.docs[i].section_name);
    //date
    console.log(result.response.docs[i].pub_date);
    //link
    console.log(result.response.docs[i].web_url);
}
})
})