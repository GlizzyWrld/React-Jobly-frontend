import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import CompanyCard from "./companyCard";
import JoblyApi from "../../api";
import Search from "../../helpers/searchForm";

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    async function getAllCompanies() {
      try {
        const allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
      } catch (error) {
        console.error(error);
      }
      
    }
    getAllCompanies();
  }, []);

  async function search(handle) {
    let searchedCompanies = await JoblyApi.getCompany(handle);
    setCompanies(searchedCompanies);
  }

  return (
    <div>
      <Search searchFor={search} />
      {companies?.length ? (
        <div className="company-list">
          {companies.map((c) => (
           <Link to={`/companies/${c.handle}`} key={c.handle}>
            <CompanyCard className="description-card"
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
           </Link> 
            
          ))}
        </div>
      ) : (
        <p>Oh no!, no results were found!</p>
      )}
    </div>
  );
}

export default CompaniesList;
