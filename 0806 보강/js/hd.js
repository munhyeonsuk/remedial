// window.onload = init;

// function init(){
//    const mbtn = document.querySelector('#m_menu'); // 햄버거
//    const hd = document.querySelector("#hd");

//    mbtn.addEventListener('click', function(){
//         hd.classList.toggle('active')
//    })
// }

// window.onload = function (){
//    const mbtn = document.querySelector('#m_menu'); // 햄버거
//    const hd = document.querySelector("#hd");

//    mbtn.addEventListener('click', function(){
//         hd.classList.toggle('active')
//    })
// };

// window.onload = function (){
//    const mbtn = document.querySelectorAll('#m_menu'); // 햄버거
//    const hd = document.querySelectorAll("#hd");

//    mbtn[0].addEventListener('click', function(){
//         hd[0].classList.toggle('active')
//    })
// };
// element들만 이벤트메서드를 호출할 수 있다.
window.onload = function (){
   const mbtn = document.getElementById('m_menu'); // 햄버거
   const hd = document.getElementById("hd");

   // mbtn[0].addEventListener('click', function(){
   //      hd[0].classList.toggle('active')
   // })
   mbtn.onclick = function(){
      hd.classList.toggle('active')
   }
};



