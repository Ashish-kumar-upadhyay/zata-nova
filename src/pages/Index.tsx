import { useState } from "react";
import { Database, HardDrive, Package, FolderOpen, Play } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import StorageChart from "@/components/StorageChart";
import StorageUsage from "@/components/StorageUsage";
import UpgradeBanner from "@/components/UpgradeBanner";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const stats = [
    {
      title: "Active Storage",
      value: "0.03 GB",
      subtitle: "As of 7 Oct, 2025",
      icon: Database,
      gradient: "gradient-primary",
    },
    {
      title: "Total Storage",
      value: "0 TB",
      subtitle: "As of 7 Oct, 2025",
      icon: HardDrive,
      gradient: "gradient-accent",
    },
    {
      title: "Total Objects",
      value: "3",
      subtitle: "As of 7 Oct, 2025",
      icon: Package,
      gradient: "gradient-secondary",
    },
    {
      title: "Bucket Quantity",
      value: "4",
      subtitle: "As of 7 Oct, 2025",
      icon: FolderOpen,
      gradient: "gradient-warm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? "5rem" : "16rem" }}
      >
        <Header />
        
        <main className="p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Title */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <div className="flex items-center gap-3">
                <Button className="gradient-primary text-white px-6 gap-2 hover:opacity-90 transition-opacity">
                  <FolderOpen className="h-4 w-4" />
                  My Bucket
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <StorageChart />
              </div>
              <div>
                <StorageUsage />
              </div>
            </div>

            {/* Upgrade Banner */}
            <UpgradeBanner />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
