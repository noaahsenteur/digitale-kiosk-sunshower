import type { PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function RouteFade({ children }: PropsWithChildren) {
  const location = useLocation();

  return (
    <div key={location.key} className="route-fade h-full flex flex-col justify-center">
      {children}
    </div>
  );
}


