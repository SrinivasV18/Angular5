var app ={};
app.show = function(){
    console.log('hello world...');
}
app.init =  function(){
    var headBtn = document.getElementById('showHeading');
    var myHeading = document.getElementById('myHeading');
    headBtn.addEventListener('click', function(){
        myHeading.innerHTML ='Java script examples....';
    })
}
