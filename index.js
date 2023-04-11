

const paths = document.querySelectorAll(".st68, .st69, .st70 path");
const circles = document.querySelectorAll("circle[id='ball']");

const duration = 1000; // hareketin süresi

// her bir yol için
paths.forEach((path, index) => {
  const totalLength = path.getTotalLength(); // çizginin toplam uzunluğu
  const circle = circles[index];

  function moveBall() {
    const startPoint = path.getPointAtLength(0);
    circle.setAttribute("cx", startPoint.x);
    circle.setAttribute("cy", startPoint.y);
    circle.setAttribute("fill", "black");
    circle.setAttribute("r", "5");
    circle.setAttribute("stroke", "none");
    circle.setAttribute("stroke-width", "0");

    let start = null;

    function update(currentTime) {
      if (!start) start = currentTime;
      const elapsed = currentTime - start;
      const distance = (elapsed / duration) * totalLength;

      if (distance < totalLength) {
        const point = path.getPointAtLength(distance);
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
        requestAnimationFrame(update);
      } else {
        const endPoint = path.getPointAtLength(totalLength);
        circle.setAttribute("cx", endPoint.x);
        circle.setAttribute("cy", endPoint.y);
        animateBall();
      }
    }

    requestAnimationFrame(update);
  }

  function animateBall() {
    const animation = circle.animate(
      [{ offset: 0 }, { offset: 1 }],
      { duration: duration, easing: "linear", fill: "both" }
    );

    animation.onfinish = () => {
      const startPoint = path.getPointAtLength(0);
      circle.setAttribute("cx", startPoint.x);
      circle.setAttribute("cy", startPoint.y);
      moveBall();
    };
  }

  moveBall();
});



// ---------------------- TEK BİR ÇİZGİ VE TEK BİR TOP -------------------------------

// const ball = document.getElementById("ball");
// const spath = document.getElementById("spath");
// const spathLength = spath.getTotalLength();
// const duration = 1000; // animasyon süresi

// function moveBall() {
//   const startPoint = spath.getPointAtLength(0);

//   // Yuvarlak noktanın başlangıç noktasına taşınması
//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);

//   // Animasyon için gerekli özelliklerin ayarlanması
//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");

//   // Yuvarlak noktanın sona doğru hareket etmesi
//   const animation1 = ball.animate(
//     [
//       { offset: 0 },
//       { offset: 1 }
//     ],
//     {
//       duration: duration,
//       easing: "linear",
//       fill: "forwards"
//     }
//   );

//   let start = null;
//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;

//     // Yuvarlak noktanın çizginin şeklini takip etmesi
//     const point = spath.getPointAtLength(
//       spathLength * elapsed / duration
//     );
//     ball.setAttribute("cx", point.x);
//     ball.setAttribute("cy", point.y);

//     if (elapsed < duration) {
//       // Animasyon bitmedi, bir sonraki frame'i çağır
//       requestAnimationFrame(update);
//     }
//   }

//   requestAnimationFrame(update);

//    animation2.play();
//    animation2.onupdate = function() {
//      const point = spath.getPointAtLength(
//        spathLength * animation2.currentTime / duration
//      );
//      ball.setAttribute("cx", point.x);
//      ball.setAttribute("cy", point.y);
//    };
//  }
//----------------------------------------------------------------------------------------------
// const ball1 = document.getElementById("ball1");
// const ball2 = document.getElementById("ball2");
// const ball3 = document.getElementById("ball3");
// const ball4 = document.getElementById("ball4");

// const spath1 = document.getElementById("line1");
// const spath2 = document.getElementById("line2");
// const spath3 = document.getElementById("line3");
// const spath4 = document.getElementById("line4");

// const spathLength = spath1.getTotalLength();
// const duration = 3000;

// function moveBalls() {
//   animateBall(ball1, spath1);
//   animateBall(ball2, spath2);
//   animateBall(ball3, spath3);
//   animateBall(ball4, spath4);
// }

// function animateBall(ball, spath) {
//   const startPoint = spath.getPointAtLength(0);

//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);

//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");

//   const animation = ball.animate(
//     [{ offset: 0 }, { offset: 1 }],
//     { duration: duration, easing: "linear", fill: "forwards" }
//   );

//   let start = null;
//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;

//     const point = spath.getPointAtLength((spathLength * elapsed) / duration);
//     ball.setAttribute("cx", point.x);
//     ball.setAttribute("cy", point.y);

//     if (elapsed < duration) {
//       requestAnimationFrame(update);
//     }
//   }

//   requestAnimationFrame(update);
// }





//-------------------TOPLAR DURUR SÜREKLİ GİT GEL YAPMAZ--------------------






// const ball1 = document.getElementById("ball1");
// const ball2 = document.getElementById("ball2");
// const ball3 = document.getElementById("ball3");
// const ball4 = document.getElementById("ball4");

// const spath1 = document.getElementById("line1");
// const spath2 = document.getElementById("line2");
// const spath3 = document.getElementById("line3");
// const spath4 = document.getElementById("line4");

// const duration = 5000; //ZAMAN

// function moveBalls() { 
//   animateBall(ball1, spath1);
//   animateBall(ball2, spath2);
//   animateBall(ball3, spath3);
//   animateBall(ball4, spath4);
// }

// function animateBall(ball, spath) {   
//   const spathLength = spath.getTotalLength();
//   const timeRatio = spathLength / duration;

//   const startPoint = spath.getPointAtLength(0);

//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);

//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");

//   const animation = ball.animate(
//     [{ offset: 0 }, { offset: 1 }],
//     { duration: duration, easing: "linear", fill: "forwards" }
//   );

//   let start = null;

//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;
//     const distance = elapsed * timeRatio;

//     const point = spath.getPointAtLength(distance);
//     ball.setAttribute("cx", point.x);
//     ball.setAttribute("cy", point.y);

//     if (elapsed < duration) {
//       requestAnimationFrame(update);
//     }
//   }
  
//   requestAnimationFrame(update);
// }


//------------------------TOPLAR DURMAZ SÜREKLİ VERİ AKIŞI GÖRÜNTÜSÜ OLUŞUR---------------------



//Hata oluştuğunda hangi topun ilerlemediğini belirlemek için, 
//animateBall fonksiyonunun içinde hata işleme mekanizması ekleyebilirsiniz.
// Örneğin, API'den gelen verileri alırken bir hata oluşursa, top hareketi durdurulabilir
// veya hata mesajı ekranda gösterilebilir. Hata işleme mekanizması, 
//topun hareketini durduracak ve bu sayede hangi topun ilerlemediği belirlenebilecektir.

// const ball1 = document.getElementById("ball1");
// const ball2 = document.getElementById("ball2");
// const ball3 = document.getElementById("ball3");
// const ball4 = document.getElementById("ball4");

// const spath1 = document.getElementById("line1");
// const spath2 = document.getElementById("line2");
// const spath3 = document.getElementById("line3");
// const spath4 = document.getElementById("line4");

// const duration = 2000; // hareketin süresi
// const totalLength1 = spath1.getTotalLength(); // çizginin toplam uzunluğu
// const totalLength2 = spath2.getTotalLength();
// const totalLength3 = spath3.getTotalLength();
// const totalLength4 = spath4.getTotalLength();

// function moveBalls() {
//   animateBall(ball1, spath1, totalLength1);
//   animateBall(ball2, spath2, totalLength2);
//   animateBall(ball3, spath3, totalLength3);
//   animateBall(ball4, spath4, totalLength4);
// }

// function animateBall(ball, spath, totalLength) {
//   const startPoint = spath.getPointAtLength(0);

//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);
//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");

//   const animation = ball.animate(
//     [{ offset: 0 }, { offset: 1 }],
//     { duration: duration, easing: "linear", fill: "both" }
//   );

//   animation.onfinish = () => {
//     ball.setAttribute("cx", startPoint.x);
//     ball.setAttribute("cy", startPoint.y);
//     animateBall(ball, spath, totalLength);
//   };
  
//   let start = null;

//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;
//     const distance = elapsed % duration;

//     const point = spath.getPointAtLength(totalLength - distance);
//     ball.setAttribute("cx", point.x);
//     ball.setAttribute("cy", point.y);

//     requestAnimationFrame(update);
//   }
  
//   requestAnimationFrame(update);
// }

// SVG elementini seçin





// const path = document.querySelector(".st68");
// const ball = document.querySelector("#ball");
// const button = document.querySelector("#moveButton");
// const duration = 2000; // hareketin süresi
// const totalLength = path.getTotalLength(); // çizginin toplam uzunluğu

// function moveBall() {
//   const startPoint = path.getPointAtLength(0);
//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);

//   let start = null;

//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;
//     const distance = (elapsed / duration) * totalLength;

//     if (distance < totalLength) {
//       const point = path.getPointAtLength(distance);
//       ball.setAttribute("cx", point.x);
//       ball.setAttribute("cy", point.y);
//       requestAnimationFrame(update);
//     }
//   }

//   requestAnimationFrame(update);
// }

// button.addEventListener("click", moveBall);




//-------------------------------------------------------SAYFA RENDER OLUR OLMAZ ÇALIŞIR-----------


// const path = document.querySelector(".st68");
// const ball = document.querySelector("#ball");
// const button = document.querySelector("#moveButton");
// const duration = 2000; // hareketin süresi
// const totalLength = path.getTotalLength(); // çizginin toplam uzunluğu

// function moveBall() {
//   const startPoint = path.getPointAtLength(0);
//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);
//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");

//   let start = null;

//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;
//     const distance = (elapsed / duration) * totalLength;

//     if (distance < totalLength) {
//       const point = path.getPointAtLength(distance);
//       ball.setAttribute("cx", point.x);
//       ball.setAttribute("cy", point.y);
//       requestAnimationFrame(update);
//     } else {
//       const endPoint = path.getPointAtLength(totalLength);
//       ball.setAttribute("cx", endPoint.x);
//       ball.setAttribute("cy", endPoint.y);
//       animateBall();
//     }
//   }

//   requestAnimationFrame(update);
// }

// function animateBall() {
//   const animation = ball.animate(
//     [{ offset: 0 }, { offset: 1 }],
//     { duration: duration, easing: "linear", fill: "both" }
//   );

//   animation.onfinish = () => {
//     const startPoint = path.getPointAtLength(0);
//     ball.setAttribute("cx", startPoint.x);
//     ball.setAttribute("cy", startPoint.y);
//     moveBall();
//   };
// }

// moveBall();


// --------------------- BUTONA BASINCA SÜREKLİ GİDER ----------------------------



// const path = document.querySelector(".st68");
// const ball = document.querySelector("#ball");
// const button = document.querySelector("#moveButton");
// const duration = 2000; // hareketin süresi
// const totalLength = path.getTotalLength(); // çizginin toplam uzunluğu

// function init() {
//   const startPoint = path.getPointAtLength(0);
//   ball.setAttribute("cx", startPoint.x);
//   ball.setAttribute("cy", startPoint.y);
//   ball.setAttribute("fill", "black");
//   ball.setAttribute("r", "10");
//   ball.setAttribute("stroke", "none");
//   ball.setAttribute("stroke-width", "0");
// }

// function moveBall() {
//   let start = null;

//   function update(currentTime) {
//     if (!start) start = currentTime;
//     const elapsed = currentTime - start;
//     const distance = (elapsed / duration) * totalLength;

//     if (distance < totalLength) {
//       const point = path.getPointAtLength(distance);
//       ball.setAttribute("cx", point.x);
//       ball.setAttribute("cy", point.y);
//       requestAnimationFrame(update);
//     } else {
//       const endPoint = path.getPointAtLength(totalLength);
//       ball.setAttribute("cx", endPoint.x);
//       ball.setAttribute("cy", endPoint.y);
//       animateBall();
//     }
//   }

//   requestAnimationFrame(update);
// }

// function animateBall() {
//   const animation = ball.animate(
//     [{ offset: 0 }, { offset: 1 }],
//     { duration: duration, easing: "linear", fill: "both" }
//   );

//   animation.onfinish = () => {
//     moveBall();
//   };
// }

// init();
// button.addEventListener("click", moveBall);


// --------------------- BUTONA BASINCA SÜREKLİ TÜM TOPLAR GİDER ----------------------------

