import { IEpisode } from "./components/IEpisodeTypes";
import episodes from "./episodes.json";
import EpisodeCard from "./components/EpisodeCard";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const allEpisodes = episodes.map((episode: IEpisode) => (
    <EpisodeCard key={episode.id} episode={episode} />
  ));
//console.log)_
  return <>{allEpisodes}</>;
}

export default App;
