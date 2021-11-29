document.getElementById('textBox').value = '';
document.getElementById('accessBox').value = '';

var access = document.getElementById('accessBox');
access.style.color = "white";

const password = '32352';

function loginFunc() {
    if (document.getElementById('textBox').value == password) {
        document.getElementById('accessBox').value = "access granted"
        access.style.color = "green";
        return true;
    } else {
        document.getElementById('accessBox').value = "access denied"
        access.style.color = "red";
        return false;
    } 
}





//only for 31it3 haxxors
function hack() {
    
        for(i=0;i<200000;i++) {
            if (loginFunc() == false) {
                document.getElementById('textBox').value++
                loginFunc()
            }
        }
    
}

if (loginFunc == true) {
    
}