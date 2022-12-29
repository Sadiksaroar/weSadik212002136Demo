var tin = document.getElementsByClassName("Accordion");
var i;

for(i = 0; i < tin.length; i++){
    tin[i].addEventListener("click", function(){
        this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}