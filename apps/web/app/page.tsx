import {prismaClient} from "@repo/db/prismaClient";

export default async function Home() {
  const user = await prismaClient.user.findFirst();

  return (
    <div>
      First name haha: 
      {user?.name}
      Email of the User: 
      {user?.email}     
      password: 
      {user?.password}
    </div>
  );
}