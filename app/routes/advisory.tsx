import { CircleCheck } from "lucide-react";
import { notifySalesGroup } from "@/lib/utils";
import { useEffect } from "react";

export default function Advisory() {
  useEffect(() => {
    notifySalesGroup();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <CircleCheck size={64} />
      <h1 className="scroll-m-20 text-center text-5xl font-semibold tracking-tight text-balance">
        Advies gesprek
      </h1>
      <p className="text-2xl text-center">
        Wij hebben aan de sales/showroom-groep laten weten dat u er bent. Wij
        zorgen ervoor dat iemand u zo snel mogelijk komt helpen.
      </p>
    </div>
  );
}
