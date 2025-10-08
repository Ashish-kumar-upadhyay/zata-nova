import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import rocketImage from "@/assets/rocket-3d.png";

const UpgradeBanner = () => {
  return (
    <div className="glass-card rounded-3xl p-8 gradient-secondary relative overflow-hidden group shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transition-all duration-500">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-md">
        <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Maximize Your Cloud Experience
        </h3>
        <p className="text-white/95 mb-6 text-base leading-relaxed drop-shadow-md">
          Unlock unlimited storage, advanced features, and priority support with our premium plans.
        </p>
        <Button className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-bold px-8 py-6 gap-3 shadow-2xl transition-all duration-300 group/btn rounded-xl text-base">
          <span>Upgrade now</span>
          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      {/* Enhanced rocket with glow */}
      <div className="absolute right-0 bottom-0 w-72 h-72 opacity-95 group-hover:scale-110 transition-transform duration-700">
        <img 
          src={rocketImage} 
          alt="Rocket illustration" 
          className="w-full h-full object-contain animate-float drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-2xl" />
      </div>
      
      {/* Enhanced decorative elements with animation */}
      <div className="absolute top-8 right-32 w-20 h-20 bg-white/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-16 right-64 w-28 h-28 bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-48 w-16 h-16 bg-white/10 rounded-full blur-xl animate-glow" />
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  );
};

export default UpgradeBanner;
