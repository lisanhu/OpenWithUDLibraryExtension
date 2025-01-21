// background.js

// Listener for action button clicks
chrome.action.onClicked.addListener(function(tab) {
    if (tab.url && typeof tab.url === "string") {
      // Parse the URL of the active tab
      const parser = new URL(tab.url);
  
      // Check if the URL already points to the UD Library proxy
      if (!parser.hostname.endsWith(".udel.idm.oclc.org")) {
        // Modify the hostname to include the UD Library proxy suffix
        parser.hostname = parser.hostname.replace(/\./g, "-") + ".udel.idm.oclc.org";
  
        // Open the modified URL in a new tab
        chrome.tabs.create({ url: parser.href });
      } else {
        console.log("URL is already proxied: ", tab.url);
      }
    } else {
      console.error("Invalid or missing URL in the active tab.");
    }
  });
  