(function() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.bottom = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '50%'; 
  overlay.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; 
  overlay.style.transition = 'opacity 0.5s';
  overlay.style.opacity = '0';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  document.body.appendChild(overlay);

  const iframeContainer = document.createElement('div');
  iframeContainer.style.flex = '1';
  overlay.appendChild(iframeContainer);

  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.src = 'https://www.youtube.com/embed/eRXE8Aebp7s?si=xDHYpAMw2Zr1MX7U';
  iframeContainer.appendChild(iframe);

  const textLinkContainer = document.createElement('div');
  textLinkContainer.style.textAlign = 'center';
  overlay.appendChild(textLinkContainer);

  const text = document.createElement('p');
  text.textContent = 'Try this game by Google Play!';
  textLinkContainer.appendChild(text);

  const link = document.createElement('a');
  link.href = 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en_US&pli=1';
  link.textContent = 'Click to visit';
  link.style.color = '#FFFFFF'; 
  link.style.fontSize = '2em';
  textLinkContainer.appendChild(link);

  document.body.style.paddingBottom = '50%'; 

  setTimeout(() => overlay.style.opacity = '1', 100); 

})();
