import { getLocalData } from '@/lib/localdata';

export default async function Page({ params }: { params: { slug: string } }) {
  const allData = await getLocalData();
  const user = allData.find((user: { username: string }) => user.username === params.slug);

  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <div>
        <h1 className="text-3xl font-semibold">{user.name}</h1>
        <div className="flex space-x-3">
          <span>@{user.username}</span>
          <span className="lowercase">{user.email}</span>
        </div>
        <div>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
        </div>
      </div>
    </main>
  );
}
