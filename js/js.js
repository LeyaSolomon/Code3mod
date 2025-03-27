document.addEventListener("DOMContentLoaded", function(){
    let image = document.querySelector('.krilo1'); 
    // image  images заменить
    let images = [
      'img/вар1.svg', 
      'img/вар2.svg', 
      'img/вар3.svg', 
    ];
    
    let currentIndex = 0;
    
    image.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length; 
      image.src = images[currentIndex];
    });






    let im2 = document.querySelector('.krilo2'); 

    let  m2 = [
      'img/вар4.svg', 
      'img/вар5.svg', 
      'img/вар6.svg', 
    ];
    
    let curIndex = 0;
    
    im2.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % m2.length; 
      im2.src = m2[currentIndex];
    });


    

    let ima3 = document.querySelector('.krilo3'); 

    let imag23 = [
      'img/вар7.svg', 
      'img/вар8.svg', 
      'img/вар9.svg', 
    ];
    
    let cuIndex = 0;
    
    ima3.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imag23.length; 
      ima3.src = imag23[currentIndex];h
    });




    let ima4 = document.querySelector('.krilo4'); 

    let imag4 = [
      'img/вар10.svg', 
      'img/вар11.svg', 
      'img/вар12.svg', 
    ];
    
    let currrIndex = 0;
    
    ima4.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imag4.length; 
      ima4.src = imag4[currentIndex];h
    });






    let predictions = [
      "Все, что ни делается, к лучшему!",
      "Любовь уже рядом ",
      "Жизнь готовит для тебя что-то особенное",
      "Пусть мечты сбываются всегда",
      "Счастье в мелочах жизни",
      "Каждый день — новая страница",
      "Идеи взлетают, как бабочки",
      "Чудеса повсюду, ищи их",
      "Свет и тепло вокруг тебя",
      "Пусть счастье будет постоянным спутником",
      "Живи с радостью и любовью",

    ];
    
    let predictButton = document.getElementById("predictButton");
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("overlay");
    let closeButton = document.getElementById("closeButton");
    let predictionText = document.getElementById("predictionText");
    
    predictButton.addEventListener("click", function() {
      let randomIndex = Math.floor(Math.random() * predictions.length);
      predictionText.textContent = predictions[randomIndex];
    
      popup.style.display = "block";
      overlay.style.display = "block";
    });
    
    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
      overlay.style.display = "none";
    });
    
    overlay.addEventListener("click", function() {
      popup.style.display = "none";
      overlay.style.display = "none";
    });
});



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.butterfly').forEach(butterfly => {
      
      butterfly.addEventListener('click', function() {
          this.style.transition = 'opacity 0.5s';
          this.style.opacity = '0';
          setTimeout(() => this.remove(), 500);
      });
  });
});