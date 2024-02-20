//Event handler for the popup button to inject js script
document.getElementById("modifyLayoutBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "modifyLayout" });
  });
});
