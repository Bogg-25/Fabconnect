import { useState, useCallback } from 'react';

const defaultProfile = {
  // HEADER
  coverPhoto: null,
  profilePhoto: null,
  name: '',
  location: '',
  accountType: 'university', // 'university' | 'professional' | 'startup' | 'individual'

  // STATS
  rating: null,              // 0-5
  completedWorks: 0,
  averageDelay: '',          // e.g. "3 jours"

  // À PROPOS
  bio: '',

  // TECHNOLOGIE
  technologies: [],

  // MATÉRIAUX
  materials: [],

  // AVIS RÉCENTS
  reviews: [
    {
      id: 'default-rev-1',
      clientName: 'Tech Innovations SA',
      comment: 'Excellent travail, les pièces en SLS sont d\'une précision redoutable !',
      rating: 5,
    }
  ],

  isPublic: true,
};

export function useProfile() {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('fabconnect_profile');
      return saved ? JSON.parse(saved) : defaultProfile;
    } catch { return defaultProfile; }
  });

  const updateProfile = useCallback((partial) => {
    setProfile(prev => {
      const next = { ...prev, ...partial };
      // Only set in localStorage on "save", or do it immediately here?
      // The instructions say "The admin form saves data that is rendered... Save to localStorage key: 'fabconnect_profile'"
      // But typically the user clicks "Enregistrer" to save. We'll update the state here, and then we'll save to local storage immediately so it keeps it fresh, or we can export a save method.
      // Wait, snippet exactly required:
      localStorage.setItem('fabconnect_profile', JSON.stringify(next));
      return next;
    });
  }, []);

  return { profile, updateProfile };
}
