
var loaded = false;
chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.executeScript(null, { file: "lib8balls.min.js" }, function() {
          loaded = true;
          chrome.tabs.executeScript({code: 'controller.buyDoge();'});
      });
});
