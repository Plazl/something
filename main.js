   const initialize = 1;
          var x = new Decimal (500);
          var y = new Decimal (500);
          var z = new Decimal(500);
          
          if (initialize == 1) {
            if (interval !== setInterval(update, 1000));
            var interval = setInterval(update, 1000);
          }
          function update() {
          document.getElementById("sp1").innerHTML = x;
          document.getElementById("sp2").innerHTML = y;
          document.getElementById("sp3").innerHTML = z;
          }
   
   function changeX() { 
   x = x.add(addMult);
       document.getElementById("sp1").innerHTML = x;
   }


   function changeY() { 
   y = y.add(addMult);
       document.getElementById("sp2").innerHTML = y;
   }


   function changeZ() { 
   z = z.add(addMult);
       document.getElementById("sp3").innerHTML = z;
   }
