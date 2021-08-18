module.exports = {
  apps: [
    {
      name: "server",
      script: "../../../var/www/html/server.js",
      watch: true,
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
}