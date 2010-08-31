(function(){
  chrome.extension.sendRequest(null, function(data){
    location.href = data;
  });
})();


