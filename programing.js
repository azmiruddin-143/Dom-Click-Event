 //    first way//
        //    function bgblue() {
        //      document.body.style.background = "blue"
        //    }

        // 2cond way

        // <button onclick="document.body.style.background= 'blue'">bg blue</button>

        // therd way

        let man = document.getElementById('bg-blue');
        man.onclick = col
        function col() {
            document.body.style.background = "blue"
        }

        // therd way anather

        let blu = document.getElementById("bg-red");
        blu.onclick = function bu () {
           document.body.style.background= "red"
        }

        // four way //

        let per = document.getElementById("bg-purple");
        per.addEventListener("click",purple)
 
        function purple() {
          document.body.style.background = "purple"
        }

          // four way anather //

          let or = document.getElementById("bg-orange");
          or.addEventListener("click",function() {
              document.body.style.background = "orange"
          })


        //   five finnal way//
        document.getElementById('bg-green').addEventListener('click',function(){
            document.body.style.background = "green"  
       })



    // 