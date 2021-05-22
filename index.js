const axios = require('axios');

const pingApp = () => {
    axios.get('https://artiste-promomusique.vercel.app/api/analytics/youtubeOrders')
    .then((response) => {
        console.log(response);
        console.log('oki doki');
    });
    return true;
};

pingApp();
