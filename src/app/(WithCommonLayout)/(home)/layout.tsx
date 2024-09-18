import React, { ReactNode, Suspense } from "react";

import PostLoading from "./@recentPosts/loading";


const layout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) => {
  return (
    <>
      {children}
      <Suspense fallback={<PostLoading/>}> 
      {recentPosts}
      </Suspense>
      
    </>
  );
};

export default layout;
