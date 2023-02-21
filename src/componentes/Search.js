
import React, {useState} from 'react';

import "./css/Search.css";

const Search = () => {
  //Almacenamos el imput en un estado 
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make API call with searchTerm and filter
  };

  return (
     <div className='container'>
            <form className ='box' onSubmit={handleSubmit}>
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
                  {/* <input type="submit" value="Buscar" /> */}
                  <a class="btn btn-secondary" href="{% url 'Form'  %}" role="button">Buscar</a>
            </form>
        
     </div>
  );
};

export default Search;