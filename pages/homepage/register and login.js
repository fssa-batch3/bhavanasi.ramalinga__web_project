// const signUp = e => {
//     let email = document.getElementById("email").value
//         mobile = document.getElementById("mobile").value
//        full_name = document.getElementById("full_name").value
//       psw = document.getElementById("psw").value
//        confirmpassword = document.getElementById("TXTpassword").value
//        //   // Parsing the JSON string back into an array, or creating an empty array if there's no data
//    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
//    let exist = user_list.length &&
//        JSON.parse(localStorage.getItem('user_list')).some(data =>
//            data.mobile.toLowerCase() == mobile.toLowerCase() ||
//            data.email.toLowerCase() == email.toLowerCase()
//        );
//    if(!exist){
//        user_list.push({ email, phone_number, name, psw,
//                     repeat });
//        localStorage.setItem('user_list', JSON.stringify(user_list));
//        console.log(localStorage.getItem('user_list'));
//        document.querySelector('form').reset();
//        document.getElementById('email').focus();
//        document.getElementById('psw').focus();
//        if( password == confirmpassword)
//        {
//            alert("Account created Successfully :white_check_mark:");
//             location.href="./homepage/login.html";
//        }
//        else{
//            alert("Invalid Confirm password  :x:");
//        }
//    }
//    else{
//        alert('Sorry the User already Exist  ..:x:!! \n Try with different Phone number or email');
//        document.querySelector('form').reset();
//    }
//    e.preventDefault();
// }
const signIn = e =>{
        let email = document.getElementById('email');
       let  psw = document.getElementById('psw').value;
      let   user_list = JSON.parse(localStorage.getItem('user_list')) || [];
           let exist = user_list.length &&
       JSON.parse(localStorage.getItem('user_list')).some(data =>
           data.email.toLowerCase() == email &&
           data.psw.toLowerCase() == psw);
       if(!exist){
           alert("Incorrect login credentials..:x:");
       }
       else{
           alert("Your login in successful ..:white_check_mark:");
           location.href = "./user_interface.html";
       }
       e.preventDefault();
   }