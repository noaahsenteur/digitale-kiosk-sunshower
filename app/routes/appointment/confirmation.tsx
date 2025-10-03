import { AvatarImage } from "@/components/ui/avatar";
import { notifyEmployee } from "@/lib/utils";

import { CircleCheck } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (email) {
      notifyEmployee(email);
    }
  }, [email]);

  return (
    <div className="flex flex-col gap-8 items-center">
      <CircleCheck size={64} />
      <h1 className="scroll-m-20 text-center text-5xl font-semibold tracking-tight leading-16 text-balance">
        Bevestiging van aawezigheid is verstuurd.
      </h1>
      <p className="text-2xl text-center flex flex-col items-center gap-8">
        Medewerker is op de hoogte gebracht dat u bent aangekomen. Mocht
        medewerker er niet binnen 5 minuten zijn. Klik dan op de knop hieronder
        en wij sturen dit naar de fallback groep.
      </p>
    </div>
  );
}
