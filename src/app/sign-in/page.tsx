import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect('/');
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == 'production' ? '__Host-' : ''
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0];

  return (
    <div className="bg-gray-100 flex justify-center items-center flex-1 py-20 xl:py-32 px-4">
      <div className="max-w-screen-sm">
        <h1 className="font-semi-condensed text-3xl text-black mb-12"><span className="font-bold block">This project is protected.</span> Please authenticate to view it.</h1>
        <div className="bg-white p-4">
          <form method="post" action="/api/auth/callback/credentials" className="flex flex-col gap-4">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" className="border border-gray-400 p-3 rounded"/>
              </div>
            <button type="submit" className="block bg-primary text-white p-4 rounded hover:bg-primary-800 transition-all">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}