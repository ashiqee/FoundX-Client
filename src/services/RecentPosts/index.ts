import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=3`,
    {cache: "no-store"}
  );

 
  
  await delay(3000);
const data = await res.json()

  return data;
};
