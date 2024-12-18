import Initial from "@/src/pages/Initial";
import Landing from "@/src/pages/Landing";
import useisLogin from "@/src/hooks/isLogin";

export default async function Home() {
  const isLogin = await useisLogin();
  console.log(isLogin)

  return (
    <div className="bg-white">
      {isLogin.isLoggedIn ? (
        <div>

          <Initial />
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
}
