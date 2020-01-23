document.getElementById('container').onmouseover = function(){
    var bill = Number(document.getElementById('billTotal').value);
    var tipPercent = (document.getElementById('tipinput').value);
    var split = (document.getElementById('splitinput').value);
    var tipValue = bill *(tipPercent/100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

   document.getElementById('tipOutput').innerHTML= tipPercent+"%";
   document.getElementById('hello').innerHTML = split;
   document.getElementById("aaa").innerHTML= "$"+newBillEach.toFixed(2);
   document.getElementById("bbb").innerHTML = "$"+tipEach.toFixed(2);
   
}