const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
axios: {
  // baseUrl: 'http://ipdc-backend.test/api/v1/'
  // baseUrl: 'https://api.ipdc.com/api/v1/'
  baseUrl: 'http://127.0.0.1:8000/api'
  // baseUrl: 'http://localhost:8000/api/v1/'

}
