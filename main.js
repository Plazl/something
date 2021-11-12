   const initialize = 1;
          var x = 500;
          var y = new Decimal (1e390);
          var z = 50;
          
          if (initialize == 1) {
            if (interval !== setInterval(update, 1000))
            var interval = setInterval(update, 1000)
          }
          function update() {
          document.getElementById("sp1").innerHTML = x;
          document.getElementById("sp2").innerHTML = y;
          document.getElementById("sp3").innerHTML = z;
          }
