import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: ''
    }),
    getters: {},
    actions: {
        getInfoUser(email) {
            axios.get(`/api/users/${email}`)
                .then(res => {
                    this.user = res.data;
                })
        }
    }
});
