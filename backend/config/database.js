module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'your_default_pass'),
      schema: env('DATABASE_SCHEMA', 'public'),
      ssl: false, // <--- THIS IS IMPORTANT
    },
    debug: false,
  },
});
