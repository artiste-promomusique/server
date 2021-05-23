const axios = require('axios');

axios({
    method: 'GET',
    url: 'https://artiste-promomusique.vercel.app/api/analytics/youtubeOrders',
    withCredentials: true,
    headers: { "Content-type": "application/json;charset=UTF-8" }
}).then((response) => {
    console.log(response);
    console.log('oki doki!');
}).catch((error) => {
    console.log('error!', error)
});
