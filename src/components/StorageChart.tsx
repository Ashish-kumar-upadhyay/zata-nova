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
    <Card className="glass-card rounded-2xl p-6 border-0 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Usage Insights</h3>
          <p className="text-sm text-muted-foreground">
            Keep an eye on your daily spend with real-time insights.
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 shadow-sm"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-6 relative z-10">
        <Button className="gradient-primary text-white px-5 py-2.5 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg relative overflow-hidden group/btn">
          <span className="relative z-10">Active Storage</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        </Button>
      </div>

      <div className="h-64 flex items-end justify-between gap-1 relative z-10">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col justify-end group/bar relative">
            {/* Tooltip on hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-semibold shadow-lg z-20">
              {data.value.toFixed(1)} GB
            </div>
            
            <div
              className="w-full rounded-t-lg gradient-primary transition-all duration-500 hover:opacity-90 relative overflow-hidden shadow-md"
              style={{ 
                height: `${(data.value / maxValue) * 100}%`,
                minHeight: '8px'
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/30 to-white/0 translate-y-full group-hover/bar:translate-y-0 transition-transform duration-500" />
              
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300" 
                   style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 px-2 relative z-10">
        <span className="text-xs font-semibold text-muted-foreground">Aug 26, 2025</span>
        <span className="text-xs font-semibold text-muted-foreground">Oct 7, 2025</span>
      </div>
    </Card>
  );
};

export default StorageChart;
