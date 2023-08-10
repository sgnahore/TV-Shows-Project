import { IEpisode } from "./IEpisodeTypes";
import episodes from "../episodes.json";
import EpisodeCard from "./EpisodeCard";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function MainContent(): JSX.Element {
  const allEpisodes = episodes.map((episode: IEpisode) => (
    <EpisodeCard key={episode.id} episode={episode} />
  ));

  return <>{allEpisodes}</>;
}

export default MainContent;
