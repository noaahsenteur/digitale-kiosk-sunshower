import SearchableUserList from "@/components/searchable-user-list";

const users = [
  {
    name: "Louise",
    role: "R&D",
    email: "louiseb@sunshower.nl",
    image: "",
  },
  {
    name: "Olivier",
    role: "Sales",
    email: "oliviere@dermasun.com",
    image: "",
  },
];

export default function Appointment() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="scroll-m-20 text-center text-5xl font-semibold tracking-tight text-balance">
        Afspraak
      </h1>
      <p className="text-2xl text-center mb-2">
        Kies hier onder de gene met wie u een afspraak had. En we zullen de
        persoon op de hoogte brengen dat u aan bent gekomen.
      </p>
      <SearchableUserList users={users} />
    </div>
  );
}
