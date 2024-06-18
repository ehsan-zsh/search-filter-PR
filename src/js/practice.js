const infoUser = document.getElementById('user-occupation');

const jobs = ['طراح سایت' , 'برنامه نویس وب' , 'دانشجو'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === jobs.length){
        count = 0;
    }
    currentText = jobs[count];
    letter = currentText.slice(0 , ++index);
    
    infoUser.textContent = letter;
    
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type , 200);

})()
