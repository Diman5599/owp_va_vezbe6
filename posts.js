const rand = require('./rand.js')

const getKdPosts = () => {
    const postsList = [
        {title: "Хуманитарна акција - Осми март", content: "Позивамо вас да се придружите нашој хуманитарној акцији скупљања новца поводом Међународног дана Жена, који се обележава 8. марта. Овај дан је прилика да показујемо солидарност и подршку женама широм света, као и да се заједно ангажујемо у борби зa родну равноправност и права жена. Новац прикупљен овом акцијом"},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)}
    ];
    return postsList;
}

const getStPosts = () => {
    const postsList = [
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)},
        {title: rand.getRandString(10), content: rand.getRandString(200)}
    ];
    return postsList;
}

module.exports = {
    getKdPosts: getKdPosts,
    getStPosts: getStPosts
}