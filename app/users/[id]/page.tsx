
import Image from "next/image";
import Link from "next/link";

async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await getUser(id);

  return (
<>
    <Link href='/' className="text-black bg-blue-300 hover:text-grey-300 hover:bg-red-500 font-bold py-2 px-4 rounded absolute top-4 left-4">
      <h1>Back to Users</h1>
    </Link>
    <main className="min-h-screen bg-white text-white flex items-center justify-center">
        <div className="bg-black p-10 rounded-2xl shadow-lg w-full max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">
              {user.name}
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500">
                @{user.username}
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <p> {user.email}</p>
            <p> {user.phone}</p>
            <p> {user.company.title}</p>
          </div>
        </div>
    </main>
</>

  );
}
