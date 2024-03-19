// import React from 'react'
// import "../../index.css"
// import "../../Assets/evangadi-logo-blackevaimg.png"

// const Header = () => {
//   return (
//     <section>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
     
//     </section>
//   )
// }
// export default Header



import React from "react";
import logo from "../../Assets/evangadi-logo-blackevaimg.png";
import "../../index.css";

const Header = () => {
  return (
    <section className="section_container">
      <nav className="navbar p-0 navbar-expand-lg   ">
        <div className="container  section_container">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end  fw-semibold"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link " href="#">
                  How it Workes
                </a>
              </li>
              <li className="nav-item lign-items-center ">
                <a className="nav-link" href="#">
                  <button className="btn btn-primary fw-bold px-5 action_btn  ">
                    SIGN IN{" "}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
