import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export const initFaro = () => {
  if (typeof window === 'undefined') return;

  initializeFaro({
    url: process.env.NEXT_PUBLIC_FARO_URL!,
    app: {
      name: 'fell-oncler',
      version: '1.0.0',
      environment: 'production',
    },
    sessionTracking: {
      samplingRate:  0.2, // em prod podes reduzir depois (ex: 0.2)
      persistent: true,
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
    ],
  });
};
