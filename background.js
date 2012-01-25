// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PVhidden = false;

function toggleStory(tab, hide) {

    var displayVal = (true == PVhidden) ? 'none':'block',
        iconVal = (true == PVhidden) ? 'icon_on.png' : 'icon_off.png';
    chrome.tabs.insertCSS(tab.id, {
        code: '#current_itemList_items .storyItem.accepted {display:'+displayVal+';}'
    });
    chrome.pageAction.setIcon({tabId: tab.id, path: iconVal});
    return !PVhidden;
    
}

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('www.pivotaltracker.com/projects') > -1) {
    chrome.pageAction.show(tabId);
    //Default hide
    PVhidden = toggleStory(tab, PVhidden);
  }
};

chrome.pageAction.onClicked.addListener(function(tab) {
    PVhidden = toggleStory(tab, PVhidden);
});

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
