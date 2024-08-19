import React, { useEffect, useState } from 'react'
import AddResume from './components/addResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../Service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem'

function Dashbord() {

  const user = useUser() // Récupérer les informations de l'utilisateur connecté
  const [resumeList, setResumeList] = useState([]) // Définir un état pour stocker la liste des CV de l'utilisateur connecté
  const [dataLoaded, setDataLoaded] = useState(false) // Nouvel état pour vérifier si les données ont été chargées

  // Appeler la fonction GetResumesList lorsqu'on charge le composant Dashboard pour récupérer la liste des CV de l'utilisateur connecté 
  useEffect(() => {
    if (user && !dataLoaded) { // Vérifier si l'utilisateur est connecté et si les données n'ont pas encore été chargées
      GetResumesList()
    }
  }, [user, dataLoaded]) // Mettre à jour le composant lorsque l'utilisateur change ou que les données sont chargées

  // Fonction pour récupérer la liste des CV de l'utilisateur connecté  
  const GetResumesList = () => {
     GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => { 
       setResumeList(resp.data.data) // Mettre à jour la liste des CV de l'utilisateur connecté en utilisant la réponse de l'API Strapi
       setDataLoaded(true) // Indiquer que les données ont été chargées
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
