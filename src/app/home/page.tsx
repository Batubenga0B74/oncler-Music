// app/page.tsx

import HomeClient from "../HomeClient";
import { getPopularTracks } from "../lib/deezer";

export default async function Page() {
  const tracks = await getPopularTracks();
  return <HomeClient tracks={tracks} />;
}
