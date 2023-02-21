import React, {useState} from 'react';
import "./css/NavBar.css";
// class NavBar  extends React.Component {
 
  
  export default function NavBar()  {
      //Almacenamos el imput en un estado 
      // const [searchTerm, setSearchTerm] = useState('');
      // const [filter, setFilter] = useState('');
    
      // const handleSearchChange = (e) => {
      //   setSearchTerm(e.target.value);
      // };
    
      // const handleFilterChange = (e) => {
      //   setFilter(e.target.value);
      // };
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   // make API call with searchTerm and filter
      // };
  	  return (
          <div className='row'>
            <div className='container'>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark col-12">
                    <img src =  '../componentes/img/logoo.jpg'/> 
                    <a className="navbar-brand" src="../componentes/img/logoo.png"> &nbsp; &nbsp;    Livit</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Nosotros</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Ingresar</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Registarte</a>
                          </li>
                      </ul>
                      
                        {/* <form className="form-inline mt-2 mt-md-0">
                              <label>
                                Buscar:
                                <input type="text" value={searchTerm} onChange={handleSearchChange} />
                              </label>
                              <label>
                                Filtros:
                                <select value={filter} onChange={handleFilterChange}>
                                <option value=""></option>
                                <option value="precio">Precio</option>
                                <option value="rating">Rankin</option>
                                </select>
                              </label>
                            <input type="submit" value="Buscar" />
                                      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
                        {/* </form> */} */
                    </div>          
                </nav>
            </div>
          </div>
      )
   }
  
  



