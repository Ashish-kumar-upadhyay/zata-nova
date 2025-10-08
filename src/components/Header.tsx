import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="h-16 border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-40 shadow-lg">
      <div className="h-full px-6 flex items-center justify-end gap-4">
        <Badge 
          variant="outline" 
          className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-300 px-3 py-1 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          Active
        </Badge>
        
        <div className="flex items-center gap-3 group">
          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">chirag20</span>
          <Avatar className="h-9 w-9 ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition-all group-hover:ring-primary/50 group-hover:scale-110">
            <AvatarImage src="" />
            <AvatarFallback className="gradient-primary text-white text-xs font-bold shadow-lg">
              C
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
