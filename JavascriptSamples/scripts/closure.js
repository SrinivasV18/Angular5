(function(){
    function add(){
        var counter = 0;
        return function(){
           return ++counter;
        }
    }
    var myCounter = add();
    var my2 = add();
    console.log(myCounter()); // 1
    console.log(myCounter()); //2
    console.log(my2()); // 1
})()
