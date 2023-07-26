import { IEpisode } from "./IEpisodeTypes";
import episodes from "./episodes.json";
// import "./styles.css";
import EpisodeCard from "./components/EpisodeCard";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const allEpisodes = episodes.map((episode: IEpisode) => (
  <EpisodeCard key={episode.id} episode={episode} />
  ));
  

  return <>
{allEpisodes}
  </>;
}


export default App;
