var ajaxhelper = function(type, url, callback, errorCallback) {
  if(type === 'get') {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      var data = JSON.parse(request.responseText);
      if (request.status >= 200 && request.status < 400) {
        // Success!
        callback(data);
      } else {
        // We reached our target server, but it returned an error
        errorCallback(data.error)
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }
}

module.exports = ajaxhelper;
