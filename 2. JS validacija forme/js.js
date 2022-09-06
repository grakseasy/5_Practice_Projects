$(document).ready(function() {
    $('input').click(function() {
        var input_class = $(this).attr('class');

        $('.'+input_class).prop('checked', false);

        $(this).prop('checked', true);
    });
});

function send() {
    var ime = document.querySelector('#ime').value;
    console.log(ime);
    var prezime = document.querySelector('#prezime').value;
    console.log(prezime);
    var grad = document.querySelector('#grad').value;
    console.log(grad);
    var adresa = document.querySelector('#adresa').value;
    console.log(adresa);
    
    var godina = document.querySelector('#godina');
    var value = godina.options[godina.selectedIndex].value;
    console.log(value); 

    var pol = document.querySelectorAll('.pol');
    

    if(ime.length > 2 && /\d/.test(ime) === false){
        let imeGreska = document.querySelector('.imeGreska');
        imeGreska.innerHTML = "<span style='color: green;'>Ime uneto.</span>";

        if(prezime.length >= 4 && /\d/.test(prezime) === false){
            let prezimeGreska = document.querySelector('.prezimeGreska');
            prezimeGreska.innerHTML = "<span style='color: green;'>Prezime uneto.</span>";
           if(grad.length >= 2  && isNaN(grad)){
                let gradGreska = document.querySelector('.gradGreska');
                gradGreska.innerHTML = "<span style='color: green;'>Grad unet.</span>";
                if(adresa.length > 7 && /\d/.test(adresa) === true){
                    let adresaGreska = document.querySelector('.adresaGreska');
                    adresaGreska.innerHTML = "<span style='color: green;'>Adresa uneta.</span>";
                    
                        if(pol[0].checked === true ){
                            let polGreska = document.querySelector('.polGreska');
                            polGreska.innerHTML = "<span></span>";
                            console.log(pol[0].name);

                            jQuery( document ).ready(function() {
                                jQuery('.forma').submit(function(e){
                                    e.preventDefault();
                    
                                    jQuery.ajax({
                                        url: e.currentTarget.action,
                                        data:{
                                            comment: jQuery('.ime').val()
                                        }
                                    }).done(function(data){
                                        console.log(data);
                                        jQuery('.imePrikaz').append(data);
                                    });
                                });
                            });
                             
                        } else if(pol[1].checked === true){
                            let polGreska = document.querySelector('.polGreska');
                            polGreska.innerHTML = "<span></span>";
                            console.log(pol[1].name);
                        }
                         else {
                            let polGreska = document.querySelector('.polGreska');
                            polGreska.innerHTML = "<span>Izaberite pol</span>";
                        }
                        
                    
            }    else {
                    let adresaGreska = document.querySelector('.adresaGreska');
                    adresaGreska.innerHTML = "<span>Unesite validnu adresu (broj ulice).</span>";
                    }
            } else {
                let gradGreska = document.querySelector('.gradGreska');
                gradGreska.innerHTML = "<span>Unesite validan grad.</span>";
            
            }
            
        } else {
            let prezimeGreska = document.querySelector('.prezimeGreska');
            prezimeGreska.innerHTML = "<span>Unesite validno prezime.</span>";
        }
    }
    else{
        let imeGreska = document.querySelector('.imeGreska');
        imeGreska.innerHTML = "<span>Unesite validno ime.</span>";
    }

   
   
}