import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9c30e8e537655dc9551b28752cd90d7b@o4509509525569536.ingest.de.sentry.io/4509917897424976",
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  debug: false,
});
