
"use client";
import {initFaro} from "./observability"
import { useEffect } from 'react';
//import { initializeFaro, getWebInstrumentations } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import "../../sentry.client.config";
import { redirect } from "next/navigation";

export default async function() {
  redirect("/login"); 
}
