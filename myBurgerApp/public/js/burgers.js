$(document).ready(function () {




      $(".myButton").on("click", handleBurgerAdd);
      let div = $( "< div > < /div>")
      let devouredBtn = $(`<button type="button" class="btn btn-primary devouredButton">Submit</button>`)

        let burgerNameContainer = $(".burgerNameContainer")

        function handleBurgerAdd() {

          $.ajax({
              method: "POST",
              url: "/api/burgers",
              data: {
                name: burgerNameContainer.val(),
                devoured: false
              }
            })

            .done(function (msg) {
              alert("Data Saved: " + msg);
            });

        }


        function getBurgers() {

          $.ajax({
              method: "GET",
              url: "/api/burgers",
            })

            .done(function (burgers) {
              console.log(burgers);

              burgers.forEach(element => {

                // $(div).append(${devouredBtn})
                $("burgerMenu").append( `${div} element.name ${devouredBtn}` );
                
              });

            });

        }

        getBurgers()


      });