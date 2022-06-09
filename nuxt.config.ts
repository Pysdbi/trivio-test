import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modern: true,
    render: { http2: { push: true, pushAssets: null } },
    css: [ "@/assets/styles/root.css" ],
})
