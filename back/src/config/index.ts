import { CorsOptions } from 'cors';
import { env } from './env';

const isProduction = env.NODE_ENV === 'prod';

export default {
  app: {
    isProduction,
    port: env.PORT || 8000,
    productionUrl: env.PRODUCTION_URL || `localhost:${env.PORT}`,
  },
  cors: {
    origin: [
      'http://localhost:8000',
      'https://localhost:8000',
      'http://127.0.0.1:8000',
      'https://127.0.0.1:8000',
      'https://igniz.ru',
      'https://api.igniz.ru',
      'igniz.ru',
      'api.igniz.ru',
      env.CLIENT_BASE_URL,
    ],
    credentials: true,
  } as CorsOptions,
  database: {
    postgres: {
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      user: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      url: env.DATABASE_URL,
    },
    redis: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
      password: env.REDIS_PASSWORD,
    },
  },
  jwt: {
    access: {
      secret: env.JWT_ACCESS_SECRET,
      expiresIn: '5m',
    },
    refresh: {
      secret: env.JWT_REFRESH_SECRET,
      expiresIn: '12h',
    },
  },
  bucket: {
    key: env.BUCKET_KEY,
    secret: env.BUCKET_SECRET,
    name: env.BUCKET_NAME,
    endpoint: env.BUCKET_ENDPOINT,
  },
  mail: {
    host: env.MAIL_HOST,
    user: env.MAIL_USER,
    password: env.MAIL_PASSWORD,
    from: env.MAIL_FROM,
    port: env.MAIL_PORT,
  },
  yandexApi: {
    clientID: env.YANDEX_CLIENT_ID,
    clientSecret: env.YANDEX_CLIENT_SECRET,
    tokenUrl: env.YANDEX_BASE_URL,
    loginUrl: env.YANDEX_LOGIN_URL,
  },
} as const;