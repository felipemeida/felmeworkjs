const findBySlug = function (dataCertificate, findValue) {
    let foundedValue = '';
    for (let i = 0; i < dataCertificate.length; i++) {
        if (dataCertificate[i].slug === findValue) {
            foundedValue = dataCertificate[i].value;
        }
    }
    return foundedValue;
}

const processCertificate = function (dataCertificate) {
    return dataCertificate.data.datas.reduce((accumulator, currentValue) => {
        if (Object.keys(currentValue).length !== 0) {
            let slug = currentValue.slug.replace('-', '_');
            accumulator[slug] = currentValue;
            return accumulator;
        } else {
            return accumulator;
        }
    }, {});
}

module.exports = {
    findBySlug,
    processCertificate
}