import { Suspense } from "react";

import Loading from "../loading";

import Landing from "@/src/components/modules/home/Landing";
import RecentPosts from "@/src/components/modules/home/RecentPosts";

export default function Home() {
  return (
    <>
      <Landing />
     <Suspense fallback={<Loading/>}>
     <RecentPosts />
     </Suspense>
    </>
  );
}
