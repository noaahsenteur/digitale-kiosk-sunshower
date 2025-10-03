import { CircleCheck } from "lucide-react";
import { notifyAdvisoryGroup } from "@/lib/utils";
import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    notifyAdvisoryGroup();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <CircleCheck size={64} />
      <h1 className="scroll-m-20 text-center text-5xl font-semibold tracking-tight leading-16 text-balance">
        Bevestiging van aawezigheid is verstuurd.
      </h1>
      <p className="text-2xl text-center">
        We hebben het team op de hoogte gesteld en u wordt zsm geholpen
      </p>
    </div>
  );
}
