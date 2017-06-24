// Select image node
var node = document.querySelector("#pImage_0");

// Get image attributes
var url = node.getAttribute("src");
var filename = url.split("/")[5];

var data = {
  url: url,
  filename: filename
};

chrome.runtime.sendMessage({
  data: data
});
