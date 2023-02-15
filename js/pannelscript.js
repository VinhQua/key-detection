const allPannels = document.querySelectorAll('.panel');

const panelOpenToggle = function(e){
    //console.log(this);
    this.classList.toggle('open');
    //console.log(e);
}
const panelOpenActiveToggle = function(e){
    //console.log(e);
    if (!e.propertyName.includes("flex")) return;
    //console.log(this);
    this.classList.toggle('open-active');
}
allPannels.forEach(pannel=>{pannel.addEventListener('click',panelOpenToggle)});
allPannels.forEach(pannel=>{pannel.addEventListener('transitionend',panelOpenActiveToggle)});