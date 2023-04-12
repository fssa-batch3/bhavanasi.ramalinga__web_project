let  origin = window.location.origin;
let logo_path = origin + "/pages/homepage/rent.html";
let logo =  origin + "/assets/images/Screenshot__17_-removebg-preview.png ";
let girls = origin + "/pages/homepage/updated for girls.html";
let boys = origin + "/pages/homepage/updated Boys.html";
let both_gender = origin + "/pages/orders/updated for both.html";
let profile = origin + "/pages/homepage/my profile.html";
let register = origin + "/pages/homepage/register.html";
let login = origin + "/pages/homepage/login.html";
let reviews = origin + "/pages/homepage/review.html"

let before_login =
  `
  <header>
  <div class="one">
      <img src="${logo}"  alt="photo"  height="70px" width="70px" /></div>
     <div class="dropdown">
      <span>Login/Register</span>
          <div class="dropdownlist">
              <div><a href="${register}">Register</a></div>
              <div><a href="${login}">Login </a></div>
          </div>
  </div>
</header>
`

let after_login =
  `<header>
  <div class="header">
            <div id="container">
                <nav>
                    <ul>
                        <div class="magic">
                            <li><a href="../../pages/homepage/rent.html"><img src="../../assets/images/Screenshot__17_-removebg-preview.png" alt="photo" height="70px" width="100%"></a></li></div>
                        
                     <li><a href="#">Boys/Girls</a>
                        
                        <ul>
                            <li><a href="../../pages/products/updated Boys.html">Boys</a></li>
                            <li><a href="../../pages/homepage/updated for girls.html">Girls</a></li>
                            <li><a href="../../pages/homepage/updated for both.html">Both</a></li>
                        </ul>        
                        </li>
                        <li><a href="#">pg owners</a>
                        
                        <ul>
                            <li><a href="../../pages/homepage/form.html"> Add pg</a></li>
                            
                            
                       </ul>
                     
                   
                    <li><a href="../../pages/homepage/review.html">reviews</a></li>
                      
                   
                       <ol> <li onclick="Logout(event)"><h4>Logout</h4></li></ol>
                     
                    
                   <li><a href="../../pages/homepage/my profile.html"> <i class="fa fa-user" style="font-size:36px;color:white"></a></i></li>
                    
                       <div class="search"> 
                       <input type="text" placeholder="search.."name="search">
                       <i class="fa fa-search"></i>
                       </div>
            </nav>
            </div>
           

        </div>
        </header>
`;

// let seller_page =
//   `
//   <header>
// <div class="header">
// <div id="container">
//     <nav>
//         <ul>
//         <div class="magic">



//   <li><a href="${origin}/pages/homepage/form.html"> Add pg</a></li>
                            
 
// <li><a href="${origin}/pages/homepage/review.html">reviews</a></li>
                      
                   
// <ol> <li onclick="Logout(event)"><h4>Logout</h4></li></ol>


// <li><a href="${origin}/pages/homepage/my profile.html"> <i class="fa fa-user" style="font-size:36px;color:white"></a></i></li>

// <div class="search"> 
// <input type="text" placeholder="search.."name="search">
// <i class="fa fa-search"></i>
// </div>
// </nav>
// </div>


// </div> 
// </header>
// `;

let userId = JSON.parse(localStorage.getItem("userId"));
console.log(userId);
if (userId) {
  // console.log(after_login);
  document.body.insertAdjacentHTML("afterbegin", after_login);
  const logoutBtn = document.querySelector("#logout");
    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("userId");
        document.body.innerHTML = header_before_login
      });

}else {
  document.body.insertAdjacentHTML("beforebegin",before_login );
  const logoutBtn = document.querySelector("#logout");
  logoutBtn?.removeEventListener("click", () =>
  document.body.innerHTML = header_after_login);
  localStorage.removeItem("userId");

};

// function header() {

//       let userId = JSON.parse(localStorage.getItem("uniqueID"));
//       let userlogin = document.getElementById("userLogin");

//       if (!userId) {
//       userlogin.innerHTML = before_login;
//       }
//       else {
//       userlogin.innerHTML = after_login;
//       }


// }



// function Logout(e) {
//   alert("are you sure to logout");

//   localStorage.removeItem("userId")
//   window.location.href = "/index.html";

// }
