$(function(){
  $("#home").attr("href", "index.html");
});
$(function(){
  $("#aboutus").attr("href", "ABOUT.html");
});
$(function(){
  $("#surveyform").attr("href", "SURVEY.html");
});
$(function(){
  $("#articles").attr("href", "ARTICLES.html");
});
$(function(){
  $("#h_hyperlink").attr("href", "ARTICLES.html");
});
$(function(){
  $("#one").attr("href", "https://turcomat.org/index.php/turkbilmat/article/view/4194/3587");
});
$(function(){
  $("#two").attr("href", "https://www.academia.edu/40731076/THE_NEGATIVE_EFFECT_OF_SLEEP_DEPRIVATION?from=cover_page");
});
$(function(){
  $("#three").attr("href", "https://madridge.org/journal-of-nursing/mjn-1000103.php");
});
$(function(){
  $("#four").attr("href", "https://onlinelibrary.wiley.com/doi/abs/10.1111/josh.12379");
});
$(function(){
  $("#five").attr("href", "https://doi.org/10.1186/s12912-021-00635-x");
});
$(function(){
  $("#six").attr("href", "https://www.nature.com/articles/s41539-019-0055-z");
});
$(function(){
  $("#navlogo").attr("href", "index.html");
});
var imgArrays = ["pics1.jpeg", "pics2.jpeg", "pics3.jpeg", "pics4.jpeg", "pics5.png"]
  var index = 0;
  function change() {
    document.getElementById("pics").src = imgArrays[index];
    if(index == 4){
      index = 0;
    }else{
      index++;
    }
    setTimeout(change, 2000)
  }
  window.onload = change();
