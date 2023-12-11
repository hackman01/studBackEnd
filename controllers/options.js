var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;"><h1>IERT, Prayagraj</h1><h2>CSE(A2)</h2></div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    },
    childProcessOptions: {
        env: {
          OPENSSL_CONF: '/dev/null',
        },
      }
};

module.exports = options;