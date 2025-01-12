function sendEmail() {
    (function () {
        emailjs.init("AK4F4gxAdcG-3Y9ZE");
    })();

    let name = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let product = document.getElementById("vybranyprodukt")
    let producttext = product.options[product.selectedIndex].innerHTML;
    let customerdetails = document.getElementById("customerdetails");


    let params = {
        fullname: document.getElementById("fullname").value,
        to: "philip.hruby777@gmail.com",
        replyto: document.getElementById("email").value,
        message: `new order! 8)! \n jméno: ${name} \n si objednal: ${producttext} \n email: ${email}`
    };

    let serviceID = "service_15c72dl"
    let templateID = "template_uuli8d8"

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Váš email byl zaslán úspěšně! Vyčkejte než Vás kontaktuji.")
            customerdetails.reset()
        })
        .catch(err => {
            console.log(err)
            customerdetails.reset()
        });


}


var typed = new Typed('#introduction', {
    strings: ['handmade glass by Czech glassmakers<br><ul class="mb-0">shaped to fit your hand<ul>robust glass<ul>structured</ul></ul></ul>'],
    typeSpeed: 10,
    showCursor: false
  });