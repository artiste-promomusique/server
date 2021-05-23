const axios = require('axios');

const pingApp = async () => {
    const options = {
        method: 'GET',
        withCredentials: true,
        url: 'https://artiste-promomusique.vercel.app/api/analytics/youtubeOrders'
    };
    axios(options)
        .then((response) => {
            console.log(response.data);
            console.log('oki doki!!!');
        }).catch((error) => {
            console.log('error!', error)
        });
    return 'done!!';
};

pingApp();
