const axios = require('axios').default;

const pingApp = async () => {
    axios({
        method: 'get',
        url: 'https://artiste-promomusique.vercel.app/api/analytics/youtubeOrders',
        withCredentials: true
    }).then((response) => {
        console.log(response);
        console.log('oki doki!!!');
    }).catch((error) => {
        console.log('error!!', error)
    });
};

pingApp();