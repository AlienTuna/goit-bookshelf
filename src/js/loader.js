function showLoader() {
  var loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.style.display = 'flex';
  }
}

function hideLoader() {
  var loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.style.display = 'none';
  }
}

function interceptXHRRequests() {
  var originalOpen = XMLHttpRequest.prototype.open;
  var originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function () {
    var self = this;
    self.addEventListener('loadstart', function () {
      showLoader();
    });
    self.addEventListener('loadend', function () {
      hideLoader();
    });
    return originalOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function () {
    var self = this;
    self.addEventListener('loadstart', function () {
      showLoader();
    });
    self.addEventListener('loadend', function () {
      hideLoader();
    });
    return originalSend.apply(this, arguments);
  };
}

function interceptFetchRequests() {
  var originalFetch = window.fetch;

  window.fetch = function () {
    showLoader();
    return originalFetch
      .apply(this, arguments)
      .then(function (response) {
        hideLoader();
        return response;
      })
      .catch(function (error) {
        hideLoader();
        throw error;
      });
  };
}

interceptXHRRequests();
interceptFetchRequests();
