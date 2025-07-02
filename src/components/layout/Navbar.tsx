import { Bell, User, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full h-14 z-50 bg-teal-400 text-white px-6 flex items-center justify-between shadow">
      <h1 className="text-xl font-bold italic">Helpdesk</h1>

      <div className="flex items-center gap-4 text-black">
        <div className="bg-white border px-1 rounded text-xs font-bold flex items-center">
          <span className="px-1">BM</span>
          <span className="bg-black text-white px-1 rounded-sm ml-1">BI</span>
        </div>
        <Bell className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" onClick={()=>navigate("/profile")}/>
        <LogOut className="w-5 h-5 cursor-pointer" onClick={()=>navigate("/")} />
        
      </div>
    </nav>
  );
};

export default Navbar;
