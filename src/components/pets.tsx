import { PetAppointmentInfo, PetInfo } from '@/app/pet-info/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import clsx from 'clsx';

export function PetInfoCard({ pet }: { pet: PetInfo }) {
  return (
    <Card className="w-full max-w-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          {pet.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Pet ID:</span>
            <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded text-xs">
              {pet.id}
            </span>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Active Patient
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PetAppointmentCard({ appointment }: { appointment: PetAppointmentInfo }) {
  const appointmentDate = new Date(appointment.date);
  const isUpcoming = appointmentDate > new Date();

  // Format date and time
  const formattedDate = appointmentDate.toLocaleDateString('en-UK', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const formattedTime = appointmentDate.toLocaleTimeString('en-UK', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <Card className={clsx("w-full min-w-60 hover:shadow-md transition-shadow duration-200",
      isUpcoming ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-gray-300')
    }>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-gray-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <span>Appointment</span>
          </div>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${isUpcoming
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-600'
            }`}>
            {isUpcoming ? 'Upcoming' : 'Past'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Date:</span>
            <span className="font-medium text-gray-900">{formattedDate}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Time:</span>
            <span className="font-medium text-gray-900">{formattedTime}</span>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Appointment ID:</span>
              <span className="font-mono text-gray-600 bg-gray-50 px-2 py-1 rounded">
                {appointment.id}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card >
  );
}
