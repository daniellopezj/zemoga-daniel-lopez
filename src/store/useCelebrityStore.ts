import { defineStore } from 'pinia';

import type { Celebrity } from '~/types/general.types';
import { persistenceData, getDataFromStorage } from '@/composables/usePersistence'

export const useCelebrityStore = defineStore('celebrityStore', () => {

  const celebrities: Ref<Celebrity[]> = ref([]);

  const fetchCelebrities = () => {
    celebrities.value = getDataFromStorage()
    return celebrities.value;
  }

  const vote = (celebrity: Celebrity, type: 'like' | 'dislike' | '') => {
    if (type === 'like') {
      celebrity.votes.positive++;
    }
    if (type === 'dislike') {
      celebrity.votes.negative++;
    }
    updateCelebrity(celebrity);
  }

  const updateCelebrity = (celebrity: Celebrity) => {
    const index = celebrities.value.findIndex(c => c.id === celebrity.id);
    celebrities.value[index] = celebrity;
    persistenceData(celebrities.value);
  }

  return {
    celebrities,
    vote,
    fetchCelebrities
  }
})