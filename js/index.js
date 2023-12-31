/* ...control Bar ... */  
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    })();
/* ...control Bar END... */  

/* ...Typed ... */  
var typed = new Typed (".car",
{
strings:["Web Designer", "Frontend Developer","Web Developer"],
typeSpeed:100,
backSpeed:100,
backDelay: 100,
loop: true
});
/* ...Typed END... */ 

/* ...Bars Open & Close ... */ 
const menu_Card = document.getElementById("menu");
const card = document.getElementById("open");

function test(){
    if(card.style.display=="none")
    {
        card.style.display="block";  
    }
    else
    {
        card.style.display="none";
    }
}
/* ...Bars Open & Close  END... */ 

/* ...Navbar ... */ 
Header = document.querySelector('.rolex1');
nav_tag = document.querySelector('.nav');

function nav()
{
   if(document.documentElement.scrollTop > 400)
   {
        nav_tag.style.padding = "50px 5px"
        Header.style.top = "-100%"
   }
   else
   {
         nav_tag.style.padding = "20px 0px"
        Header.style.top = "0px"
   }
}
/* ...Navbar END ... */ 

/* ...Cursor ... */ 
const ram = document.querySelector(".code")
        document.addEventListener('mousemove', (e) =>
        {
           ram.style.left = e.pageX + "px";
           ram.style.top = e.pageY + "px";
        })
        
/* ...Cursor END ... */ 

/* ...From Validation ... */ 
name1 = document.getElementById('nm');
email = document.getElementById('email');
msg = document.getElementById('txt');
nmErr = document.getElementById('nmErr');
emailErr = document.getElementById('emailErr');
msgErr = document.getElementById('msgErr');

nmExp = /^[A-Z a-z]+$/

function validation()
{
    if(name1.value == '')
    {
        name1.style.border = '2px solid red';
        nmErr.innerHTML = '*required...!';
        nmErr.style.color = 'red';
        return false;
    }
    else if(!nmExp.test(name1.value))
    {
        nmErr.innerHTML = '*Only alphabets';
        nmErr.style.color = 'red';
        name1.style.border = '2px solid coral';
        return false;
    }
    else
    {
        nmErr.innerHTML = '';
        name1.style.border = '1px solid';
    }

    // email validation
    if(email.value == '')
    {
        emailErr.innerHTML = '*required...!';
        emailErr.style.color = 'red';
        email.style.border = '2px solid red';
        return false;
    }
    else
    {
        emailErr.innerHTML = ' ';
        email.style.border = '1px solid';
    }

    // msg validation
    if(msg.value == '')
    {
        msgErr.innerHTML = '*required...!';
        msgErr.style.color = 'red';
        msg.style.border = '2px solid red';
        return false;
    }
    else
    {
        msgErr.innerHTML = ' ';
        msg.style.border = '1px solid';
    }

    name1.value='';
    email.value='';
    msg.value='';

    alert('Thank you..!')
}
/* ...From Validation END ... */ 


