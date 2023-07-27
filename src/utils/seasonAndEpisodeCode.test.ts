import seasonCode from "./seasonCode";
import episodeCode from "./episodeCode";

test("seasonCode passes a number and returns a string with S(season) and correct code e.g S01 or S14", () => {
  expect(seasonCode(5)).toBe("S05");
  expect(seasonCode(15)).toBe("S15");
  expect(seasonCode(0)).toBe("S00");
  expect(seasonCode(100)).toBe("S100");
});

test("episodeCode passes a number and returns a string with E(episode) and correct code e.g E04 or E19", () => {
  expect(episodeCode(3)).toBe("E03");
  expect(episodeCode(14)).toBe("E14");
  expect(episodeCode(100)).toBe("E100");
  expect(episodeCode(0)).toBe("E00");
});
