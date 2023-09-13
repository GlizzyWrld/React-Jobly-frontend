import React, {useState} from 'react'

//Card for each job that has information about the job
function JobCard({id, title, salary, equity, companyName}) {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  }

  return (
    <div className='job-card'>
       <h4 className="card-title">{title}</h4>
          <p>{companyName}</p>
          {salary && <div>Salary: {salary}</div>}
          {equity !== undefined && <div>Equity: {equity}</div>}
          {applied ? (
            <button disabled>Applied</button>
          ) : (
            <button onClick={handleApply}>Apply</button>
          )}
    </div>
  )
}

export default JobCard