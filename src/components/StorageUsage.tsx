import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StorageUsage = () => {
  const usedStorage = 0.03;
  const totalStorage = 1000; // 1 TB in GB
  const usagePercent = (usedStorage / totalStorage) * 100;

  return (
    <Card className="glass-card rounded-2xl p-6 border-0 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-xl font-bold text-foreground">Storage Usage</h3>
        <Button 
          variant="link" 
          className="text-primary text-sm p-0 h-auto font-semibold hover:text-accent transition-colors hover:scale-105 duration-300"
        >
          See All
        </Button>
      </div>

      <div className="space-y-6 relative z-10">
        <div>
          {/* Enhanced progress bar with glow */}
          <div className="h-4 bg-muted rounded-full overflow-hidden relative shadow-inner">
            <div
              className="h-full gradient-accent rounded-full transition-all duration-700 relative overflow-hidden shadow-lg"
              style={{ 
                width: `${Math.max(usagePercent, 2)}%`,
                boxShadow: 'var(--shadow-glow-accent)'
              }}
            >
              {/* Animated shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{
                  animation: 'shimmer 2s infinite',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
            
            {/* Glow indicator at the end */}
            <div 
              className="absolute top-0 h-full w-1 bg-white rounded-full shadow-lg animate-glow transition-all duration-700"
              style={{ 
                left: `${Math.max(usagePercent, 2)}%`,
                boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px var(--accent)'
              }}
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2 group/legend">
                <div className="w-3 h-3 rounded-full gradient-primary shadow-md group-hover/legend:scale-125 transition-transform" />
                <span className="text-muted-foreground font-medium">Active Storage</span>
              </div>
              <div className="flex items-center gap-2 group/legend">
                <div className="w-3 h-3 rounded-full bg-muted shadow-md group-hover/legend:scale-125 transition-transform" />
                <span className="text-muted-foreground font-medium">Available Storage</span>
              </div>
            </div>
            <span className="text-xs font-bold text-foreground bg-muted/50 px-2 py-1 rounded-lg">
              {usedStorage} GB / {totalStorage} GB
            </span>
          </div>
        </div>

        {/* Enhanced upgrade prompt */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-5 relative overflow-hidden group/banner shadow-md hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-2xl" />
          
          <p className="text-sm text-amber-900 relative z-10 leading-relaxed">
            <span className="font-bold">Need more room for your files?</span>
            <br />
            Upgrade now and keep things seamless!
          </p>
          
          <Button 
            variant="link" 
            className="text-amber-900 font-bold p-0 h-auto mt-2 text-base hover:text-orange-700 transition-colors relative z-10 group/btn"
          >
            <span className="relative">
              Upgrade Plan
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-700 group-hover/btn:w-full transition-all duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default StorageUsage;
