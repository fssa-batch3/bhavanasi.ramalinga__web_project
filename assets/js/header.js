let origin = window.location.origin;
let logo_path = origin + "/homepage/rent.html";
let logo =  origin + "/assets/images/Screenshot__17_-removebg-preview.png";
let both_gender_pg = origin + "../../pages/products/updated for both.html";
let boys_pg = origin + "../../pages/products/updated Boys.html";
let girls_pg = origin + "../../pages/products/updated gilrs";
let profile = origin + "../../pages/products/my profile.html";
let orders = origin + "../../pages/products/owner_appicants.html";
let reviews = origin + "../../pages/homepage/review.html";
let form = origin + "../pages/homepage/form.html"


let customer_page =
`<div class="header">
<div id="container">
    <nav>
        <ul>
        <div class="magic">
<a href= "${logo_path}"> <img class="logo" src= "${logo}" alt="logo" /> </a></div>

<li><a href="#">Boys/Girls</a>
                          <ul>
 
        <li><a href = "${both_gender_pg}"><span class="Both"> Both Gender </span> </a> </li>
        <li> <a href= "${boys_pg}"><span class="Boys"> Boys PG </span> </a></li>
      </ul>
  
  <div class="menu">
    
   <ul>
           <li> <a href = "${girls_pg}"><span class="girls"> Girls PG </span> </a></li>
           <li> <a href= "${profile}"> <i class="fa-solid fa-circle-user"></i></a></li>
    </ul>
     </div>
 </div>
`;

let seller_page = 
`
<a href= "${logo_path}"> <img class="logo" src="${logo}" alt="logo" /> </a>

  <div class="nav">
     
        <li><a href= "${orders}"><i class="fa-solid fa-bag-shopping"></i></a></li>
       
        <li><a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a></li>
        <li onclick="Logout(event)"><h4>Logout</h4></li>
     
  </div>
  <div class="menu">
    
    <i class="fa-solid fa-bars"></i>               
     <div class="menu-list">
             <a href="${form}"><span class="form">Form</span></a>
             <a href="${reviews}"><span class="reviews">Reviews</span></a>
             <a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a>
            <span class="login" onclick = "logout()"> Log out </span> 
    
     </div>
 </div>
`;


      function header() {

            let userId = JSON.parse(localStorage.getItem("uniqueID"));
            let userlogin = document.getElementById("userLogin");

            if (!userId) {
            userlogin.innerHTML = customer_page;
            }
            else {
            userlogin.innerHTML = seller_page;
            }


      }


      
      function Logout(e){
        alert("are you sure to logout");
       
        localStorage.removeItem("userId")
        window.location.href="/index.html";

       }
    