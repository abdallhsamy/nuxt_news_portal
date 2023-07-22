// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-api-party'
    ],
    apiParty: {
        endpoints: {
            newsApi: {
                url: process.env.NEWS_API_BASE_URL!,
                // Global headers sent with each request
                headers: {
                    Authorization: `Bearer ${process.env.NEWS_API_TOKEN}`
                }
            }
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "News Portal",
            bodyAttrs: {
                // class: 'bg-white dark:bg-primary_dark'
            }
        },
    },
    // apiKey : '9f5778983e954d628ad8a8c8c70fcf6f'
})
