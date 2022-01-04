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
  ]
}