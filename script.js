
  
var button = document.getElementById('fohsh');
let array = ['زنده ای' , 'زنده ای' , 'زنده ای' ,  'زنده ای  ' , 'زنده ای' , 'زنده ای' , ' مردی' ];
var x = 0 ;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
  }
function k() {
    
    if (x < 6)
    {
      var valu = getRndInteger(x , 6) ;
    var word = array[valu] ;
    alert(word);
    x++;
    console.log(x + word);
    }
    else 
      {
        alert('مردی دیگه برو خونت')
        setTimeout(window.location.reload() , 3000);
        return 0;
      }
      
}



