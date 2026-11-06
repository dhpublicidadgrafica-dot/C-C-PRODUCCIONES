// Hostinger / Node entry file forwarder
// This file ensures compatibility when Hostinger or any Node host looks for `server.js` in the root.
require('./dist/server.cjs');
