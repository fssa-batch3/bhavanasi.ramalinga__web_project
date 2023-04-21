let origin = window.location.origin;

let logo_path = origin + "/pages/homepage/rent.html";
let logo = origin + "/assets/images/Screenshot__17_-removebg-preview.png ";
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
      <span>Login</span>
          <div class="dropdownlist">
              <div><a href="${register}">Register</a></div>
              <div><a href="${login}">Login </a></div>
          </div>
  </div>
</header>
`

let after_login =
  `
  <header>
    <div class="header">
      <div id="container">
        <nav>
          <ul>
            <div class="magic">
              <li>
                <img src="../../assets/images/Screenshot__17_-removebg-preview.png" alt="photo" height="70px" width="100%">
              </li>
            </div>
            <li><a href="../../pages/products/updated Boys.html">Boys pgs</a></li>
            <li><a href="../../pages/products/updated for girls.html">Girls pgs</a></li>
            <li><a href="../../pages/products/updated for both.html">Both Gender living pg</a></li>
            <li><a href="../orders/booked_list.html">My page</a></li>                                           
            <li><a href="../../pages/homepage/my profile.html"> <i class="fa fa-user"></i></a></li>
          </ul>         
        </nav>
      </div>
    </div>
  </header>
`

let seller_page =
  `
  <header>
  <div class="header">
    <div id="container">
      <nav>
        <ul>
          <li>
            <img src="../../assets/images/Screenshot__17_-removebg-preview.png" alt="photo" height="70px" width="100%">
          </li>
          <li><a href="../../pages/products/form.html">Add pg</a></li>
          <li><a href="../orders/owner_applicants.html">User request</a></li>
          <li><a href="../products/seller_product.html">My page</a></li>
          <li><a href="../../pages/homepage/my profile.html"><i class="fa fa-user"></i></a></li>
        </ul>
      </nav>
    </div>
  </div> 
</header>
`;

let userId = JSON.parse(localStorage.getItem("userId"));
let typeOfCus = ""
// console.log(userId);
if (userId) {
  user_data = JSON.parse(localStorage.getItem("user_cred"));

  let gettingemail = user_data.filter(e => e.email == userId);

  // console.log(type);
  let filtetering = gettingemail[0]["customer_or_owner"];
  // console.log(typeOfCus);




    if (filtetering == "Customer") {

      // console.log(after_login);
      document.body.insertAdjacentHTML("afterbegin", after_login);
      const logoutBtn = document.querySelector("#logout");
      logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("userId");
        document.body.innerHTML = header_before_login
      });

    }
    else if (filtetering == "Owner") {


      document.body.insertAdjacentHTML("afterbegin", seller_page);
      const logoutBtn = document.querySelector("#logout");
      logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("userId");
        document.body.innerHTML = header_before_login
      });
    }

}

else {


  document.body.insertAdjacentHTML("beforebegin", before_login);
  const logoutBtn = document.querySelector("#logout");
  logoutBtn?.removeEventListener("click", () =>
    document.body.innerHTML = header_after_login);
  localStorage.removeItem("userId");

}


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



function Logout(e) {
  alert("are you sure to logout");

  localStorage.removeItem("userId")
  window.location.href = "/index.html";

}
