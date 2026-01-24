"use client";

import {
  initializeFaro,
  getWebInstrumentations,
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

let initialized = false;

export function initFaro() {
  if (initialized) return;
  initialized = true;

  initializeFaro({
    url: "https://faro-collector-prod-me-central-1.grafana.net/collect/59254cbb9cafec7ea4172c39ed260fd4",
    app: {
      name: "fell-oncler",
      version: "1.0.0",
      environment: "production",
    },
    sessionTracking: {
      samplingRate: 1,
      persistent: true,
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
    ],
  });
}
