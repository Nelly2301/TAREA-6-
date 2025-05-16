window.onload = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
      mostrarGato();
    });
  };
  
  const mostrarGato = () => {
    document.getElementById("cat_image").src =
      'https://cataas.com/cat/gif/says/Hola?type=small';
  };