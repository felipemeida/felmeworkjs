const express = require('express');
const path = require('path');
const config = require('config');
const app = express();
const routes = require('./routes/routes.js');
const port = config.get('server.port');

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

app.use(routes);