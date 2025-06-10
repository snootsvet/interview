const MOCK_PETS = [
  { id: "pet-1", name: "Buddy" },
  { id: "pet-2", name: "Luna" },
  { id: "pet-3", name: "Max" },
  { id: "pet-4", name: "Bella" },
  { id: "pet-5", name: "Charlie" },
  { id: "pet-6", name: "Lucy" }
];

export type PetInfo = (typeof MOCK_PETS)[number]

// Mock data for appointments
const MOCK_APPOINTMENTS = [
  { petId: "pet-1", id: "appt-1", date: "2025-06-05T10:00:00.000Z" },
  { petId: "pet-1", id: "appt-2", date: "2025-06-12T14:30:00.000Z" },
  { petId: "pet-2", id: "appt-3", date: "2025-06-03T09:15:00.000Z" },
  { petId: "pet-2", id: "appt-4", date: "2025-06-10T16:00:00.000Z" },
  { petId: "pet-2", id: "appt-5", date: "2025-06-17T11:45:00.000Z" },
  { petId: "pet-3", id: "appt-6", date: "2025-06-07T13:20:00.000Z" },
  { petId: "pet-4", id: "appt-7", date: "2025-06-09T08:30:00.000Z" },
  { petId: "pet-4", id: "appt-8", date: "2025-06-14T15:15:00.000Z" },
  { petId: "pet-5", id: "appt-9", date: "2025-06-11T12:00:00.000Z" },
  { petId: "pet-6", id: "appt-10", date: "2025-06-13T10:45:00.000Z" }
];

export type PetAppointmentInfo = (typeof MOCK_APPOINTMENTS)[number]

export async function fetchPets(delay = 3000) {
  console.log(`🐾 Starting to fetch pets from PetManager API... (will take ${delay}ms)`);
  console.log(`🐾 Note: PetManager API is known to be slow and rate-limited`);

  // Simulate realistic API delay - represents external service we can't control
  await new Promise(resolve => setTimeout(resolve, delay));

  // Uncomment to simulate occasional API failures
  // if (Math.random() < 0.1) {
  //   throw new Error('PetManager API temporarily unavailable - 503 Service Unavailable');
  // }

  console.log('🐾 Pets fetch completed!');
  return [...MOCK_PETS]; // Return a copy to prevent mutations
}

export async function fetchAppointments(petId = null, delay = 4000) {
  console.log(`📅 Starting to fetch appointments from VetBooking API${petId ? ` for pet ${petId}` : ''}... (will take ${delay}ms)`);
  console.log(`📅 Note: VetBooking API requires complex database joins, causing slow responses`);

  // Simulate realistic API delay - represents complex database queries
  await new Promise(resolve => setTimeout(resolve, delay));

  // Uncomment to simulate occasional API failures  
  // if (Math.random() < 0.15) {
  //   throw new Error('VetBooking API database timeout - please retry');
  // }

  let appointments = [...MOCK_APPOINTMENTS];

  // Filter by petId if provided
  if (petId) {
    appointments = appointments.filter(appt => appt.petId === petId);
  }

  console.log(`📅 Appointments fetch completed! Found ${appointments.length} appointments`);
  return appointments;
}
