 function przeliczanie_mile() {
            const kilometry = km.value * 1;
            if(isNaN(kilometry) || km.value==="" || kilometry<=0) {
                alert("Wprowadź prawidłową wartość");
                return;
            }

              wynik_mile.innerText = "Jest to " +  0.62*kilometry + "mil";
            }

function przeliczanie_wezly() {
          const kilometry_h = km_h.value * 1;
          if(isNaN(kilometry_h) || km_h.value==="" || kilometry_h<=0) {
              alert("Wprowadź prawidłową wartość");
              return;
          }

            wynik_wezly.innerText = "Jest to " + kilometry_h* 0.52 + "wezłow" ;
          }
