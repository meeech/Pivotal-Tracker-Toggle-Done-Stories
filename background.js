// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('www.pivotaltracker.com/projects') > -1) {
    chrome.pageAction.show(tabId);
    chrome.tabs.insertCSS(tabId, {
        code: '#current_itemList_items .storyItem.accepted {display:none;}'
    });
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
