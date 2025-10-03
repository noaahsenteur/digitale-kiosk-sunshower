import { Button } from "@/components/ui/button";
import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { CircleQuestionMark } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Package } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Button asChild className="w-full" size="lg">
        <NavLink to="/appointment">
          Ik kom voor een afspraak{" "}
          <MessagesSquare className="absolute right-5" size={32} />
        </NavLink>
      </Button>
      <Button asChild className="w-full" size="lg">
        <NavLink to="/advisory">
          Ik kom voor een advies/sales gesprek
          <MessagesSquare className="absolute right-5" size={32} />
        </NavLink>
      </Button>
      <Button asChild className="w-full" size="lg">
        <NavLink to="/packages/delivery">
          Ik kom een pakket afleveren
          <Package className="absolute right-5" size={32} />
        </NavLink>
      </Button>
      <Button asChild className="w-full" size="lg">
        <NavLink to="/packages/pick-up">
          Ik kom een pakket ophalen
          <Package className="absolute right-5" size={32} />
        </NavLink>
      </Button>
      <Button asChild className="w-full" size="lg">
        <NavLink to="/faq">
          Veelgestelde vragen{" "}
          <CircleQuestionMark className="absolute right-5" size={32} />
        </NavLink>
      </Button>
    </div>
  );
}
