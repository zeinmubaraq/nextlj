import { getLocalData } from '@/lib/localdata';

export default async function Home() {
  const localData = await getLocalData();

  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <h1 className="mb-5 text-3xl font-semibold">User</h1>
      <ul>
        {localData.map(({ name, username }: any) => (
          <li key={username}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
