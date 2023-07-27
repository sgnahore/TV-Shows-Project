import { IEpisode } from "./components/IEpisodeTypes";
import episodes from "./episodes.json";
import EpisodeCard from "./components/EpisodeCard";
import { Footer } from "./components/Footer";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const allEpisodes = episodes.map((episode: IEpisode) => (
    <EpisodeCard key={episode.id} episode={episode} />
  ));

  return (
    <>
      {allEpisodes}
      <Footer />
    </>
  );
}

export default App;
