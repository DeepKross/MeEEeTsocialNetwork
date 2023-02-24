import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "359caf97-209f-4b0c-abb2-8bec018c8c0b"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`,{})
            .then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
};

export const navbarAPI = {
    loginUser() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    showProfile(userId) {
        return instance.get(`profile/` + userId);
    },
}