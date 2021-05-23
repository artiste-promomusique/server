const axios = require('axios');

axios({
    method: 'GET',
    url: 'https://artiste-promomusique.vercel.app/api/analytics/youtubeOrders'
}).then((response) => {
    console.log(response);
    console.log('oki doki!!');
}).catch((error) => {
    console.log('error!!', error)
});
