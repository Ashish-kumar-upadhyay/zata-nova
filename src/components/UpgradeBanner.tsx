import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import rocketImage from "@/assets/rocket-3d.png";

const UpgradeBanner = () => {
  return (
    <div className="glass-card rounded-2xl p-8 gradient-secondary relative overflow-hidden">
      <div className="relative z-10 max-w-md">
        <h3 className="text-2xl font-bold text-white mb-2">
          Maximize Your Cloud Experience
        </h3>
        <p className="text-white/90 mb-6 text-sm">
          Unlock unlimited storage, advanced features, and priority support with our premium plans.
        </p>
        <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6 gap-2 shadow-lg">
          Upgrade now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-90">
        <img 
          src={rocketImage} 
          alt="Rocket illustration" 
          className="w-full h-full object-contain animate-float"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-8 right-32 w-16 h-16 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-64 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
    </div>
  );
};

export default UpgradeBanner;
