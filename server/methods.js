import { Meteor } from "meteor/meteor";
import {
  fetchLeagueList,
  fetchLeagueData,
  fetchGoalKings,
  fetchLeagueDataPoint,
} from "../lib/apiUtils";

Meteor.methods({
  "fetch.leagueList"() {
    return fetchLeagueList();
  },

  "fetch.leagueData"(leagueKey) {
    return fetchLeagueData(leagueKey);
  },

  "fetch.topScorers"(leagueKey) {
    return fetchGoalKings(leagueKey);
  },
  "fetch.leagueDataPoint"(leagueKey) {
    return fetchLeagueDataPoint(leagueKey);
  }
});
