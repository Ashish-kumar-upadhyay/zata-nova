import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StorageUsage = () => {
  const usedStorage = 0.03;
  const totalStorage = 1000; // 1 TB in GB
  const usagePercent = (usedStorage / totalStorage) * 100;

  return (
    <Card className="glass-card rounded-2xl p-6 border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Storage Usage</h3>
        <Button variant="link" className="text-primary text-sm p-0 h-auto">
          See All
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full gradient-accent rounded-full transition-all duration-500"
              style={{ width: `${Math.max(usagePercent, 2)}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full gradient-primary" />
                <span className="text-muted-foreground">Active Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted" />
                <span className="text-muted-foreground">Available Storage</span>
              </div>
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {usedStorage} GB of {totalStorage} GB Used
            </span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            Need more room for your files?{" "}
            <span className="font-semibold">Upgrade now</span> and keep things seamless!{" "}
            <Button variant="link" className="text-amber-900 font-semibold p-0 h-auto underline">
              Upgrade Plan
            </Button>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StorageUsage;
