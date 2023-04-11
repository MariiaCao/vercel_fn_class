import * as Sentry from "@sentry/node";
import "@sentry/tracing";

Sentry.init({
  dsn: "https://6d486525318640eb8074746ada69601b@o4504959426625536.ingest.sentry.io/4504959427870720",
  tracesSampleRate: 1.0,
});

module.exports = Sentry;