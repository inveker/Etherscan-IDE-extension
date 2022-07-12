// Icon
const canvas = new OffscreenCanvas(16, 16);
const context = canvas.getContext('2d');
context.clearRect(0, 0, 16, 16);
context.fillStyle = '#10FF30';  
context.fillRect(0, 0, 16, 16);
context.fillStyle = '#000000';  
context.font = "11px serif";
context.fillText('IDE', 1, 12);
const imageData = context.getImageData(0, 0, 16, 16);
chrome.action.setIcon({imageData: imageData}, () => { /* ... */ });


// Action
chrome.action.onClicked.addListener(async tab => {
    const url = tab.url.replace(/\.io/, '.deth.net');
    chrome.tabs.create({ url: url, index: tab.index + 1 });
});