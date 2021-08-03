@ECHO OFF
cd ..
cd ..
cd sistemafederal
@REM export NODE_ENV=production
@REM nodemon server.js

set NODE_ENV=test
node server.js

PAUSE