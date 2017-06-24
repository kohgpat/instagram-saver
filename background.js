chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "main.js" });
});

chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
  var data = arg.data;

  chrome.downloads.download(
    { url: data.url, filename: data.filename, saveAs: false },
    function() {
      console.error(chrome.runtime.lastError);
    }
  );
});
