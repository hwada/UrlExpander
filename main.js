(function(){
  var href = encodeURI(location.href);
  chrome.extension.sendRequest(href, function(data){
    location.href = data;
  });
})();


