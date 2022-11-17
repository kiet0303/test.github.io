document.querySelector('#submit_form').onsubmit = function(e) {
    e.prevenDefault();


    let fullnameoj = document.querySelector('input[name="fullname"]');   
    let emailoj = document.querySelector('input[name="email"]');

    let fullname =fullnameoj.Value;
    let email = emailoj.Value;
    
    console.log(fullname);


}
