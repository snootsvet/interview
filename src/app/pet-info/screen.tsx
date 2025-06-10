"use client"

import { PetAppointmentInfo, PetInfo } from "@/app/pet-info/data"
import { PetAppointmentCard, PetInfoCard } from "@/components/pets"

export function PetScreen({
  pets,
  appts
}: {
  pets: PetInfo[],
  appts: PetAppointmentInfo[]
}) {
  return (
    <div className="flex flex-col min-h-svh grow gap-y-8 items-center justify-center">
      <h2>Pet Info Page</h2>
      <h3>Pets</h3>
      <div className="grid grid-cols-4 gap-4" >
        {pets.map(pet => <PetInfoCard pet={pet} key={pet.id} />)}
      </div>
      <h3>Appts</h3>
      <div className="grid grid-cols-3 gap-4" >
        {appts.map(appt => <PetAppointmentCard appointment={appt} key={appt.id} />)}
      </div>
    </div>
  )
}
