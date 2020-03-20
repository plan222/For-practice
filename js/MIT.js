function jui_on(){
    const join_us_icon =document.querySelector('.join_us_icon');
    join_us_icon.style.color= "white";
}

function jui_out(){
    const join_us_icon =document.querySelector('.join_us_icon');
    join_us_icon.style.color= "rgb(62,1,42)";
}

function logo_on(){
    var logo_pri = document.querySelectorAll('.logo-color--primary');
    var logo_sec = document.querySelector('.logo-color--secondary');
    logo_pri.forEach((item) => {
        item.classList.add('logo-color--primary_hover');
        item.classList.remove('logo-color--primary');
    })
    logo_sec.classList.add('logo-color--secondary_hover');
    logo_sec.classList.remove('logo-color--secondary');
}

function logo_out(){
    const logo_pri = document.querySelectorAll('.logo-color--primary_hover');
    const logo_sec = document.querySelector('.logo-color--secondary_hover');
    logo_pri.forEach((item) => {
        item.classList.add('logo-color--primary');
        item.classList.remove('logo-color--primary_hover');
    })
    logo_sec.classList.add('logo-color--secondary');
    logo_sec.classList.remove('logo-color--secondary_hover');
}