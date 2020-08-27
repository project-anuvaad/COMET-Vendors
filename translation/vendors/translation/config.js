module.exports = {
    googleProjectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    googleApiKey: process.env.GOOGLE_CLOUD_API_KEY,
    googleClientEmail: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    googlePrivateKey: process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/\\n/g, '\n')
}