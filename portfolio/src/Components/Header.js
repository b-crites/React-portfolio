import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Header.css';
import NavTabs from "./Navigation";




export default function Header(){
  
    return(
        <>
        <nav className="navbar navbar-expand-lg fs-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="./">Brandon Crites</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavTabs />
  </div>

</nav>
        </>
    );
}
