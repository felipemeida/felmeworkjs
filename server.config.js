module.exports = {
  apps: [
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
      name: 'CRON',
      script: "../../../var/www/html/cron/index.js",
      instances: 1,
      exec_mode: 'fork',
      cron_restart: "0-59/1 * * * *",
      watch: true,
      autorestart: false
    }
  ]
}