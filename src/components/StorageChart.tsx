import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const StorageChart = () => {
  // Mock data for the chart
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    day: `Aug ${26 + Math.floor(i / 2)}`,
    value: Math.random() * 8,
  }));

  const maxValue = 8;

  return (
    <Card className="glass-card rounded-2xl p-6 border-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Usage Insights</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Keep an eye on your daily spend with real-time insights.
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-6">
        <Button className="gradient-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Active Storage
        </Button>
      </div>

      <div className="h-64 flex items-end justify-between gap-1">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col justify-end group">
            <div
              className="w-full rounded-t-md gradient-primary transition-all duration-300 hover:opacity-80 relative"
              style={{ height: `${(data.value / maxValue) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 px-2">
        <span className="text-xs text-muted-foreground">Aug 26, 2025</span>
        <span className="text-xs text-muted-foreground">Oct 7, 2025</span>
      </div>
    </Card>
  );
};

export default StorageChart;
