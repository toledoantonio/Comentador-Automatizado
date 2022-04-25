setInterval(()=>{
    const  randomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}

const displayRandomString = () =>{
   let randomStringContainer = document.getElementById('random_string'); 
    randomStringContainer.innerHTML =  randomString(8);    
}

document.querySelector(".PUqUI").innerHTML = randomString(6);

setTimeout(()=>{
    document.querySelectorAll(".y3zKF")[21].click()
},150)
},1010);