import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Mother View</h3>
        <Header userName="Priya Sharma" userType="mother" notificationCount={2} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Health Worker View</h3>
        <Header userName="Dr. Kumar" userType="caretaker" notificationCount={5} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Health Official View</h3>
        <Header userName="Dr. Patel" userType="health-official" notificationCount={12} />
      </div>
    </div>
  );
}