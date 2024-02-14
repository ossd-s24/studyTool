function overlay1() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.bottom = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "50%";
  overlay.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
  overlay.style.transition = "opacity 0.5s";
  overlay.style.opacity = "0";
  document.body.appendChild(overlay);

  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.src = "https://www.youtube.com/embed/eRXE8Aebp7s?si=xDHYpAMw2Zr1MX7U";
  overlay.appendChild(iframe);

  document.body.style.paddingBottom = "100%";

  setTimeout(() => (overlay.style.opacity = "1"), 100);
}

function overlay2() {
  const rightOverlay = document.createElement("div");
  rightOverlay.style.position = "fixed";
  rightOverlay.style.top = "0";
  rightOverlay.style.right = "0";
  rightOverlay.style.width = "50%";
  rightOverlay.style.height = "100%";
  rightOverlay.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
  rightOverlay.style.transition = "opacity 0.5s";
  rightOverlay.style.opacity = "0";
  document.body.appendChild(rightOverlay);
  const iframe2 = document.createElement("iframe");
  iframe2.style.width = "100%";
  iframe2.style.height = "100%";
  iframe2.src = "https://www.youtube.com/embed/eRXE8Aebp7s?si=xDHYpAMw2Zr1MX7U";
  rightOverlay.appendChild(iframe2);
  document.body.style.paddingRight = "50%";

  setTimeout(() => (rightOverlay.style.opacity = "1"), 100);
}

overlay1();
overlay2();
