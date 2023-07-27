export default function seasonCode(season: number): string {
    let seasonCode: string;
  
    if (season < 10) {
      seasonCode = "S0" + season;
    } else {
      seasonCode = "S" + season;
    }
  
    return seasonCode;
  }
  