import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

// Créer une instance d'axios pour effectuer des requêtes HTTP vers l'API Strapi 
const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/', // Corriger l'URL de base
    headers: { 
        'Content-Type': 'application/json', // Définir le type de contenu de la requête
        'Authorization': `Bearer ${API_KEY}` // Ajouter le token d'authentification dans le header
    }
})

const createNewResume = (data) => axiosClient.post('/user-resumes', data); // Créer un nouveau CV en envoyant les données à l'API Strapi

const getUserResumes = (userEmail) => axiosClient.get('/user-resumes?filter[userEmail][$eq]='+userEmail); // Récupérer la liste des CV de l'utilisateur connecté

export default {
    createNewResume,
    getUserResumes 
};
