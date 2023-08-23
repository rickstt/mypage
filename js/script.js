//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    let header = document.querySelector('header');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //trocar active dos links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    header.classList.toggle('sticky', window.scrollY > 100);

    // ocultar o menu ao clicar em uma das opções do menu hamburger
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Menu hamburguer
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function enviarEmail() {
    let txtnome = document.getElementById("txtnome").value;
    let txtemail = document.getElementById("txtemail").value;
    let txtassunto = document.getElementById("txtassunto").value;

    var params = {
        
        from_name: txtnome,
        from_email: txtemail,
        subject: txtassunto,
        message: document.getElementById("txtmensagem").value
      };
    
      let serviceID = "service_soqusij";
      let templateID = "template_1nea1la";
        emailjs.send(serviceID, templateID, params).then(
          function (response) {
            console.log("E-mail enviado com sucesso!", response);
          },
          function (error) {
            console.error("Erro ao enviar o e-mail:", error);
          }
        );
}