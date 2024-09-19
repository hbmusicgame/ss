var hostname = window.location.hostname;
var iframe = document.createElement('iframe');
iframe.src = `https://player.twitch.tv/?channel=syntheticsense&parent=${hostname}`;
iframe.allowFullscreen = true;
document.querySelector('.twitch').appendChild(iframe);