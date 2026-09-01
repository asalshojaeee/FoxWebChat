


import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'




export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoginigIn: false,
    isUploadingProfile: false,
    isCheckinAuth: true,




    checkAuth: async () => {
        try {



            const response = await axiosInstance.get("/auth/check")

            set({ authUser: response.data })


        }
        catch (error) {
            set({ authUser: null })

            console.log(error.message)

        }
        finally {
            set({ isCheckinAuth: false })

        }
    }
}))