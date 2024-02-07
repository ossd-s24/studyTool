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
    document.body.appendChild(overlay);
  
   
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = 'https://www.youtube.com/embed/eRXE8Aebp7s?si=xDHYpAMw2Zr1MX7U';
    overlay.appendChild(iframe);
  
    
    document.body.style.paddingBottom = '50%'; 
  

    setTimeout(() => overlay.style.opacity = '1', 100); 
  
   
  })();
  