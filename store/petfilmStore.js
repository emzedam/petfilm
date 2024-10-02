import { defineStore } from 'pinia';
import api from '@/axios/index';

export const usePetfilmStore = defineStore('petfilmStore', {
  state: () => ({
    counter: 1,
    theme: "dark"
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    change_theme_mode() {
      this.theme == "dark" ? this.theme = "light" : this.theme = "dark"
    },
    async get_initializ_data() {
      try {
        const response = await api.get('/init');
        return {
          "status": 200,
          "data": response.data
        }
      } catch (error) {
        return {
          "status": 500,
          "message": error.message || 'Failed to fetch data'
        }
      }
    }
  },
});