import TriageScreen from "@/app/triage/screen";
import { Suspense } from "react";


export default async function TriagePage() {
  return (
    <Suspense>
      <TriageScreen />
    </Suspense>
  );
}

