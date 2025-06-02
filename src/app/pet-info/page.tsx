import { fetchAppointments, fetchPets } from "@/app/pet-info/data";
import { PetScreen } from "@/app/pet-info/screen";

export default async function PetPage() {
  const pets = await fetchPets()
  const appts = await fetchAppointments()
  return <PetScreen pets={pets} appts={appts} />
}
