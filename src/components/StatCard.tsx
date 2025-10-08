import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
}

const StatCard = ({ title, value, subtitle, icon: Icon, gradient }: StatCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Light reflection effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{title}</p>
          <h3 className="text-4xl font-bold text-foreground mb-1 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text transition-all duration-300 group-hover:scale-105">{value}</h3>
          <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
        </div>
        
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative",
          gradient
        )}>
          <Icon className="h-7 w-7 text-white relative z-10 drop-shadow-lg" />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow" 
               style={{ boxShadow: 'var(--shadow-glow)' }} />
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default StatCard;
