
//Event handler for the popup button to inject js script
document.getElementById('modifyLayoutBtn').addEventListener('click', () => {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {action: "modifyLayout"});
    });
  });
  