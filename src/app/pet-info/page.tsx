import { fetchAppointments, fetchPets } from "@/app/pet-info/data";
import { PetScreen } from "@/app/pet-info/screen";

/**
 * PERFORMANCE PROBLEM: The two data fetching functions below simulate slow 3rd party APIs
 * 
 * Current behavior:
 * - The two API calls run sequentially, and the page blocks until both have completed (7+ seconds total)
 * - No caching - same data fetched on every page visit
 * - No loading states - users see blank page during fetch
 * 
 * DISCUSSION POINTS:
 * - How would you improve the user experience of this slow-loading page?
 * - What caching strategies would you implement?
 * - How might your optimisation strategies change depending on the nature of the data?
     E.g. what if appointments data is frequently updated (multiple times per day), but pets data is only updated once a month?
 * - How could you show data progressively as it becomes available?
 * - What would change if this were a high-traffic page visited frequently?
 * 
 * Consider: SSR optimizations, client-side caching, data streaming, etc.
 */

export default async function PetPage() {
  const pets = await fetchPets()
  const appts = await fetchAppointments()
  return <PetScreen pets={pets} appts={appts} />
}
