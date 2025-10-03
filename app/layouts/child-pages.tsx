import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router";
import RouteFade from "../../src/components/route-fade";

export default function ChildPages() {
  const location = useLocation();
  return (
    <div>
      <RouteFade key={location.pathname}>
        <Outlet />
      </RouteFade>
      <Button
        className="w-full absolute bottom-8 max-w-[720px] left-[50%] translate-x-[-50%]"
        size="lg"
        asChild
      >
        <NavLink to="/">
          <ArrowLeft size={32} className="left-5 absolute" /> Terug naar
          overzicht
        </NavLink>
      </Button>
    </div>
  );
}
