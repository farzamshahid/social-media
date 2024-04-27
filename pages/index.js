import Layout from "@/components/Layout";
import { PostCard } from "@/components/PostCard";
import { PostFormCard } from "@/components/PostFormCard";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
export default function Home() {
  const session = useSession();
  console.log(session)
  if (!session) {
    return <LoginPage />
  }
  console.log(session)
  return (
    <>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>

    </>
  );
}
