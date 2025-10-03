import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { NavLink } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Search, SearchX } from "lucide-react";
import { useCallback, useState, type ChangeEvent } from "react";

type SearchableUserListProps = {
  users: Array<{ name: string; role: string; email: string; image: string }>;
};

export default function SearchableUserList({
  users: baseUsers,
}: SearchableUserListProps) {
  const [users, setUsers] = useState(baseUsers);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUsers(
        baseUsers.filter((user) => {
          const name = user.name.toLocaleLowerCase();
          const input = event.target.value.toLocaleLowerCase();
          if (name.includes(input)) {
            return user;
          }
        })
      );
    },
    [setUsers]
  );

  return (
    <div>
      <label className="flex flex-row items-center rounded-full h-20 focus-within:bg-white border-2 border-gray-200 hover:border-[#fcb772] focus-within:border-[#fcb772] hover:bg-white transition-colors bg-gray-100 p-3 px-6 mb-8">
        <input
          type="text"
          className="outline-none flex-1 text-2xl placeholder:text-black/70"
          placeholder="Zoek op naam"
          onChange={handleChange}
        />
        <Search />
      </label>
      <div className="h-[560px]">
        {users.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 overflow-y-scroll no-scrollbar">
            {users.map((user) => (
              <NavLink
                className="h-fit"
                to={{
                  pathname: "/appointment/confirmation",
                  search: `email=${user.email}`,
                }}
              >
                <Card>
                  <CardContent className="flex flex-row items-center gap-4">
                    <Avatar className="shrink-0 ">
                      <AvatarImage
                        className="rounded-full w-20 h-20"
                        src={user.image}
                      />
                      <AvatarFallback>
                        <div className="rounded-full w-20 h-20 bg-gray-200 flex items-center justify-center">
                          {user.name.charAt(0)}
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-xl break-all">
                        {user.name}
                      </p>
                      <p className="text-lg text-gray-700 font-semibold">
                        {user.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            <p className="text-4xl font-semibold text-center max-w-3/4 text-gray-500 flex flex-col items-center gap-8">
              <SearchX size={64} />
              Helaas hebben we niemand kunnen vinden met die naam
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
