import { defineStore } from 'pinia';

export const usePetfilmStore = defineStore('petfilmStore', {
  state: () => ({
    counter: 1,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});