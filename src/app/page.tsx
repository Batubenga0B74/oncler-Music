
// "use client";
// import {initFaro} from "./observability"
// import { useEffect } from 'react';
// //import { initializeFaro, getWebInstrumentations } from '@grafana/faro-react';
// import { TracingInstrumentation } from '@grafana/faro-web-tracing';
// import "../../sentry.client.config";
// import { redirect } from "next/navigation";

// export default async function() {
//   redirect("/login"); 
// }
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { initFaro } from "@/observability/faro";
import "../../sentry.client.config";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Inicializa observability
    initFaro();

    // Redireciona depois
    router.replace("/login");
  }, [router]);

  return null;
}
