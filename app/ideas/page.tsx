import IdeaForm from '@/components/IdeaForm';
import Ideas from '@/components/pages/Ideas'
import model from '@/lib/googleClient';
import React from 'react'

function page() {

    
      
  return (
    <div>
      <Ideas/>
      <div className=''>

      <IdeaForm/>
      </div>
      
    </div>
  )
}

export default page
