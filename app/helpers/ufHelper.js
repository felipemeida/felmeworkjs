const ufList = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

module.exports.ufToOrderNumber = function (uf) {
    if (uf === undefined) {
        throw new Error('uf not defined at ufToOrderNumber');
    }
    return ufList.findIndex(ufOfList => ufOfList === uf);
}