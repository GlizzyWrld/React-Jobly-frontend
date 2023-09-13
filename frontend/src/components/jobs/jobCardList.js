import React from 'react';
import JobCard from './jobCard';

//Shows a list of job cards
function JobCardList({jobs}) {
  return (
    <div>
        {jobs.map(j => (
            <JobCard
            key={j.id}
            id={j.id}
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            companyName={j.companyName}
            />
        ))}
    </div>
  )
}

export default JobCardList