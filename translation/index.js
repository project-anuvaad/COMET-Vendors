const translationVendor = require("./vendors/translation");

class TranslationService {
  translateText(text, targetLang) {
    return new Promise((resolve, reject) => {
      translationVendor.google
        .translateText(text, targetLang)
        .then((translatedText) => {
            return resolve(translatedText)
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }
}

module.exports = new TranslationService();
