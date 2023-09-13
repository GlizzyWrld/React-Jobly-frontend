import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../../api';
import JobCardList from '../jobs/jobCardList';

//Shows information about a company and shows a list of jobs from that company
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(function getCompaniesAndJobs() {
    async function getCompany() {
      const response = await JoblyApi.getCompany(handle);
      console.log('here',response);
      setCompany(response);
    }
    getCompany();
  }, [handle]);

  return (
    <div>
    {company && (
      <>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </>
    )}
  </div>
);
}

export default CompanyDetail