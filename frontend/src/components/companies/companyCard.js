import React from 'react';

//Shows the basic information about a company will be used for company list
function CompanyCard({name, description, logoUrl, handle}) {

  return (
   
      <div className='company-card'>
        <h4>
            {name}
            {logoUrl && <img src={logoUrl} alt={handle} />} 
        </h4>
        <h6 className='description-card'>{description}{handle}</h6>
      </div>
   
  )
}

export default CompanyCard