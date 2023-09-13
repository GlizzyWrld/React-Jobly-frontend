import React, {useState} from 'react';

// Search form for companies and jobs
function SearchForm({ searchFor }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim() ||"Enter search term" );
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            name='searchTerm'
            placeholder='Type to search'
            value={searchTerm}
            onChange={handleChange}
            />
            <button type='submit'>
                Search!
            </button>
        </form>
    </div>
  )
}

export default SearchForm