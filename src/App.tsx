import episodes from "./episodes.json"
//import { IEpisode } from "./IEpisodeTypes";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {

  const names: string[] = [];
  episodes.forEach((episode) => {
    names.push(episode.name);
  });

  

  return (
    <>
    {names}
    </>
  )
}

export default App;
