var app ={};
app.show = function(){
    console.log('hello world...');
}
app.updateContent = function(el,msg){
    return function(){
    var myHeading = document.getElementById(el);
    myHeading.innerHTML =msg;
    }
}
app.init =  function(){
    var headBtn = document.getElementById('showHeading');
    var subheadBtn = document.getElementById('showSubHeading');
    headBtn.addEventListener('click',app.updateContent('myHeading','javascript examples...'));
    subheadBtn.addEventListener('click',app.updateContent('minorHeading','VDSI-Javascript...'));
}
app.show();
app.init();
