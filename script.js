window.onload = function() {
    const image = document.getElementById("internet-image");
    const statusText = document.getElementById("status-text");

    function checkInternet() {
        if (navigator.onLine) {
            image.src = "internet.png";  // İnternet varsa bu resim gelir
            statusText.textContent = "İnternet Var";  // Metin eklenir
            statusText.className = "internet-yes";  // Animasyonlu sınıf
        } else {
            image.src = "no-internet.png";  // İnternet yoksa bu resim gelir
            statusText.textContent = "İnternet Yok";  // Metin eklenir
            statusText.className = "internet-no";  // Animasyonlu sınıf
        }
    }

    // Başlangıçta internet durumunu kontrol et
    checkInternet();

    // İnternet durumu değişirse tekrar kontrol et
    window.addEventListener('online', checkInternet);
    window.addEventListener('offline', checkInternet);
};
