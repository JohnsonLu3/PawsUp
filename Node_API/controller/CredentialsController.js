const credentials = {
    client: {
      id: process.env.API_PETFINDER,
      secret: process.env.API_PETFINDER_SECRET
    },
    auth: {
      tokenHost: 'https://api.petfinder.com/v2/oauth2/token'
    }
  };

export const oauth2 = require('simple-oauth2').create(credentials);