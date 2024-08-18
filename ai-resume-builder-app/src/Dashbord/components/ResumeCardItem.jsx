import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to={'/dashbord/resume/' + resume.resumeId + '/edit'}> {/* Ajouter un lien pour rediriger l'utilisateur vers la page d'édition du CV  */}
      <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary cursor-pointer'>
        <Notebook />
      </div>
      <h2 className='text-center my-2'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem
