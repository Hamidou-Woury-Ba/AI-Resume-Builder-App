import React, { useEffect, useState } from 'react'
import AddResume from './components/addResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../Service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem'

function Dashbord() {

  const user = useUser() // Récupérer les informations de l'utilisateur connecté
  const [resumeList, setResumeList] = useState([]) // Définir un état pour stocker la liste des CV de l'utilisateur connecté

  // Appeler la fonction GetResumesList lorsqu'on charge le composant Dashbord pour récupérer la liste des CV de l'utilisateur connecté 
  useEffect(() => {
    user && GetResumesList() // Vérifier si l'utilisateur est connecté avant d'appeler la fonction GetResumesList
  }, [user]) // Mettre à jour le composant lorsque l'utilisateur change

  // Fonction pour récupérer la liste des CV de l'utilisateur connecté  
  const GetResumesList = () => {
     GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => { 
       setResumeList(resp.data.data) // Mettre à jour la liste des CV de l'utilisateur connecté en utilisant la réponse de l'API Strapi
     })
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My resume</h2>
      <p>Start creating AI resume to your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10  gap-5'>
        <AddResume />
        { // Parcourir la liste des CV de l'utilisateur connecté et afficher chaque CV en utilisant le composant ResumeCardItem
          resumeList.length > 0 && resumeList.map((resume, index) => (
            <ResumeCardItem key={index} resume={resume} /> // Afficher les CV de l'utilisateur connecté en utilisant le composant ResumeCardItem 
          ))
        }
      </div>
    </div>
  )
}

export default Dashbord
