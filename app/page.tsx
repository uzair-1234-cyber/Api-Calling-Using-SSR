import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-blue-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
          >
            <div className="bg-black text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">
              
              <div className="flex items-center gap-4">
                
                <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    {user.name}
                  </h2>

                  <p className="text-gray-500">
                    @{user.username}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <p> {user.email}</p>
                <p> {user.phone}</p>
                <p> {user.website}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}