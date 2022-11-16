import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/es/highlight.min.js';

let lnk = document.createElement('link');
lnk.type = 'text/css';
lnk.rel = 'stylesheet';


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  lnk.href = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github-dark.min.css';
} else {
  lnk.href = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css';
}

document.getElementsByTagName('head')[0].appendChild(lnk);
hljs.highlightAll();
