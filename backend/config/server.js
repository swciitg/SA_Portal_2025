module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  url: env("PUBLIC_URL", "https://swc.iitg.ac.in/test/sa_portal_backend"),

  app: {
    keys: env.array("APP_KEYS"),
  },

  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },

  // ✅ THIS IS CRITICAL
  admin: {
    url: '/test/sa_portal_backend/admin',
    serveAdminPanel: true,
  },

  // ✅ THE FIX
  allowedHosts: ['swc.iitg.ac.in'],
  // or for dev: allowedHosts: ['*'],
});


//--------------- for local--------------------

// module.exports = ({ env }) => ({
//   // Localhost binding
//   host: env("HOST", "127.0.0.1"), // 0.0.0.0 if you want LAN access
//   port: env.int("PORT", 1337),

//   // Local development URL
//   url: env("PUBLIC_URL", "http://localhost:1337"),

//   // Application keys from .env
//   app: {
//     keys: env.array("APP_KEYS"),
//   },

//   // Webhook config (default: false)
//   webhooks: {
//     populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
//   },

//   // Admin panel setup
//   admin: {
//     url: '/admin',               // Local admin path
//     serveAdminPanel: true,       // Serve admin interface
//   },

//   // Allowed hosts for local development
//   allowedHosts: ['localhost', '127.0.0.1'], // or use ['*'] for development
// });
