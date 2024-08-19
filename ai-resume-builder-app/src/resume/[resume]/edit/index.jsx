import { ResumeInfoContext } from '@/context/ResumeInfo'
import dummy from '@/data/dummy'
import FormSection from '@/resume/components/FormSection'
import ResumePreview from '@/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditResume() {

  const param = useParams()

  const [resumeInfo, setResumeInfo] = useState(dummy) // Définir un état pour stocker les informations du CV en cours de création ou d'édition  

  useEffect(() => {
    setResumeInfo(dummy) // Mettre à jour les informations du CV en cours de création ou d'édition en utilisant les données de l'objet dummy
  })

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section */}
        <FormSection />

        {/* Preview Section */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
