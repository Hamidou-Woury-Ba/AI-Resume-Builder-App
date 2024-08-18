import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../Service/GlobalApi'
import { useUser } from '@clerk/clerk-react'


function AddResume() {

  const [openDialog, setOpenDialog] = useState(false)
  const [resumeTitle, setResumeTitle] = useState()
  const { user } = useUser() // Récupérer les informations de l'utilisateur connecté
  const [loading, setLoading] = useState(false) // Définir l'état de chargement pour le bouton "Create"

  // Créer un nouveau CV lorsqu'on clique sur le bouton "Create" dans la boîte de dialogue 
  const onCreate = async () => {
    setLoading(true) // Activer l'état de chargement pour le bouton "Create" 
    const uuid = uuidv4() // Générer un identifiant unique

    // Créer un objet contenant les données du CV à envoyer à l'API Strapi  
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName
      }
    } 

    // Appeler la fonction createNewResume de l'API GlobalApi pour créer un nouveau CV
    GlobalApi.createNewResume(data).then(resp => {
      console.log(resp)
      if (resp) {
        setLoading(false) // Désactiver l'état de chargement pour le bouton "Create"
      }
    },
      (error) => {
        setLoading(false) // Désactiver l'état de chargement pour le bouton "Create
      }
    )
  }

  return (
    <div>
      <div
        className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
        onClick={() => setOpenDialog(true)} // Ouvrir la boîte de dialogue lorsqu'on clique sur le bouton "Create"
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className='my-2'
                placeholder="Ex. full stack resume"
                onChange={(e) => setResumeTitle(e.target.value)} // Mettre à jour le titre du CV lorsqu'on tape dans le champ de texte
              />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
              <Button
                onClick={() => setOpenDialog(false)} // Fermer la boîte de dialogue lorsqu'on clique sur le bouton "Cancel"
                variant="ghost"
              >
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading} // Désactiver le bouton "Create" si le champ de titre est vide ou si l'état de chargement est activé
                onClick={() => onCreate()} // Appeler la fonction onCreate lorsqu'on clique sur le bouton "Create"
              >
                {
                  loading ?  // Vérifier si l'état de chargement est activé
                    <Loader2 className='animate-spin' /> : // Afficher le spinner de chargement lors de la création du CV
                    'Create' // Afficher le texte "Create" sur le bouton
                }
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddResume
