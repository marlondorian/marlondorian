var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    
    document.getElementById("cabezera").style.margin = "2mm";
    document.getElementById("cabezera").style.borderRadius = "5mm";

    document.getElementById("cop").style.height = "0px";
    document.getElementById("copd").style.height = "0px";

    document.getElementById("cabezad").style.borderRadius = "5mm";
    document.getElementById("cabezad").style.backgroundColor = "rgba(55, 33, 63, 0.700)";
    document.getElementById("cabeza").style.borderRadius = "5mm";
    document.getElementById("cabeza").style.backgroundColor = "rgba(232, 211, 253, 0.700)";
    document.getElementById("cabezera").style.paddingBottom = "0px";
    document.getElementById("cabeza").style.paddingBottom = "0px";
    document.getElementById("cabezad").style.paddingBottom = "0px";

    document.getElementById("titulo").style.fontSize = "30px";
    document.getElementById("titulo").style.margin = "20px";

    document.getElementById("upspc").style.height = "5mm";
   
    document.getElementById("titulod").style.fontSize = "30px";
    document.getElementById("titulod").style.margin = "20px";
    
    document.getElementById("txts").style.margin = "23px";
    document.getElementById("txts").style.width = "35px";
    document.getElementById("txtsb").style.backgroundColor = "rgba(153, 50, 204, 0)";


    document.getElementById("pd").style.height = "0px";

    document.getElementById("buscar").style.justifyItems = "end";


  } 
  else {
    document.getElementById("titulo").style.fontSize = "25px";
    document.getElementById("titulo").style.margin = "13px";

    document.getElementById("cabezera").style.margin = "0mm";
    document.getElementById("cabezera").style.borderRadius = "0mm";

    document.getElementById("cop").style.height = "0px";
    document.getElementById("copd").style.height = "0px";


    document.getElementById("upspc").style.height = "0mm";

    document.getElementById("cabeza").style.borderRadius = "0mm";
    document.getElementById("cabeza").style.backgroundColor = "rgba(250, 245, 255, 0.668)";
    document.getElementById("cabezad").style.backgroundColor = "rgba(22, 20, 22, 0.61)";
    document.getElementById("cabezad").style.borderRadius = "0mm";
    document.getElementById("cabezera").style.paddingBottom = "0px";
    document.getElementById("cabeza").style.paddingBottom = "0px";
    document.getElementById("cabezad").style.paddingBottom = "0px";

    document.getElementById("titulod").style.fontSize = "25px";
    document.getElementById("titulod").style.margin = "13px";
    
    document.getElementById("txts").style.margin = "5px" ; 
    document.getElementById("txts").style.width = "35px";
    document.getElementById("txtsb").style.backgroundColor = "rgba(153, 50, 204, 0)";

    document.getElementById("pd").style.height = "0px";

    document.getElementById("buscar").style.justifyContent = "end";


  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("click", (evt) => {
  const flyoutEl = document.getElementById("txtsb");
  let targetEl = evt.target; // clicked element      
  do {
    if(targetEl == flyoutEl) {
      // This is a click inside, does nothing, just return.
      document.getElementById("txts").style.width = "140px";
      document.getElementById("txtsb").style.backgroundColor = "rgb(159, 0, 203)";
      document.getElementById("pd").style.height = "60px";
      document.getElementById("cop").style.height = "60px";
      document.getElementById("copd").style.height = "60px";
      document.getElementById("cabezera").style.margin = "2mm";
      document.getElementById("cabezera").style.borderRadius = "5mm";
      document.getElementById("txts").style.margin = "23px";
      document.getElementById("titulod").style.fontSize = "30px";
      document.getElementById("titulod").style.margin = "20px";
      document.getElementById("titulo").style.fontSize = "30px";
      document.getElementById("titulo").style.margin = "20px";
      document.getElementById("upspc").style.height = "5mm";
      document.getElementById("cabezad").style.borderRadius = "5mm";
      document.getElementById("cabeza").style.borderRadius = "5mm";

      return;
    }
    // Go up the DOM
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // This is a click outside.      
  document.getElementById("txts").style.width = "35px";
  document.getElementById("txtsb").style.backgroundColor = "rgba(153, 50, 204, 0)";
  document.getElementById("pd").style.height = "0px";
  document.getElementById("cop").style.height = "0px";
  document.getElementById("copd").style.height = "0px";

});

var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
