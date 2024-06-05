window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {

    document.getElementById("cabezera").style.margin = "2mm";
    document.getElementById("cabezera").style.borderRadius = "5mm";

    document.getElementsByName("cop").style.height = "0px";

    document.getElementById("cabezad").style.borderRadius = "5mm";
    document.getElementById("cabezad").style.backgroundColor = "rgba(55, 33, 63, 0.603)";
    document.getElementById("cabeza").style.borderRadius = "5mm";
    document.getElementById("cabeza").style.backgroundColor = "rgba(232, 211, 253, 0.668)";
    document.getElementById("cabezera").style.paddingBottom = "0px";
    document.getElementById("cabeza").style.paddingBottom = "0px";
    document.getElementById("cabezad").style.paddingBottom = "0px";

    document.getElementById("titulo").style.fontSize = "30px";
    document.getElementById("titulo").style.margin = "20px";

    document.getElementById("upspc").style.height = "5mm";

    document.getElementById("titulod").style.fontSize = "30px";
    document.getElementById("titulod").style.margin = "20px";

    document.getElementById("txtsb").style.margin = "25px";
    document.getElementById("txtsb").style.padding = "3px";
    document.getElementById("txtsb").style.width = "40px";


    document.getElementById("pd").style.height = "0px";

    document.getElementById("buscar").style.justifyItems = "end";


  } else {
    document.getElementById("titulo").style.fontSize = "25px";
    document.getElementById("titulo").style.margin = "13px";

    document.getElementById("cabezera").style.margin = "0mm";
    document.getElementById("cabezera").style.borderRadius = "0mm";

    document.getElementById("cop").style.height = "0px";

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

    document.getElementById("txtsb").style.margin = "10px";
    document.getElementById("txtsb").style.padding = "0px";
    document.getElementById("txtsb").style.width = "40px";


    document.getElementById("pd").style.height = "0px";

    document.getElementById("buscar").style.justifyItems = "end";


  }
  prevScrollpos = currentScrollPos;
};
