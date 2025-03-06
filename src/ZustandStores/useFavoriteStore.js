import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      // État initial: liste des favoris vide
      favorites: [],
      
      // Ajouter un événement aux favoris
      addToFavorites: (event) => {
        const currentFavorites = get().favorites;
        // Vérifier si l'événement existe déjà dans les favoris
        const exists = currentFavorites.some(fav => fav.id === event.id);
        
        if (!exists) {
          set(state => ({
            favorites: [...state.favorites, event]
          }));
        }
      },
      
      // Supprimer un événement des favoris
      removeFromFavorites: (eventId) => {
        set(state => ({
          favorites: state.favorites.filter(event => event.id !== eventId)
        }));
      },
      
      // Vérifier si un événement est dans les favoris
      isInFavorites: (eventId) => {
        return get().favorites.some(event => event.id === eventId);
      },
      
      // Récupérer tous les favoris
      getAllFavorites: () => get().favorites
    }),
    {
      name: 'favorites-storage', // nom utilisé pour le stockage local
    }
  )
);

export default useFavoriteStore;