module.exports.findBySlug = function (dataCertificate, findValue) {
    let foundedValue = '';
    for(let i=0; i<dataCertificate.length; i++ ) {
        if (dataCertificate[i].slug === findValue) {
            foundedValue = dataCertificate[i].value;
        }
    }
    return foundedValue;
}