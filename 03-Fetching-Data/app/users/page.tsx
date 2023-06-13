import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const allUsers = users.map((user) => {
    return (
      <>
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
        <br />
      </>
    );
  });

  const content = (
    <section>
      <br />
      {allUsers}
      <hr />
      <br />
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
    </section>
  );

  return content
}