import { Outlet, useLocation } from "react-router";
import RouteFade from "../../src/components/route-fade";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="h-full">
      {/* <div className="absolute top-10 left-[50%] translate-x-[-50%]">
        <figure className="w-[420px]">
          <img className="w-full h-full" src="/sunshower-logo.png" />
        </figure>
      </div> */}
      <div className="h-full flex justify-center items-center">
        <div className="w-full h-full max-w-[720px]">
          <RouteFade key={location.pathname}>
            <Outlet />
          </RouteFade>
        </div>
      </div>
    </div>
  );
}
