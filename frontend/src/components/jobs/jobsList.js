import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";
import JobCardList from "./jobCardList";
import Search from '../../helpers/searchForm';

//Shows a list of all the jobs from the API
function JobsList() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function getAllJobs() {
      try {
        const allJobs = await JoblyApi.getJobs();
      setJobs(allJobs);
      } catch (error) {
        console.error(error);
      }
      
    }
    getAllJobs();
  }, []);

  async function searchJobs(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <Search searchFor={searchJobs} />
      {jobs?.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <span>Whoops! No results found!</span>
      )}
    </div>
  );
}

export default JobsList;
