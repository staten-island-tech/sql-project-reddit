import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'store',
  state: () => {
    currentUser: null
  },
  actions: {
    getUser(json) {
      this.currentUser = json
    },
    logOut() {
      this.currentUser = null
    }
  }
})
