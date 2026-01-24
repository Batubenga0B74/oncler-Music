"use client";

import { useEffect } from "react";
import { initializeFaro, getWebInstrumentations } from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { useRouter } from "next/navigation";
import "../../sentry.client.config";

export default function FaroInit() {
  const router = useRouter();

  useEffect(() => {
    initializeFaro({
      url: "https://faro-collector-prod-me-central-1.grafana.net/collect/3ca8462c814458a8daf618f667ca7c7f",
      app: {
        name: "oncler-fell",
        version: "1.0.0",
        environment: "production",
      },
      instrumentations: [
        ...getWebInstrumentations(),
        new TracingInstrumentation(),
      ],
    });

    router.push("/login");
  }, [router]);

  return null;
}
