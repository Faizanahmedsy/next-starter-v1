// app/user/page.tsx
import { Metadata } from "next";

// Define the type for user data
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Function to fetch users - this will be used for static generation
export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      // Force static generation by using force-cache
      cache: "force-cache",
      // Optional: Add revalidation time if needed
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Metadata for the page
export const metadata: Metadata = {
  title: "User List",
  description: "List of users generated statically",
};

// Explicitly set to static generation
export const dynamic = "static";
export const revalidate = 3600; // Optional: revalidate every hour

export default async function UserPage() {
  const users = await fetchUsers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">Username: {user.username}</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
