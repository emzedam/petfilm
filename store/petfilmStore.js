import { defineStore } from 'pinia';
import api from '@/axios/index';

export const usePetfilmStore = defineStore('petfilmStore', {
  state: () => ({
    counter: 1,
    theme: "dark",
    authUser: null
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
    },

    async doRegisterUser(data) {
      try {
        const response = await api.post('/users/register' , data);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        return {
          "status": error.response.status,
          "message": error.response.data.message
        }
      }
    },
    async doLoginUser(data) {
      try {
        const response = await api.get(`/users/send-otp?channel=Phone&receiver=${data.phone_number}`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.message
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async verifyOtpRequest(data) {
      try {
        const response = await api.post(`/users/verify-otp` , data);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.message
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async logout_user(data) {
      try {
        const response = await api.post(`/users/logout` , {
          refresh: data.refresh
        } , {
          headers: {
            Authorization: `Bearer ${data.token}`
          }
        });

        this.authUser = null
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.message
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async get_category_detail(data) {
      try {
        const response = await api.get(`/categories/${data.id}/`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.detail
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async do_search_movie(data) {
      try {
        const response = await api.get(`/videos?search=${data.qstring}`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.message
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async get_movie_detail(data) {
      try {
        const response = await api.get(`/videos/${data.id}/`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.detail
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async favorite_action(data) {
      try {
        const response = await api.post(`/favorites` , {
          video_id: data.video_id
        } , {
          headers: {
            Authorization: `Bearer ${data.token}`
          }
        });

        return {
          "status": response.status,
          "message": response.data.message
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.message
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async getFooterDescription() {
      try {
        const response = await api.get(`/footer-description/`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.detail
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    async getFooterLinks() {
      try {
        const response = await api.get(`/footer-links/`);
        return {
          "status": response.status,
          "data": response.data
        }
      } catch (error) {
        if (error.response && error.response.data) {
          return {
            "status": error.response.status,
            "message": error.response.data.detail
          }
        } else {
          return {
            "status": 500,
            "messages": 'An unknown error occurred.'
          }
        }
      }
    },
    setAuthUser(user) {
      this.authUser = user
    },
    clearAuthUser() {
      this.authUser = null
    }
  },
});