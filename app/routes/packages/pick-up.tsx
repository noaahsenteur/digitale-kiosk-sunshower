import { notifyPackagePickUpGroup } from "@/lib/utils";
import { useEffect } from "react";

export default function PickUp() {
  console.log()
  useEffect(() => {
    notifyPackagePickUpGroup();
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-start">
      <div className="flex flex-row items-center gap-3.5">
        <div className="w-14 h-14 rounded-full border-2 flex justify-center items-center">
          1
        </div>
        <p className="text-3xl font-bold">Loop naar de rechter deur</p>
      </div>
      <div className="flex flex-row items-center gap-3.5">
        <div className="w-14 h-14 rounded-full border-2 flex justify-center items-center">
          2
        </div>
        <p className="text-3xl font-bold">Loop naar boven</p>
      </div>
      <div className="flex flex-row items-center gap-3.5">
        <div className="w-14 h-14 rounded-full border-2 flex justify-center items-center">
          3
        </div>
        <p className="text-3xl font-bold">Daar liggen de pakketten</p>
      </div>
    </div>
  );
}
