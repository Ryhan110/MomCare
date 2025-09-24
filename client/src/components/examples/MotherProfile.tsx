import MotherProfile from '../MotherProfile';

export default function MotherProfileExample() {
  return (
    <MotherProfile
      name="Priya Sharma"
      phone="+91 9876543210"
      expectedDeliveryDate="March 15, 2025"
      pregnancyWeek={28}
      streakDays={15}
    />
  );
}