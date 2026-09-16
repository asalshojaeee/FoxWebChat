


import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast";




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
    },
    signUp: async (data) => {


        set({ isSigningUp: true })




        try {
            const res = await axiosInstance.post("/auth/signup", data)

            set({ authUser: res.data })
            toast.success("Account created successfully")


        }
        catch (error) {
            toast.error(error.message)
        } finally {
            set({ isSigningUp: false })
        }

    },


    logout: async () => {



        try {


            await axiosInstance.post("/auth/logout")
            set({ authUser: null })
            toast.success("Logged out successfully")

        }
        catch (err) {
            toast.error(err.message)

        }

    },


    login: async (data) => {
        set({ isLoginigIn: true })
        try {
            const res = await axiosInstance.post("/auth/login", data)
            set({ authUser: res.data });
            toast.success("Logged in successfully")

            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoginigIn: false })
        }
    },


    updateProfile: async (file) => {

        const formData = new FormData()

        formData.append("profilePic", file)

        set({ isUpdatingProfile: true })

        try {

            const res = await axiosInstance.put(
                "/auth/profile",
                formData
            )

            set({
                authUser: res.data
            })

            toast.success("Profile updated successfully")

        } catch (error) {

            console.log(
                "error in update profile:",
                error.response?.data || error
            )

            toast.error(
                error.response?.data?.message ||
                "Profile update failed"
            )

        } finally {

            set({
                isUpdatingProfile: false
            })

        }
    }
}))