const { Translate } = require('@google-cloud/translate');
const { googleProjectId, googleClientEmail, googlePrivateKey } = require('./config');

const translateClient = new Translate({ projectId: googleProjectId, credentials: { client_email: googleClientEmail, private_key: googlePrivateKey } });


function translateText(text, targetLang) {
    return new Promise((resolve, reject) => {
        translateClient.translate(text, targetLang)
        .then((res) => {
            resolve(res[0])  
        })
        .catch(reject);
    })
}

setTimeout(() => {
    translateText('hello there', 'ar')
    .then((r) => {
        console.log('transaltion test', r);
    })
    .catch(err => {
        console.log('TRANSLATION NOT WORKING', err);
    })
}, 5000);

module.exports = {
    translateText,
}