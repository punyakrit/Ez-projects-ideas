import IdeaForm from '@/components/IdeaForm';
import Ideas from '@/components/pages/Ideas'
import authOptions from '@/lib/authOptions';
import model from '@/lib/googleClient';
import { getServerSession } from 'next-auth';
import React from 'react'

async function page() {

    const session = await getServerSession(authOptions);
      
  return (
    <div>
      <Ideas/>
      <div className=''>

      <IdeaForm session={session}/>
      </div>
      
    </div>
  )
}

export default page
