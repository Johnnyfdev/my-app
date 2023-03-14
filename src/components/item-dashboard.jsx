import { ReactComponent as Dashboard } from "../assets/images/dashboard.svg";

export function ItemDashboard() {
  return (
    <div className="item-sidebar">
      <Dashboard className="icon" />
      <span>Dashboard</span>
    </div>
  );
}
