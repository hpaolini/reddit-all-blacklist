// ==UserScript==
// @name            reddit all blacklist
// @description     remove subreddits you don't want to see
// @author          hpaolini (Hunter Paolini)
// @icon            
// @homepageURL     https://github.com/hpaolini/reddit-all-blacklist/
// @namespace       hpaolini
// @version         0.1.1
// @match           https://www.reddit.com/*
// @include         https://www.reddit.com/*
// @run-at          document-end
// @grant           none
// ==/UserScript==

(function() {
      var i,
      el,
      b = {},
      subredditAnchor = document.getElementsByClassName("subreddit"),
      blacklist = ["adviceanimals", "animalsbeingjerks", "atheism", "aww",
                   "baseball",
                   "cars", "cats", "circlejerk", "comics", "community", "creepy", "cringe", "cringepics",
                   "dota2",
                   "facepalm", "fallout", "fo4", "food", "formula1", "funny", "futurama",
                   "games", "gaming", "getmotivated", "globaloffensive", "grandtheftautov",
                   "harrypotter", "hearthstone", "hiphopheads", "hockey",
                   "justneckbeardthings",
                   "kotakuinaction",
                   "leagueoflegends",
                   "marvel", "mildlyinfuriating", "movies", "music",
                   "nba", "nfl",
                   "pcmasterrace", "photoshopbattles", "pics", "pokemon", "politics", "ps4", "punchablefaces",
                   "quityourbullshit",
                   "relationships", "rocketleague",
                   "sandersforpresident", "skyrim", "squaredcircle", "starwars", "subredditsimulator", "sweden",
                   "technology", "television", "thathappened", "tifu", "topgear", "trashy", "trees", "trollxchromosomes", "tumblr", "tumblrinaction", "twoxchromosomes",
                   "wheredidthesodago", "wtf",
                   "xbox",
                   "youdontsurf"];

  if (!(/\/r\/all/i).test(document.location)) {
    return; // only check r/all
  }
  
  for (i = blacklist.length; i--;) {
    b["/r/" + blacklist[i].toLowerCase()] = true;
  }

  for (i = subredditAnchor.length; i--;) {
    el = subredditAnchor[i];
    if (b[el.text.toLowerCase()]) {
      do {
        el = el.parentNode;
      } while (!/thing/.test(el.className));
      el.parentNode.removeChild(el);
    }
  }
}());
