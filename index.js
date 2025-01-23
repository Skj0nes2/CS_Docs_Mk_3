function cloak() {
    let url = window.location.href;
    const win = window.open('about:blank', '_blank');
    let iframe = win.document.createElement('iframe');
    win.document.body.style.margin = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}