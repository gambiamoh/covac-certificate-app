const config = {
    type: 'app',
    name: 'gm-covac',
    title: 'COVAC Certificate App',
    description: 'Custom DHIS2 App for generation of official COVID-19 Vaccination Certificates',
    id: 'a21eb7c7-f376-4bb9-8b2f-74f19163be44',
    author: 'Baboucarr Ceesay',
    minDHIS2Version: '2.38',
    entryPoints: {
        app: './src/App.js',
    },
}

module.exports = config
