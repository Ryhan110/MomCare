import QuickActions from '../QuickActions';

export default function QuickActionsExample() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Mother View</h3>
        <QuickActions userType="mother" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Caretaker View</h3>
        <QuickActions userType="caretaker" />
      </div>
    </div>
  );
}