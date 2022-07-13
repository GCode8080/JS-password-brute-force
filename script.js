document.getElementById('textBox').value = '';
document.getElementById('accessBox').value = '';
document.getElementById('passBox').value = '';
//-------------------------the login box and hack code-------------------------------------
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
//-----------------------------the secure password generator------------------------------------
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];


function gen() {
   let a = alphabet[Math.floor(Math.random() * alphabet.length)];
   let b = alphabet[Math.floor(Math.random() * alphabet.length)];
   let c = alphabet[Math.floor(Math.random() * alphabet.length)];
   let d = alphabet[Math.floor(Math.random() * alphabet.length)];
   let e = alphabet[Math.floor(Math.random() * alphabet.length)];
   let f = alphabet[Math.floor(Math.random() * alphabet.length)];
   let g = alphabet[Math.floor(Math.random() * alphabet.length)];
   let h = alphabet[Math.floor(Math.random() * alphabet.length)];
   let i = alphabet[Math.floor(Math.random() * alphabet.length)];
   let j = alphabet[Math.floor(Math.random() * alphabet.length)];
   let k = alphabet[Math.floor(Math.random() * alphabet.length)];
   let l = alphabet[Math.floor(Math.random() * alphabet.length)];
   let m = alphabet[Math.floor(Math.random() * alphabet.length)];
   let n = alphabet[Math.floor(Math.random() * alphabet.length)];
   let o = alphabet[Math.floor(Math.random() * alphabet.length)];
   document.getElementById('passBox').value = a+b+c+d+e+f+g+h+i+j+k+l+m+n+o
}
