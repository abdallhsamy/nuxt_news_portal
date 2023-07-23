const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const config = useRuntimeConfig()

const url = `${config.newsApiBaseUrl}/everything?q=bitcoin&apiKey=${config.newsApiToken}`
    .replace('//', '/')

const defaultFeaturedImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAM1BMVEXr6+urq6vu7u6oqKjDw8PAwMDY2NjV1dXm5uaysrLKysqvr6/f39/Nzc3c3NzS0tK5ubkd/VNiAAACvklEQVR4nO3c2XarIABAUQJqcPb/v7ZGzBzArGoEPPvpPrCaniQCdbhCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSJvVW5N5pS+is3Eqm947zkt1JnbaiTs3efV7lZvWXN6DcO8+n2zJ/1O0d6CbP2337L1Sxd+FnUsxTdG/66/UF3C+7QV1Nv2Um15erUPtl8TLnj/3rv0i4/fp1zj9Y/9ucf7D+4nXOP2R/PVyUT/1N57H8RULvV/ml2az/1/7Bu54Pi3f0Efa/HRfv1HnpkRJfv+wX9Lf0LxNvv/rsud++75tfJNr+MvtseOzXxdmin9eIWPtVZflcW3Xv17XlS3IxTC8Sbb9lL/TYb/5tnSOm5qT7K2f/tEYm3e/5/FPvF9px+Kt62iMm3S9039r08/ik+x3r/3VA2v1e9NOfcP+xj3/ZZblN1pghKfc3x17/D7//PXq/80yRms4ApNzvPlOcm/FJ9zuuFJjpP/V+L/rppz/C/mpJv7S/DTLu+c96L5BZ2+f+zH7bT91Gvf93m/c/7iul002PSfcnvP89bv/4V62/v7v/BNuQWL//4xdg8N3R3c4/orIPGfpI5z9xvyvURtyubttHiljXv3XRTz/9cfVL3Xjc5j/7EB3v/De4Tms/3NsiROkYE+v5r+X3P3rOf0Z9/4unP+H979H73Xe1zMwDfc7rX6dIr3+NWZXl3seb+XlG2dmHVGZMjP2uq9pPN7cmef17XfQH22+efyqn/sx1zvc/Au5vzLncajyIu2khU4X3wP9euP3z1Vs1VPm8ZGfV6lrzZFWI/beHntV1G7Ng4f/aKdh+IXL/Tm8dKszn33X5ozegDvR/wNDDT96A5ZdLf67w/7H//ymg9f8ee5FSd7ZnmFZSiGA/fWODVf/R3nkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKzvD7/USoX++wplAAAAAElFTkSuQmCC`
export default defineEventHandler(async () => {

    const response = await $fetch(url)
        .then(res => {
            res.articles = res.articles.map(article => ({
                ...article,
                favorites: randomNumber,
                shares: randomNumber,
                comments: randomNumber,
                featured_image: article.urlToImage ?? defaultFeaturedImage,
                categories: [article.source.name]
            }));

            return res
        })
        .catch(error => {
            console.log('error')
            return {
                totalResults: 0,
                articles: [],
            };
        })

    return response;
})
