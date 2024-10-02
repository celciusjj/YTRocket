import { ProfileStats } from "../components/ProfileStats";
import { Sidebar } from "../components/Sidebar";

function MainScreen() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <ProfileStats />
    </div>
  );
}

export default MainScreen;
