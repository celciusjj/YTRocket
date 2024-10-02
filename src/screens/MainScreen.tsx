import { ProfileStats } from "../components/ProfileStats";
import { Sidebar } from "../components/Sidebar";

function MainScreen() {
  return (
    <div className="flex min-h-screen bg-light">
      <Sidebar />
      <ProfileStats />
    </div>
  );
}

export default MainScreen;
