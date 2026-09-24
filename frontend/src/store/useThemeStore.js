import { create } from 'zustand'




export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-item" || "luxury"),
    setTheme: (theme) => {
        localStorage.setItem("chat-item", theme)
        set({ theme })

    }
}))