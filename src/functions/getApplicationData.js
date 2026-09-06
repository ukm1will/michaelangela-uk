import { CompetitionType, SortOrder } from "../enums/enums";

import { getResultsClubChampionship2022 } from "../services/clubChampionship2022";
import { getResultsClubChampionship2023 } from "../services/clubChampionship2023";
import { getResultsClubChampionship2024 } from "../services/clubChampionship2024";
import { getResultsClubChampionship2025 } from "../services/clubChampionship2025";

import { getResultsMillenniumCup2021 } from "../services/millenniumCup2021";
import { getResultsMillenniumCup2022 } from "../services/millenniumCup2022";
import { getResultsMillenniumCup2023 } from "../services/millenniumCup2023";
import { getResultsMillenniumCup2024 } from "../services/millenniumCup2024";
import { getResultsMillenniumCup2025 } from "../services/millenniumCup2025";
import { getResultsMillenniumCup2026 } from "../services/millenniumCup2026";

import { getResultsSummerPairs2021 } from "../services/summerPairs2021";
import { getResultsSummerPairs2022 } from "../services/summerPairs2022";
import { getResultsSummerPairs2023 } from "../services/summerPairs2023";
import { getResultsSummerPairs2024 } from "../services/summerPairs2024";
import { getResultsSummerPairs2025 } from "../services/summerPairs2025";
import { getResultsSummerPairs2026 } from "../services/summerPairs2026";

import { getResultsWinterPairs2019 } from "../services/winterPairs2019";
import { getResultsWinterPairs2021 } from "../services/winterPairs2021";
import { getResultsWinterPairs2022 } from "../services/winterPairs2022";
import { getResultsWinterPairs2023 } from "../services/winterPairs2023";
import { getResultsWinterPairs2024 } from "../services/winterPairs2024";
import { getResultsWinterPairs2025 } from "../services/winterPairs2025";

const getApplicationData = (pathname, m) => {
  let json = [];
  switch (pathname) {
    case "/convertedTable":
      // json = getConvertedData(); This is passed via the textArea
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2023";
      break;
    // Club Championship
    case "/clubChampionship2022":
      json = getResultsClubChampionship2022();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2022";
      break;
    case "/clubChampionship2023":
      json = getResultsClubChampionship2023();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2023";
      break;
    case "/clubChampionship2024":
      json = getResultsClubChampionship2024();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2024";
      break;
    case "/clubChampionship2025":
      json = getResultsClubChampionship2025();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2025";
      break;
    // Millennium Cup
    case "/millenniumCup2021":
      json = getResultsMillenniumCup2021();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2021";
      break;
    case "/millenniumCup2022":
      json = getResultsMillenniumCup2022();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2022";
      break;
    case "/millenniumCup2023":
      json = getResultsMillenniumCup2023();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2023";
      break;
    case "/millenniumCup2024":
      json = getResultsMillenniumCup2024();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2024";
      break;
    case "/millenniumCup2025":
      json = getResultsMillenniumCup2025();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2025";
      break;
    case "/millenniumCup2026":
      json = getResultsMillenniumCup2026();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2026";
      break;
    // Summer Pairs
    case "/summerPairs2021":
      json = getResultsSummerPairs2021();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2021";
      break;
    case "/summerPairs2022":
      json = getResultsSummerPairs2022();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2022";
      break;
    case "/summerPairs2023":
      json = getResultsSummerPairs2023();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2023";
      break;
    case "/summerPairs2024":
      json = getResultsSummerPairs2024();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2024";
      break;
    case "/summerPairs2025":
      json = getResultsSummerPairs2025();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2025";
      break;
    case "/summerPairs2026":
      json = getResultsSummerPairs2026();
      m.competitionType = CompetitionType.STROKEPLAY;
      m.competitionSortOrder = SortOrder.LOWEST;
      m.competitionYear = "2026";
      break;
    // Winter Pairs
    case "/winterPairs2019": // this one is not active, but is used as a test
      json = getResultsWinterPairs2019();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2019 - 2020";
      break;
    case "/winterPairs2021":
      json = getResultsWinterPairs2021();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2021 - 2022";
      break;
    case "/winterPairs2022":
      json = getResultsWinterPairs2022();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2022 - 2023";
      break;
    case "/winterPairs2023":
      json = getResultsWinterPairs2023();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2023 - 2024";
      break;
    case "/winterPairs2024":
      json = getResultsWinterPairs2024();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2024 - 2025";
      break;
    case "/winterPairs2025":
      json = getResultsWinterPairs2025();
      m.competitionType = CompetitionType.STABLEFORD;
      m.competitionSortOrder = SortOrder.HIGHEST;
      m.competitionYear = "2025 - 2026";
      break;

    default:
      throw new Error(pathname + " is not defined");
  }
  return { results: json, metadata: m };
};

export default getApplicationData;
