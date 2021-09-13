module.exports = {
  apps: [
      // Instance server
    {
      name: "server",
      script: "../../../var/www/html/server.js",
      watch: true,
      instance_var: 'INSTANCE_ID',
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "test"
      }
    },
    {
      // Fill Certificate on Sistema Federal every minute
      name: 'CRON',
      script: "../../../var/www/html/cron/fillCertificateSistemaFederal.js.js",
      instances: 1,
      exec_mode: 'fork',
      cron_restart: "0-59/1 * * * *",
      watch: true,
      autorestart: false
    },
    {
      // Verifica Saldo digitais das certidoes civis de uma conta a cada 30 minutos
      name: 'CRON',
      script: "../../../var/www/html/cron/verifyMoneyRemainingRegistroCivil.js",
      instances: 1,
      exec_mode: 'fork',
      cron_restart: "*/30 * * * *",
      watch: true,
      autorestart: false
    }
  ]
}