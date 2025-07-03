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
