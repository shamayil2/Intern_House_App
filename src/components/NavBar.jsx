import {Link,NavLink} from "react-router-dom"
const NavBar = () => {

    return(
        <>
        <div class=" bg-primary">
         <nav class=" container navbar navbar-expand-lg ">
  <div class="container-fluid  ">
    <a  class="navbar-brand text-light"  >Intern House</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav text-light">
        <Link to="/"><a class="nav-link text-light" aria-current="page" href="#">Job Postings</a></Link>
       <Link to="/postjob"> <a class="nav-link text-light"  href="#">Post a Job</a></Link>
      </div>
    </div>
  </div>
</nav> 
        </div>
    
        </>
    )

}

export default NavBar;