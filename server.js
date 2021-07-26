const express = require('express')
var path = require('path');
const app = express()

const port = 3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function compileEjsTemplate(name, template) {
    const compiledTemplate = ejs.compile(template, {
        client: true,
        outputFunctionName: name
    });
    return function compileEjsTemplate(req, res, next) {
        res.locals.compiledEjsTemplates = res.locals.compiledEjsTemplates || {};
        res.locals.compiledEjsTemplates[name] = compiledTemplate.toString();
        return next();
    };
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use(require('./routes'));