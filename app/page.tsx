import Initial from "@/src/pages/Initial";
import Landing from "@/src/pages/Landing";
import useisLogin from "@/src/hooks/isLogin";

export default async function Home() {
  const isLogin = await useisLogin();

  return (
    <div className="bg-white">

      {isLogin ? (
        <Initial />
      ) : (
        <Landing />
      )}
    </div>
  );
}
