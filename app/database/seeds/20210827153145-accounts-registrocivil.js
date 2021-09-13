'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Accounts', [
          { name: 'ANDREIA', user: 'andrearuy60@gmail.com', email: 'andrearuy60@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ALESSANDRO', user: 'miguelmansoalessandro@gmail.com', email: 'miguelmansoalessandro@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'IRACY', user: 'iracysantanadearaujo@gmail.com', email: 'iracysantanadearaujo@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ANTONIO', user: 'aantonioheronildesdossantos@gmail.com', email: 'aantonioheronildesdossantos@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'CLAUDIA', user: 'fariaclaudia746@gmail.com', email: 'fariaclaudia746@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MARIA', user: 'joserosam89@gmail.com', email: 'joserosam89@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'DIVÃ', user: 'galvaodivaape@gmail.com', email: 'galvaodivaape@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ELIANE ', user: 'elianecristinaelianecristinara@gmail.com', email: 'elianecristinaelianecristinara@gmail.com', password: '10203040Pa#', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'FRANCISCO', user: 'fjosedeassis9@gmail.com', email: 'fjosedeassis9@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'CAIO ', user: 'caioleal489@gmail.com', email: 'caioleal489@gmail.com', password: 'Caio12345.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'CAMILA ', user: 'douradocamila94@gmail.com', email: 'douradocamila94@gmail.com', password: '951753Pa11*', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'FELIPE ', user: 'felipe.almeida.7643@gmail.com', email: 'felipe.almeida.7643@gmail.com', password: 'Fel12345.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'YANKA ', user: 'yanka.acavalcante@gmail.com', email: 'yanka.acavalcante@gmail.com', password: 'Yanka28*', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MATHEUS', user: 'Mathueus202018@gmail.com', email: 'Mathueus202018@gmail.com', password: '951753Pa11!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'THAYSE ', user: 'thayserayane97@gmail.com', email: 'thayserayane97@gmail.com', password: 'Thayse97@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'LIDIA ', user: 'lidiakpm@gmail.com', email: 'lidiakpm@gmail.com', password: '171192Cf.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MEL', user: 'melsofiasilva726@gmail.com', email: 'melsofiasilva726@gmail.com', password: 'Mel@12345', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'YKIA ', user: 'ikiabatistlel@gmail.com', email: 'ikiabatistlel@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'JOSÉ RICARDO', user: 'santosdesouzaj50@gmail.com', email: 'santosdesouzaj50@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MORGANA', user: 'morganasalesbarbosamorgana@gmail.com', email: 'morganasalesbarbosamorgana@gmail.com', password: '951753Pa11#', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'EVANI', user: 'evanievanimatosfigueiredo@gmail.com', email: 'evanievanimatosfigueiredo@gmail.com', password: '951753Pa..', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MARCIA ', user: 'borgesmarcia830@gmail.com', email: 'borgesmarcia830@gmail.com', password: '10203040Pa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MARIA HELENA', user: 'andrademariahelena84@gmail.com', email: 'andrademariahelena84@gmail.com', password: '10203040Pa@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'IVANIR', user: 'ivanirm047@gmail.com', email: 'ivanirm047@gmail.com', password: '951753Pa..', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'WANDER ', user: 'luciareisrocha814@gmail.com', email: 'luciareisrocha814@gmail.com', password: '971753Pa11@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'DENISE ', user: 'amorise122@gmail.com', email: 'amorise122@gmail.com', password: '95175311Pa.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MAGALI', user: 'nsilverasimoes@gmail.com', email: 'nsilverasimoes@gmail.com', password: '95175311Pa.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'FERNANDO HENRIQUE', user: 'fefezampieri971@gmail.com', email: 'fefezampieri971@gmail.com', password: '908870Pa?', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MARCELLO', user: 'marcellomaga2@gmail.com', email: 'marcellomaga2@gmail.com', password: '9899776Ta#', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ILZA ADVOGADA', user: 'imarinadvogada@gmail.com', email: 'imarinadvogada@gmail.com', password: '79787978Sa!!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'DEFENSORA', user: 'Mariadefensora123@gmail.com', email: 'Mariadefensora123@gmail.com', password: '10101022oP@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'LUIZ PATRONO', user: 'wienskoskipatrono08@gmail.com', email: 'wienskoskipatrono08@gmail.com', password: '90900001Pk*', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ADG ADVOCACIA', user: 'PuggedoADGadvocacia@gmail.com', email: 'PuggedoADGadvocacia@gmail.com', password: '10203040PPa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'MAGNÓLIA', user: 'mitanmagnolia@gmail.com', email: 'mitanmagnolia@gmail.com', password: '102030pa!L', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ANA PAULA JURIDICO', user: 'Paulanajuridico465@gmail.com', email: 'Paulanajuridico465@gmail.com', password: '951753Pa11?', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'JOABE TUTOR', user: 'joabestutor789@gmail.com', email: 'joabestutor789@gmail.com', password: '951753Pa11!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'THAYNARA ADVOGADA', user: 'advogadathaynara102@gmail.com', email: 'advogadathaynara102@gmail.com', password: '951753Pa11@1', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'OSVALDO PATRONO', user: 'patronocruz111@gmail.com', email: 'patronocruz111@gmail.com', password: '951753Pa11!!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'WILLIAM JURISCONSULTO', user: 'Souzajurisconsulto89@gmail.com', email: 'Souzajurisconsulto89@gmail.com', password: '951753Pa11..', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'ZAQUEL ADVOGADO', user: 'Advogzaquelima@gmail.com', email: 'Advogzaquelima@gmail.com', password: '951753pA12.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'PATRICK LEGISTA', user: 'legistaJustino546@gmail.com', email: 'legistaJustino546@gmail.com', password: '79787978Sa!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'RODOLFO ROGADOR', user: 'rogador891@gmail.com', email: 'rogador891@gmail.com', password: '79787978Sa!!', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'CARLOS JURISTA', user: 'Castrojurista798@gmail.com', email: 'Castrojurista798@gmail.com', password: '951753pA12.', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'GILMAR ORAGO', user: 'oragoCosta98@gmail.com', email: 'oragoCosta98@gmail.com', password: '951753pA11@', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          { name: 'CATARINA ADVOCACIA', user: 'Catarinadvocaciasp11@gmail.com', email: 'Catarinadvocaciasp11@gmail.com', password: '951753Pa11?', type: 'eletronica-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          // { name: 'JURIDICO FEDERAL', user: 'juridicofederal2@gmail.com', email: 'juridicofederal2@gmail.com', password: '10203040Pa!', type: 'papel-registrocivil', createdAt: new Date(), updatedAt: new Date() },
          // { name: 'JUS FEDERAL', user: 'jusfederal1@gmail.com', email: 'jusfederal1@gmail.com', password: 'AP951753pa11!', type: 'papel-registrocivil', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
