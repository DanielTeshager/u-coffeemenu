/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-ht91p085.us', // the auth0 domain prefix
    audience: 'protones', // the audience set for the auth0 app
    clientId: '10aH57S9A0QVZyoQqyX0FqIcFif9Sn1Q', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8101', // the base url of the running ionic application. 
  }
};
