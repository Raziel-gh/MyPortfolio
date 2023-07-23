const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSect = document.querySelector('.main');

(function PageTranst(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener("click", function(){
            let crntbtn = document.querySelectorAll('.active_opt');
            crntbtn[0].className = crntbtn[0].className.replace('active_opt',' ');
            this.className += ' active_opt';
        })
    }





allSect.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){

        sectBtn.forEach((btn)=>{
            const but = btn;
            but.classList.remove('active');
        })
        e.target.classList.add('active');

        sections.forEach((section)=>{
            const sec = section;
            sec.classList.remove('active');
            
        })

        const element = document.getElementById(id);
        element.classList.add('active')
    }
    // console.log(e.target);
})
})();




function sendMail(){
    let parameters = {
        from_name : document.getElementById("FullName").value,
        // subject: document.getElementById("Subject").value,
        email_id: document.getElementById("Email").value,
        message: document.getElementById("Message").value


    };

    emailjs.send("service_raziel", "template_2cgxdyq", parameters).then(function(res){
        alert("Your Email has been sent successfully.");
        document.getElementById("FullName").value="";
        // subject: document.getElementById("Subject").value,
         document.getElementById("Email").value="";
         document.getElementById("Message").value="";

    })
}