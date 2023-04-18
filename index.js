const express = require('express');
const port = 8001;
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200
  })
);

const questions = [
  {
    "id": 1,
    "category": "HISTORY",
    "air_date": "2004-12-31",
    "question": "'For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory'",
    "value": "$200",
    "answer": "Copernicus",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 2,
    "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
    "air_date": "2004-12-31",
    "question": "'No. 2: 1912 Olympian; football star at Carlisle Indian School; 6 MLB seasons with the Reds, Giants & Braves'",
    "value": "$200",
    "answer": "Jim Thorpe",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 3,
    "category": "EVERYBODY TALKS ABOUT IT...",
    "air_date": "2004-12-31",
    "question": "'The city of Yuma in this state has a record average of 4,055 hours of sunshine each year'",
    "value": "$200",
    "answer": "Arizona",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 4,
    "category": "THE COMPANY LINE",
    "air_date": "2004-12-31",
    "question": "'In 1963, live on \"The Art Linkletter Show\", this company served its billionth burger'",
    "value": "$200",
    "answer": "McDonald\\'s",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 5,
    "category": "EPITAPHS & TRIBUTES",
    "air_date": "2004-12-31",
    "question": "'Signer of the Dec. of Indep., framer of the Constitution of Mass., second President of the United States'",
    "value": "$200",
    "answer": "John Adams",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 6,
    "category": "3-LETTER WORDS",
    "air_date": "2004-12-31",
    "question": "'In the title of an Aesop fable, this insect shared billing with a grasshopper'",
    "value": "$200",
    "answer": "the ant",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 7,
    "category": "HISTORY",
    "air_date": "2004-12-31",
    "question": "'Built in 312 B.C. to link Rome & the South of Italy, it's still in use today'",
    "value": "$400",
    "answer": "the Appian Way",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 8,
    "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
    "air_date": "2004-12-31",
    "question": "'No. 8: 30 steals for the Birmingham Barons; 2,306 steals for the Bulls'",
    "value": "$400",
    "answer": "Michael Jordan",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 9,
    "category": "EVERYBODY TALKS ABOUT IT...",
    "air_date": "2004-12-31",
    "question": "'In the winter of 1971-72, a record 1,122 inches of snow fell at Rainier Paradise Ranger Station in this state'",
    "value": "$400",
    "answer": "Washington",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 10,
    "category": "THE COMPANY LINE",
    "air_date": "2004-12-31",
    "question": "'This housewares store was named for the packaging its merchandise came in & was first displayed on'",
    "value": "$400",
    "answer": "Crate & Barrel",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 11,
    "category": "EPITAPHS & TRIBUTES",
    "air_date": "2004-12-31",
    "question": "'\"And away we go\"'",
    "value": "$400",
    "answer": "Jackie Gleason",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 12,
    "category": "3-LETTER WORDS",
    "air_date": "2004-12-31",
    "question": "'Cows regurgitate this from the first stomach to the mouth & chew it again'",
    "value": "$400",
    "answer": "the cud",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 13,
    "category": "HISTORY",
    "air_date": "2004-12-31",
    "question": "'In 1000 Rajaraja I of the Cholas battled to take this Indian Ocean island now known for its tea'",
    "value": "$600",
    "answer": "Ceylon (or Sri Lanka)",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 14,
    "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
    "air_date": "2004-12-31",
    "question": "'No. 1: Lettered in hoops, football & lacrosse at Syracuse & if you think he couldn't act, ask his 11 \"unclean\" buddies'",
    "value": "$600",
    "answer": "Jim Brown",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 15,
    "category": "EVERYBODY TALKS ABOUT IT...",
    "air_date": "2004-12-31",
    "question": "'On June 28, 1994 the nat'l weather service began issuing this index that rates the intensity of the sun's radiation'",
    "value": "$600",
    "answer": "the UV index",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 16,
    "category": "THE COMPANY LINE",
    "air_date": "2004-12-31",
    "question": "'This company's Accutron watch, introduced in 1960, had a guarantee of accuracy to within one minute a  month'",
    "value": "$600",
    "answer": "Bulova",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 17,
    "category": "EPITAPHS & TRIBUTES",
    "air_date": "2004-12-31",
    "question": "'Outlaw: \"Murdered by a traitor and a coward whose name is not worthy to appear here\"'",
    "value": "$600",
    "answer": "Jesse James",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 18,
    "category": "3-LETTER WORDS",
    "air_date": "2004-12-31",
    "question": "'A small demon, or a mischievous child (who might be a little demon!)'",
    "value": "$600",
    "answer": "imp",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 19,
    "category": "HISTORY",
    "air_date": "2004-12-31",
    "question": "'Karl led the first of these Marxist organizational efforts; the second one began in 1889'",
    "value": "$800",
    "answer": "the International",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 20,
    "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
    "air_date": "2004-12-31",
    "question": "'No. 10: FB/LB for Columbia U. in the 1920s; MVP for the Yankees in '27 & '36; \"Gibraltar in Cleats\"'",
    "value": "$800",
    "answer": "(Lou) Gehrig",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 21,
    "category": "EVERYBODY TALKS ABOUT IT...",
    "air_date": "2004-12-31",
    "question": "'Africa's lowest temperature was 11 degrees below zero in 1935 at Ifrane, just south of Fez in this country'",
    "value": "$800",
    "answer": "Morocco",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 22,
    "category": "THE COMPANY LINE",
    "air_date": "2004-12-31",
    "question": "'Edward Teller & this man partnered in 1898 to sell high fashions to women'",
    "value": "$800",
    "answer": "(Paul) Bonwit",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 23,
    "category": "EPITAPHS & TRIBUTES",
    "air_date": "2004-12-31",
    "question": "'1939 Oscar winner: \"...you are a credit to your craft, your race and to your family\"'",
    "value": "$2,000",
    "answer": "Hattie McDaniel (for her role in Gone with the Wind)",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 24,
    "category": "3-LETTER WORDS",
    "air_date": "2004-12-31",
    "question": "'In geologic time one of these, shorter than an eon, is divided into periods & subdivided into epochs'",
    "value": "$800",
    "answer": "era",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 25,
    "category": "HISTORY",
    "air_date": "2004-12-31",
    "question": "'This Asian political party was founded in 1885 with \"Indian National\" as part of its name'",
    "value": "$1000",
    "answer": "the Congress Party",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 26,
    "category": "ESPN's TOP 10 ALL-TIME ATHLETES",
    "air_date": "2004-12-31",
    "question": "'No. 5: Only center to lead the NBA in assists; track scholarship to Kansas U.; marathoner; volleyballer'",
    "value": "$1000",
    "answer": "(Wilt) Chamberlain",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 27,
    "category": "THE COMPANY LINE",
    "air_date": "2004-12-31",
    "question": "'The Kirschner brothers, Don & Bill, named this ski company for themselves & the second-highest mountain'",
    "value": "$1000",
    "answer": "K2",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 28,
    "category": "EPITAPHS & TRIBUTES",
    "air_date": "2004-12-31",
    "question": "'Revolutionary War hero: \"His spirit is in Vermont now\"'",
    "value": "$1000",
    "answer": "Ethan Allen",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 29,
    "category": "3-LETTER WORDS",
    "air_date": "2004-12-31",
    "question": "'A single layer of paper, or to perform one's craft diligently'",
    "value": "$1000",
    "answer": "ply",
    "round": "Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 30,
    "category": "DR. SEUSS AT THE MULTIPLEX",
    "air_date": "2004-12-31",
    "question": "'<a href=\"http://www.j-archive.com/media/2004-12-31_DJ_23.mp3\">Beyond ovoid abandonment, beyond ovoid betrayal... you won't believe the ending when he \"Hatches the Egg\"</a>'",
    "value": "$400",
    "answer": "Horton",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 31,
    "category": "PRESIDENTIAL STATES OF BIRTH",
    "air_date": "2004-12-31",
    "question": "'California'",
    "value": "$400",
    "answer": "Nixon",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 32,
    "category": "AIRLINE TRAVEL",
    "air_date": "2004-12-31",
    "question": "'It can be a place to leave your puppy when you take a trip, or a carrier for him that fits under an airplane seat'",
    "value": "$400",
    "answer": "a kennel",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 33,
    "category": "THAT OLD-TIME RELIGION",
    "air_date": "2004-12-31",
    "question": "'He's considered the author of the Pentateuch, which is hard to believe, as Deuteronomy continues after his death'",
    "value": "$400",
    "answer": "Moses",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 34,
    "category": "MUSICAL TRAINS",
    "air_date": "2004-12-31",
    "question": "'Steven Tyler of this band lent his steamin' vocals to \"Train Kept A-Rollin'\", first popularized by the Yardbirds'",
    "value": "$400",
    "answer": "Aerosmith",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 35,
    "category": "\"X\"s & \"O\"s",
    "air_date": "2004-12-31",
    "question": "'Around 100 A.D. Tacitus wrote a book on how this art of persuasive speaking had declined since Cicero'",
    "value": "$400",
    "answer": "oratory",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 36,
    "category": "PRESIDENTIAL STATES OF BIRTH",
    "air_date": "2004-12-31",
    "question": "'1 of the 2 born in Vermont'",
    "value": "$800",
    "answer": "Coolidge (or Chester Arthur)",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 37,
    "category": "AIRLINE TRAVEL",
    "air_date": "2004-12-31",
    "question": "'When it began on Pan Am & Qantas in the late '70s, it was basically a roped-off part of the economy cabin with free drinks'",
    "value": "$800",
    "answer": "business class",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 38,
    "category": "THAT OLD-TIME RELIGION",
    "air_date": "2004-12-31",
    "question": "'Ali, who married this man's daughter Fatima, is considered by Shia Muslims to be his true successor'",
    "value": "$800",
    "answer": "Muhammed",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 39,
    "category": "MUSICAL TRAINS",
    "air_date": "2004-12-31",
    "question": "'During the 1954-1955 Sun sessions, Elvis climbed aboard this train \"sixteen coaches long\"'",
    "value": "$800",
    "answer": "the \"Mystery Train\"",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 40,
    "category": "\"X\"s & \"O\"s",
    "air_date": "2004-12-31",
    "question": "'The shorter glass seen <a href=\"http://www.j-archive.com/media/2004-12-31_DJ_12.jpg\" target=\"_blank\">here</a>, or a quaint cocktail made with sugar & bitters'",
    "value": "$800",
    "answer": "an old-fashioned",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 41,
    "category": "DR. SEUSS AT THE MULTIPLEX",
    "air_date": "2004-12-31",
    "question": "'<a href=\"http://www.j-archive.com/media/2004-12-31_DJ_26.mp3\">Ripped from today's headlines, he was a turtle king gone mad; Mack was the one good turtle who'd bring him down</a>'",
    "value": "$1200",
    "answer": "Yertle",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 42,
    "category": "AIRLINE TRAVEL",
    "air_date": "2004-12-31",
    "question": "'In 2003 this airline agreed to buy KLM, creating Europe's largest airline'",
    "value": "$2,000",
    "answer": "Air France",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 43,
    "category": "THAT OLD-TIME RELIGION",
    "air_date": "2004-12-31",
    "question": "'Philadelphia got its start as a colony for this religious group of which William Penn was a member'",
    "value": "$1200",
    "answer": "the Quakers",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 44,
    "category": "MUSICAL TRAINS",
    "air_date": "2004-12-31",
    "question": "'This \"Modern Girl\" first hit the Billboard Top 10 with \"Morning Train (Nine To Five)\"'",
    "value": "$1200",
    "answer": "(Sheena) Easton",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 45,
    "category": "\"X\"s & \"O\"s",
    "air_date": "2004-12-31",
    "question": "'This stiff silken fabric is favored for bridal gowns, like Christina Applegate's in 2001'",
    "value": "$1200",
    "answer": "organza",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 46,
    "category": "DR. SEUSS AT THE MULTIPLEX",
    "air_date": "2004-12-31",
    "question": "'<a href=\"http://www.j-archive.com/media/2004-12-31_DJ_25.mp3\">Somewhere between truth & fiction lies Marco's reality... on Halloween, you won't believe you saw it on this St.</a>'",
    "value": "$1600",
    "answer": "Mulberry Street",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 47,
    "category": "AIRLINE TRAVEL",
    "air_date": "2004-12-31",
    "question": "'In 2004 United launched this new service that features low fares & more seats per plane'",
    "value": "$1600",
    "answer": "Ted",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 48,
    "category": "THAT OLD-TIME RELIGION",
    "air_date": "2004-12-31",
    "question": "'With Mary I's accession in 1553 he ran to Geneva; he returned in 1559 & reformed the Church of Scotland'",
    "value": "$1600",
    "answer": "(John) Knox",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 49,
    "category": "MUSICAL TRAINS",
    "air_date": "2004-12-31",
    "question": "'This band's \"Train In Vain\" was a hidden track on its original 1979 \"London Calling\" album'",
    "value": "$1600",
    "answer": "The Clash",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 50,
    "category": "\"X\"s & \"O\"s",
    "air_date": "2004-12-31",
    "question": "'Cross-country skiing is sometimes referred to by these 2 letters, the same ones used to denote 90 in Roman numerals'",
    "value": "$1600",
    "answer": "XC",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 51,
    "category": "DR. SEUSS AT THE MULTIPLEX",
    "air_date": "2004-12-31",
    "question": "'<a href=\"http://www.j-archive.com/media/2004-12-31_DJ_24.mp3\">\"500 Hats\"... 500 ways to die.  On July 4th, this young boy will defy a king... & become a legend</a>'",
    "value": "$2000",
    "answer": "Bartholomew Cubbins",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 52,
    "category": "AIRLINE TRAVEL",
    "air_date": "2004-12-31",
    "question": "'In the seat pocket you'll find the catalog called \"Sky\" this, with must-haves like a solar-powered patio umbrella'",
    "value": "$2000",
    "answer": "Mall",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 53,
    "category": "THAT OLD-TIME RELIGION",
    "air_date": "2004-12-31",
    "question": "'In 1534 he & his buddy Francis Xavier founded the Society of Jesus'",
    "value": "$3,200",
    "answer": "(St. Ignatius) Loyola",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 54,
    "category": "MUSICAL TRAINS",
    "air_date": "2004-12-31",
    "question": "'In 1961 James Brown announced \"all aboard\" for this train'",
    "value": "$2000",
    "answer": "\"Night Train\"",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 55,
    "category": "\"X\"s & \"O\"s",
    "air_date": "2004-12-31",
    "question": "'This 1797 imbroglio began when 3 French agents demanded a huge bribe from U.S. diplomats'",
    "value": "$2000",
    "answer": "the XYZ Affair",
    "round": "Double Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 56,
    "category": "THE SOLAR SYSTEM",
    "air_date": "2004-12-31",
    "question": "'Objects that pass closer to the sun than Mercury have been named for this mythological figure'",
    "value": null,
    "answer": "Icarus",
    "round": "Final Jeopardy!",
    "show_number": "4680"
  },
  {
    "id": 57,
    "category": "GEOGRAPHY \"E\"",
    "air_date": "2010-07-06",
    "question": "'It's the largest kingdom in the United Kingdom'",
    "value": "$200",
    "answer": "England",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 58,
    "category": "RADIO DISNEY",
    "air_date": "2010-07-06",
    "question": "'\"Party In The U.S.A.\" is by this singer who also plays a young lady named Hannah'",
    "value": "$200",
    "answer": "Miley Cyrus",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 59,
    "category": "PARTS OF PEACH",
    "air_date": "2010-07-06",
    "question": "'If this part of a peach is downy or fuzzy, the fruit's called a peach; if it's smooth, a nectarine'",
    "value": "$200",
    "answer": "the skin",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 60,
    "category": "BE FRUITFUL & MULTIPLY",
    "air_date": "2010-07-06",
    "question": "'4 x 12'",
    "value": "$200",
    "answer": "48",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 61,
    "category": "LET'S BOUNCE",
    "air_date": "2010-07-06",
    "question": "'This verb for bouncing a basketball sounds like you're slobbering'",
    "value": "$200",
    "answer": "dribbling",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 62,
    "category": "RHYMES WITH SMART",
    "air_date": "2010-07-06",
    "question": "'Blood pumper'",
    "value": "$200",
    "answer": "heart",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 63,
    "category": "GEOGRAPHY \"E\"",
    "air_date": "2010-07-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-07-06_J_22.wmv\">Tate: I'm Tate Shaffer aboard the <i>National Geographic Endeavour</i>.  Alex: And...</a>)  We're here in the Galapagos Islands at zero degrees latitude, which means we're right above this imaginary line that goes all the way around the Earth'",
    "value": "$400",
    "answer": "the equator",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 64,
    "category": "RADIO DISNEY",
    "air_date": "2010-07-06",
    "question": "'\"Everybody Else\" knows these huggable toys precede \"On Fire\" in the name of a Radio Disney top 30 band; do you?'",
    "value": "$400",
    "answer": "Care Bears",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 65,
    "category": "PARTS OF PEACH",
    "air_date": "2010-07-06",
    "question": "'Peaches are more than 80% this compound'",
    "value": "$400",
    "answer": "H2O",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 66,
    "category": "BE FRUITFUL & MULTIPLY",
    "air_date": "2010-07-06",
    "question": "'7 x 7 x 2'",
    "value": "$400",
    "answer": "98",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 67,
    "category": "LET'S BOUNCE",
    "air_date": "2010-07-06",
    "question": "'Sound navigation& ranging is the full name for this device that bounces radio waves underwater'",
    "value": "$400",
    "answer": "sonar",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 68,
    "category": "RHYMES WITH SMART",
    "air_date": "2010-07-06",
    "question": "'Small, slender missile thrown at a board in a game'",
    "value": "$400",
    "answer": "a dart",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 69,
    "category": "GEOGRAPHY \"E\"",
    "air_date": "2010-07-06",
    "question": "'This island in the South Pacific is named for the day of its discovery, a religious holiday'",
    "value": "$600",
    "answer": "Easter Island",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 70,
    "category": "RADIO DISNEY",
    "air_date": "2010-07-06",
    "question": "'\"The songs on 'Under My Skin' are...deeper than those on 'Let Go'\" said this Canadian on Radio Disney's website'",
    "value": "$600",
    "answer": "Avril Lavigne",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 71,
    "category": "PARTS OF PEACH",
    "air_date": "2010-07-06",
    "question": "'5-letter word for the hard interior of a peach'",
    "value": "$600",
    "answer": "the stone",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 72,
    "category": "BE FRUITFUL & MULTIPLY",
    "air_date": "2010-07-06",
    "question": "'3 x 4 x 5 x 6'",
    "value": "$600",
    "answer": "360",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 73,
    "category": "LET'S BOUNCE",
    "air_date": "2010-07-06",
    "question": "'In this kid's game, you bounce a small rubber ball while picking up 6-pronged metal objects'",
    "value": "$600",
    "answer": "jacks",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 74,
    "category": "RHYMES WITH SMART",
    "air_date": "2010-07-06",
    "question": "'It can be a separating line in your hair or a role in a play'",
    "value": "$600",
    "answer": "a part",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 75,
    "category": "GEOGRAPHY \"E\"",
    "air_date": "2010-07-06",
    "question": "'Parts of the Arabian and Libyan deserts are found in this African country'",
    "value": "$800",
    "answer": "Egypt",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 76,
    "category": "RADIO DISNEY",
    "air_date": "2010-07-06",
    "question": "'\"I Never Told You\" this alliteratively named singer hit Disney's Top 30 with \"Fallin' For You\"; wait, I just did'",
    "value": "$800",
    "answer": "Colbie Caillat",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 77,
    "category": "PARTS OF PEACH",
    "air_date": "2010-07-06",
    "question": "'These parts of a peach tree are glossy green, pointed & lance shaped'",
    "value": "$800",
    "answer": "leaves",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 78,
    "category": "BE FRUITFUL & MULTIPLY",
    "air_date": "2010-07-06",
    "question": "'5 x 10 x 15'",
    "value": "$800",
    "answer": "750",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 79,
    "category": "LET'S BOUNCE",
    "air_date": "2010-07-06",
    "question": "'It's a type of bounce house, or a dance made famous by Michael Jackson'",
    "value": "$800",
    "answer": "the moonwalk",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 80,
    "category": "RHYMES WITH SMART",
    "air_date": "2010-07-06",
    "question": "'A graphic representation of information'",
    "value": "$800",
    "answer": "a chart",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 81,
    "category": "GEOGRAPHY \"E\"",
    "air_date": "2010-07-06",
    "question": "'The family history you wrote for school might include entering the U.S. at this island in New York Bay'",
    "value": "$2,000",
    "answer": "Ellis Island",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 82,
    "category": "RADIO DISNEY",
    "air_date": "2010-07-06",
    "question": "'Lead singer Ryan Tedder of this band has \"All The Right Moves\"'",
    "value": "$1000",
    "answer": "OneRepublic",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 83,
    "category": "PARTS OF PEACH",
    "air_date": "2010-07-06",
    "question": "'These parts of a peach tree grow at nodes along the shoots of the previous season's growth; they're usually pink'",
    "value": "$1000",
    "answer": "blossoms",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 84,
    "category": "BE FRUITFUL & MULTIPLY",
    "air_date": "2010-07-06",
    "question": "'2 x 1,035'",
    "value": "$1000",
    "answer": "2,070",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 85,
    "category": "LET'S BOUNCE",
    "air_date": "2010-07-06",
    "question": "'This device whose name is from the Italian for \"springboard\" was perfected in the 1930s'",
    "value": "$1000",
    "answer": "a trampoline",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 86,
    "category": "RHYMES WITH SMART",
    "air_date": "2010-07-06",
    "question": "'Composer Wolfgang'",
    "value": "$1000",
    "answer": "Mozart",
    "round": "Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 87,
    "category": "SCIENCE CLASS",
    "air_date": "2010-07-06",
    "question": "'99.95% of the mass of an atom is in this part'",
    "value": "$400",
    "answer": "the nucleus",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 88,
    "category": "KIDS IN SPORTS",
    "air_date": "2010-07-06",
    "question": "'Park View of Chula Vista, California beat Taipei 6-3 to win this organization's 2009 World Series'",
    "value": "$400",
    "answer": "the Little League",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 89,
    "category": "JUST THE FACTS",
    "air_date": "2010-07-06",
    "question": "'This hero of several books is 11 when he discovers he's a wizard'",
    "value": "$400",
    "answer": "Harry Potter",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 90,
    "category": "SEE & SAY",
    "air_date": "2010-07-06",
    "question": "'Say the name of <a href=\"http://www.j-archive.com/media/2010-07-06_DJ_26.jpg\" target=\"_blank\">this</a> type of mollusk you see'",
    "value": "$400",
    "answer": "an octopus",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 91,
    "category": "NEWS TO ME",
    "air_date": "2010-07-06",
    "question": "'A 7.0 magnitude earthquake in this Caribbean country Jan. 12, 2010 brought a world outpouring of aid'",
    "value": "$400",
    "answer": "Haiti",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 92,
    "category": "IN THE DICTIONARY",
    "air_date": "2010-07-06",
    "question": "'It's the 4-letter name of the pleated skirt worn by men in Scotland'",
    "value": "$400",
    "answer": "a kilt",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 93,
    "category": "SCIENCE CLASS",
    "air_date": "2010-07-06",
    "question": "'During this plant process, carbon dioxide & water combine with light energy to create oxygen & glucose'",
    "value": "$800",
    "answer": "photosynthesis",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 94,
    "category": "KIDS IN SPORTS",
    "air_date": "2010-07-06",
    "question": "'The perfect waves of New Zealand's Piha Beach were the site for the 2010 World Junior Championships of this'",
    "value": "$800",
    "answer": "surfing",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 95,
    "category": "JUST THE FACTS",
    "air_date": "2010-07-06",
    "question": "'This city, the seat of Clark County, Nevada, has been called \"the entertainment capital of the world\"'",
    "value": "$800",
    "answer": "Las Vegas",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 96,
    "category": "SEE & SAY",
    "air_date": "2010-07-06",
    "question": "'Say <a href=\"http://www.j-archive.com/media/2010-07-06_DJ_27.jpg\" target=\"_blank\">this</a> state that was admitted to the Union in 1859'",
    "value": "$800",
    "answer": "Oregon",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 97,
    "category": "NEWS TO ME",
    "air_date": "2010-07-06",
    "question": "'This car company has been in the news for widespread recalls of its Corollas & other models'",
    "value": "$800",
    "answer": "Toyota",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 98,
    "category": "IN THE DICTIONARY",
    "air_date": "2010-07-06",
    "question": "'As an adjective, it can mean proper; as a verb, \"to grade papers\"'",
    "value": "$800",
    "answer": "correct",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 99,
    "category": "SCIENCE CLASS",
    "air_date": "2010-07-06",
    "question": "'The wedge is an adaptation of the simple machine called the inclined this'",
    "value": "$1200",
    "answer": "plane",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 100,
    "category": "KIDS IN SPORTS",
    "air_date": "2010-07-06",
    "question": "'With a mighty leap of 5'1\", David Mosely set the U.S. 10 & under record in this event back in 1977'",
    "value": "$1200",
    "answer": "the high jump",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 101,
    "category": "JUST THE FACTS",
    "air_date": "2010-07-06",
    "question": "'<a href=\"http://www.j-archive.com/media/2010-07-06_DJ_14.jpg\" target=\"_blank\">This dog breed seen here</a> is a loyal and protective companion'",
    "value": "$1200",
    "answer": "a German Shepherd",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 102,
    "category": "SEE & SAY",
    "air_date": "2010-07-06",
    "question": "'Say the name of <a href=\"http://www.j-archive.com/media/2010-07-06_DJ_28.jpg\" target=\"_blank\">this</a> bug; don't worry, it doesn't breathe fire'",
    "value": "$1200",
    "answer": "the dragonfly",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 103,
    "category": "NEWS TO ME",
    "air_date": "2010-07-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-07-06_DJ_21.wmv\">Jimmy of the Clue Crew demonstrates, putting his arm over his mouth.</a>) To avoid spreading germs & maybe flu, we learned the sneeze named for this character made famous in an 1897 book'",
    "value": "$1200",
    "answer": "Dracula",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 104,
    "category": "IN THE DICTIONARY",
    "air_date": "2010-07-06",
    "question": "'Maize is another word for this'",
    "value": "$1200",
    "answer": "corn",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 105,
    "category": "SCIENCE CLASS",
    "air_date": "2010-07-06",
    "question": "'Of the 6 noble gases on the periodic table, it is the lightest'",
    "value": "$5,000",
    "answer": "helium",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 106,
    "category": "KIDS IN SPORTS",
    "air_date": "2010-07-06",
    "question": "'11-year-old Ashlyn White won a 2009 U.S. youth title in this martial art in which you try to throw your opponent'",
    "value": "$1600",
    "answer": "judo",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 107,
    "category": "JUST THE FACTS",
    "air_date": "2010-07-06",
    "question": "'In 1751 the Penn Provincial Assembly placed the order for this symbol of freedom, now in Philadelphia'",
    "value": "$1600",
    "answer": "the Liberty Bell",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 108,
    "category": "SEE & SAY",
    "air_date": "2010-07-06",
    "question": "'Say the name of <a href=\"http://www.j-archive.com/media/2010-07-06_DJ_29.jpg\" target=\"_blank\">these</a> big trees; it has a color in it'",
    "value": "$1600",
    "answer": "redwood",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 109,
    "category": "NEWS TO ME",
    "air_date": "2010-07-06",
    "question": "'In a surprise, Ted Kennedy's old Senate seat in this state went to a Republican in a January 2010 election'",
    "value": "$1600",
    "answer": "Massachusetts",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 110,
    "category": "IN THE DICTIONARY",
    "air_date": "2010-07-06",
    "question": "'This word for someone who walks comes from the Latin for \"foot\"'",
    "value": "$5,000",
    "answer": "pedestrian",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 111,
    "category": "SCIENCE CLASS",
    "air_date": "2010-07-06",
    "question": "'Lava & igneous rock are formed from this hot liquid rock material found under the earth's crust'",
    "value": "$2000",
    "answer": "magma",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 112,
    "category": "KIDS IN SPORTS",
    "air_date": "2010-07-06",
    "question": "'This sport has an under-17 World Cup every 2 years; Haris Seferovic starred for the 2009 champion Switzerland'",
    "value": "$2000",
    "answer": "soccer",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 113,
    "category": "JUST THE FACTS",
    "air_date": "2010-07-06",
    "question": "'He's the older son of Prince Charles and the late Princess Diana'",
    "value": "$2000",
    "answer": "Prince William",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 114,
    "category": "SEE & SAY",
    "air_date": "2010-07-06",
    "question": "'Say the name of <a href=\"http://www.j-archive.com/media/2010-07-06_DJ_30.jpg\" target=\"_blank\">this</a> man you see shaking hands with the Premier of China'",
    "value": "$2000",
    "answer": "Ronald Reagan",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 115,
    "category": "NEWS TO ME",
    "air_date": "2010-07-06",
    "question": "'Falcon Heene, who it turned out was safe at home, not flying over Colorado, became known as this \"boy\"'",
    "value": "$2000",
    "answer": "the balloon boy",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 116,
    "category": "IN THE DICTIONARY",
    "air_date": "2010-07-06",
    "question": "'Kayak is an example of this, a word that reads the same forwards & backwards'",
    "value": "$2000",
    "answer": "a palindrome",
    "round": "Double Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 117,
    "category": "HISTORIC WOMEN",
    "air_date": "2010-07-06",
    "question": "'She was born in Virginia around 1596 & died in Kent, England in 1617'",
    "value": null,
    "answer": "Pocahontas",
    "round": "Final Jeopardy!",
    "show_number": "5957"
  },
  {
    "id": 118,
    "category": "ROYAL FEMALE NICKNAMES",
    "air_date": "2000-12-18",
    "question": "'Prime Minister Tony Blair dubbed her \"The People's Princess\"'",
    "value": "$100",
    "answer": "Princess Diana",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 119,
    "category": "TV ACTORS & ROLES",
    "air_date": "2000-12-18",
    "question": "'Once Tommy Mullaney on \"L.A. Law\", John Spencer now plays White House chief of staff Leo McGarry on this series'",
    "value": "$100",
    "answer": "The West Wing",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 120,
    "category": "TRAVEL & TOURISM",
    "air_date": "2000-12-18",
    "question": "'The Cinderella Castle Mystery Tour is a highlight of this Asian city's Disneyland'",
    "value": "$100",
    "answer": "Tokyo",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 121,
    "category": "\"I\" LADS",
    "air_date": "2000-12-18",
    "question": "'This punk rock hitmaker heard here has had numerous hits on both sides of the Atlantic'",
    "value": "$100",
    "answer": "Billy Idol",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 122,
    "category": "FOREWORDS",
    "air_date": "2000-12-18",
    "question": "'\"Conrad begins (and ends) Marlow's journey... on the Thames, on the yawl, Nellie\", says the foreword to this novel'",
    "value": "$100",
    "answer": "Heart of Darkness",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 123,
    "category": "BACKWORDS",
    "air_date": "2000-12-18",
    "question": "'We'll look smart in these vehicles that returned to London in 1999'",
    "value": "$100",
    "answer": "Trams (smart)",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 124,
    "category": "ROYAL FEMALE NICKNAMES",
    "air_date": "2000-12-18",
    "question": "'She was \"The Untamed Heifer\" & \"The Virgin Queen\"'",
    "value": "$200",
    "answer": "Elizabeth I",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 125,
    "category": "TV ACTORS & ROLES",
    "air_date": "2000-12-18",
    "question": "'Barbra Streisand knows he played Lt. Col. Bill \"Raider\" Kelly on \"Pensacola: Wings of Gold\"'",
    "value": "$200",
    "answer": "James Brolin",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 126,
    "category": "TRAVEL & TOURISM",
    "air_date": "2000-12-18",
    "question": "'The home of silk merchant Jim Thompson, who disappeared in 1967, is a tourist attraction in this Thai city'",
    "value": "$200",
    "answer": "Bangkok",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 127,
    "category": "\"I\" LADS",
    "air_date": "2000-12-18",
    "question": "'Czar at 17, he was famous for extraordinary sadism & cruelty, even as a boy'",
    "value": "$200",
    "answer": "Ivan the Terrible",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 128,
    "category": "FOREWORDS",
    "air_date": "2000-12-18",
    "question": "'Part 2 \"is Lilliput in reverse, but...also offers some of\" his \"fiercest assaults upon the behavior of\" his countrymen'",
    "value": "$200",
    "answer": "Jonathan Swift",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 129,
    "category": "BACKWORDS",
    "air_date": "2000-12-18",
    "question": "'Ed leaves pools of water on the carpet when he comes in from sailing this boat'",
    "value": "$200",
    "answer": "Sloop (pools)",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 130,
    "category": "ROYAL FEMALE NICKNAMES",
    "air_date": "2000-12-18",
    "question": "'Mark Antony called her \"The Queen of Queens\"'",
    "value": "$300",
    "answer": "Cleopatra",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 131,
    "category": "TV ACTORS & ROLES",
    "air_date": "2000-12-18",
    "question": "'(Hi, I'm Wallace Langham)  I played Don Kirshner in VH1's TV movie about this quartet who sang \"Daydream Believer\"'",
    "value": "$300",
    "answer": "The Monkees",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 132,
    "category": "TRAVEL & TOURISM",
    "air_date": "2000-12-18",
    "question": "'We're not stringing you along: this capital of the Czech Republic is famous for its puppet theatres'",
    "value": "$300",
    "answer": "Prague",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 133,
    "category": "\"I\" LADS",
    "air_date": "2000-12-18",
    "question": "'Nudge, nudge, wink, wink!  This man seen here starred on a classic British comedy show'",
    "value": "$300",
    "answer": "Eric Idle",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 134,
    "category": "FOREWORDS",
    "air_date": "2000-12-18",
    "question": "'She said that her husband Frank O'Connor was the fuel that kept her spirited while she wrote \"The Fountainhead\"'",
    "value": "$300",
    "answer": "Ayn Rand",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 135,
    "category": "BACKWORDS",
    "air_date": "2000-12-18",
    "question": "'You'd be naive to think you can make bottled water that's more popular than this'",
    "value": "$300",
    "answer": "Evian (naive)",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 136,
    "category": "ROYAL FEMALE NICKNAMES",
    "air_date": "2000-12-18",
    "question": "'The 19th century's \"Widow of Windsor\"'",
    "value": "$400",
    "answer": "Queen Victoria",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 137,
    "category": "TV ACTORS & ROLES",
    "air_date": "2000-12-18",
    "question": "'Teri Hatcher looked \"shipshape\" as one of the singing \"mermaids\" who jumped on board this cruisin' series in 1985'",
    "value": "$400",
    "answer": "The Love Boat",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 138,
    "category": "TRAVEL & TOURISM",
    "air_date": "2000-12-18",
    "question": "'Jomo Kenyatta International Airport serves this world capital'",
    "value": "$500",
    "answer": "Nairobi, Kenya",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 139,
    "category": "\"I\" LADS",
    "air_date": "2000-12-18",
    "question": "'His is the first & longest book of the Bible's major prophets'",
    "value": "$400",
    "answer": "Isaiah",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 140,
    "category": "FOREWORDS",
    "air_date": "2000-12-18",
    "question": "'One edition calls this Darwin opus one of \"the most readable and approachable\" of revolutionary scientific works'",
    "value": "$400",
    "answer": "The Origin of Species",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 141,
    "category": "BACKWORDS",
    "air_date": "2000-12-18",
    "question": "'Aye, lass, I'll wed thee ere this has dried on the fields'",
    "value": "$400",
    "answer": "Dew (wed)",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 142,
    "category": "ROYAL FEMALE NICKNAMES",
    "air_date": "2000-12-18",
    "question": "'\"The Catholic\" of 15th century Spain'",
    "value": "$500",
    "answer": "Queen Isabella",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 143,
    "category": "TV ACTORS & ROLES",
    "air_date": "2000-12-18",
    "question": "'On \"Saturday Night Live\", he's famous for playing Craig the Cheerleader, Janet Reno & moi'",
    "value": "$500",
    "answer": "Will Ferrell",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 144,
    "category": "TRAVEL & TOURISM",
    "air_date": "2000-12-18",
    "question": "'Andrea Palladio's 1554 book on \"The Antiquities of\" this city was the standard guidebook for some 200 years'",
    "value": "$500",
    "answer": "Rome",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 145,
    "category": "\"I\" LADS",
    "air_date": "2000-12-18",
    "question": "'This auto exec's autobiography is one of the bestselling nonfiction works in publishing history'",
    "value": "$500",
    "answer": "Lee Iacocca",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 146,
    "category": "BACKWORDS",
    "air_date": "2000-12-18",
    "question": "'You know so much about policy, you qualify as this'",
    "value": "$500",
    "answer": "Wonk (know)",
    "round": "Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 147,
    "category": "PEOPLE IN HISTORY",
    "air_date": "2000-12-18",
    "question": "'After a 15-year stay in England, this proprietor of Pennsylvania returned to his colony in 1699'",
    "value": "$200",
    "answer": "William Penn",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 148,
    "category": "CINEMATIC DICTIONARY",
    "air_date": "2000-12-18",
    "question": "'SFX is the standard abbreviation for these, from the rustling of trees to cannon fire'",
    "value": "$200",
    "answer": "Sound effects",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 149,
    "category": "IT'S OURS!",
    "air_date": "2000-12-18",
    "question": "'Saint-Pierre & Miquelon'",
    "value": "$200",
    "answer": "France",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 150,
    "category": "BRITISH FASHION",
    "air_date": "2000-12-18",
    "question": "'Designer Vivienne Westwood ran a shop with Malcolm McLaren, who launched this Johnny Rotten band'",
    "value": "$200",
    "answer": "The Sex Pistols",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 151,
    "category": "ANDY WARHOL",
    "air_date": "2000-12-18",
    "question": "'Because he had the same thing for lunch every day for 20 years, Andy Warhol painted these, beginning in 1962'",
    "value": "$200",
    "answer": "Campbell\\'s Soup cans",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 152,
    "category": "THEATRE CROSSWORD CLUES \"M\"",
    "air_date": "2000-12-18",
    "question": "'Lerner & Loewe's \"Lusty Month\"<br />(3)'",
    "value": "$200",
    "answer": "May",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 153,
    "category": "PEOPLE IN HISTORY",
    "air_date": "2000-12-18",
    "question": "'This young man put his savings into a small Cleveland refinery in 1862 & eventually had an oil monopoly'",
    "value": "$400",
    "answer": "John D. Rockefeller",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 154,
    "category": "CINEMATIC DICTIONARY",
    "air_date": "2000-12-18",
    "question": "'Term for the flow of a film, maintained by keeping details consistent throughout a scene'",
    "value": "$400",
    "answer": "Continuity",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 155,
    "category": "IT'S OURS!",
    "air_date": "2000-12-18",
    "question": "'Montserrat'",
    "value": "$400",
    "answer": "Great Britain (United Kingdom)",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 156,
    "category": "BRITISH FASHION",
    "air_date": "2000-12-18",
    "question": "'Star designer John Galliano was born Juan Carlos Galliano in this British possession at the tip of Spain'",
    "value": "$400",
    "answer": "Gibraltar",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 157,
    "category": "ANDY WARHOL",
    "air_date": "2000-12-18",
    "question": "'Warhol went against his Capitalist tendencies with his portrait of this man, seen here'",
    "value": "$400",
    "answer": "Mao Tse-tung",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 158,
    "category": "THEATRE CROSSWORD CLUES \"M\"",
    "air_date": "2000-12-18",
    "question": "'Patrick Dennis' \"Auntie\"<br />(4)'",
    "value": "$400",
    "answer": "Mame",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 159,
    "category": "PEOPLE IN HISTORY",
    "air_date": "2000-12-18",
    "question": "'First Lady Helen Taft led a fund-raising drive for a memorial to this 1912 marine disaster'",
    "value": "$600",
    "answer": "Sinking of the Titanic",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 160,
    "category": "CINEMATIC DICTIONARY",
    "air_date": "2000-12-18",
    "question": "'Garland Jeffreys sang of having star-studded \"dreams\" of this size, like movie film'",
    "value": "$600",
    "answer": "35mm",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 161,
    "category": "IT'S OURS!",
    "air_date": "2000-12-18",
    "question": "'Cook Islands'",
    "value": "$600",
    "answer": "New Zealand",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 162,
    "category": "BRITISH FASHION",
    "air_date": "2000-12-18",
    "question": "'Katharine Hamnett created the '80s T-shirt telling us to \"choose\" this'",
    "value": "$600",
    "answer": "Life",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 163,
    "category": "ANDY WARHOL",
    "air_date": "2000-12-18",
    "question": "'Andy's \"15 minutes of fame\" quote was once the motto of this magazine'",
    "value": "$600",
    "answer": "Interview",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 164,
    "category": "THEATRE CROSSWORD CLUES \"M\"",
    "air_date": "2000-12-18",
    "question": "'It \"Becomes Electra\"<br />(8)'",
    "value": "$600",
    "answer": "Mourning",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 165,
    "category": "PEOPLE IN HISTORY",
    "air_date": "2000-12-18",
    "question": "'This Chiricahua Apache was a popular attraction at the 1904 World's Fair in St. Louis'",
    "value": "$800",
    "answer": "Geronimo",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 166,
    "category": "CINEMATIC DICTIONARY",
    "air_date": "2000-12-18",
    "question": "'The inventors of this camera-stabilizing device won a special 1977 Oscar'",
    "value": "$1,000",
    "answer": "Steadicam",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 167,
    "category": "IT'S OURS!",
    "air_date": "2000-12-18",
    "question": "'Madeira Islands'",
    "value": "$800",
    "answer": "Portugal",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 168,
    "category": "ANDY WARHOL",
    "air_date": "2000-12-18",
    "question": "'Andy's loft on East 47th Street got this nickname from its former use & Andy's mass-production techniques'",
    "value": "$2,000",
    "answer": "The Factory",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 169,
    "category": "THEATRE CROSSWORD CLUES \"M\"",
    "air_date": "2000-12-18",
    "question": "'Colchian jilted by Jason<br />(5)'",
    "value": "$800",
    "answer": "Medea",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 170,
    "category": "PEOPLE IN HISTORY",
    "air_date": "2000-12-18",
    "question": "'In 1801 this onetime VP compiled \"A Manual of Parliamentary Practice\" still used in the U.S. Senate'",
    "value": "$1000",
    "answer": "Thomas Jefferson",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 171,
    "category": "CINEMATIC DICTIONARY",
    "air_date": "2000-12-18",
    "question": "'Near the end of the credits comes the \"cutter\" of this, the exposed but unfinished film'",
    "value": "$1000",
    "answer": "Negative cutter",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 172,
    "category": "IT'S OURS!",
    "air_date": "2000-12-18",
    "question": "'Northern Mariana Islands'",
    "value": "$1000",
    "answer": "USA",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 173,
    "category": "ANDY WARHOL",
    "air_date": "2000-12-18",
    "question": "'Warhol became the manager of this Lou Reed rock group in 1965 & produced their first album'",
    "value": "$1000",
    "answer": "Velvet Underground",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 174,
    "category": "THEATRE CROSSWORD CLUES \"M\"",
    "air_date": "2000-12-18",
    "question": "'Faust's fiendish foe<br />(14)'",
    "value": "$1000",
    "answer": "Mephistopheles",
    "round": "Double Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 175,
    "category": "SPORTS LEGENDS",
    "air_date": "2000-12-18",
    "question": "'If Joe DiMaggio's hitting streak had gone one more game in 1941, this company would have given him a $10,000 contract'",
    "value": null,
    "answer": "H.J. Heinz (Heinz 57 Varieties)",
    "round": "Final Jeopardy!",
    "show_number": "3751"
  },
  {
    "id": 176,
    "category": "GENERAL SCIENCE",
    "air_date": "2000-07-19",
    "question": "'This white, glossy coating on your teeth is the hardest substance in the human body'",
    "value": "$100",
    "answer": "Enamel",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 177,
    "category": "GETTING POSSESSIVE",
    "air_date": "2000-07-19",
    "question": "'This bovine took the rap for the disastrous fire of October 8, 1871'",
    "value": "$100",
    "answer": "Mrs. O\\'Leary\\'s cow",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 178,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2000-07-19",
    "question": "'It's the kingdom whose flag is seen here (Union Jack)'",
    "value": "$100",
    "answer": "Great Britain/England",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 179,
    "category": "ARCHITECTS",
    "air_date": "2000-07-19",
    "question": "'Minoru Yamasaki reached new heights with this New York City complex'",
    "value": "$100",
    "answer": "World Trade Center",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 180,
    "category": "1994 FILMS",
    "air_date": "2000-07-19",
    "question": "'Quentin Tarantino directed this film & also had a bit role as Jimmy of Toluca Lake'",
    "value": "$100",
    "answer": "Pulp Fiction",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 181,
    "category": "THE EYES HAVE IT",
    "air_date": "2000-07-19",
    "question": "'A student, or a minor in Roman law'",
    "value": "$100",
    "answer": "Pupil",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 182,
    "category": "GENERAL SCIENCE",
    "air_date": "2000-07-19",
    "question": "'The time it takes for 50% of the atoms to decay in a radioactive substance is called this'",
    "value": "$200",
    "answer": "Half-life",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 183,
    "category": "GETTING POSSESSIVE",
    "air_date": "2000-07-19",
    "question": "'At 14,140 feet, this Rocky Mountain peak discovered in 1806 is one of Colorado's highest'",
    "value": "$200",
    "answer": "Pike\\'s Peak",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 184,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2000-07-19",
    "question": "'Seen here is the flag of this nation (the home of Bollywood)'",
    "value": "$200",
    "answer": "India",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 185,
    "category": "ARCHITECTS",
    "air_date": "2000-07-19",
    "question": "'William Pereira erected his Transamerica \"Pyramid\" in this city'",
    "value": "$200",
    "answer": "San Francisco",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 186,
    "category": "1994 FILMS",
    "air_date": "2000-07-19",
    "question": "'As mad bomber Howard Payne in this film, Dennis Hopper planted a bomb on an L.A. area transit bus'",
    "value": "$200",
    "answer": "Speed",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 187,
    "category": "THE EYES HAVE IT",
    "air_date": "2000-07-19",
    "question": "'A blow with a whip'",
    "value": "$200",
    "answer": "Lash",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 188,
    "category": "GENERAL SCIENCE",
    "air_date": "2000-07-19",
    "question": "'While compounds of this element are added to table salt, in its pure form it's quite poisonous'",
    "value": "$300",
    "answer": "Iodine",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 189,
    "category": "GETTING POSSESSIVE",
    "air_date": "2000-07-19",
    "question": "'While one creation slept, God took this to make Eve'",
    "value": "$300",
    "answer": "Adam\\'s rib",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 190,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2000-07-19",
    "question": "'Andy Garcia is a native of this country whose flag is seen here'",
    "value": "$300",
    "answer": "Cuba",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 191,
    "category": "ARCHITECTS",
    "air_date": "2000-07-19",
    "question": "'Charles Bulfinch, who contributed to the Capitol in Washington, D.C., designed this city's state house on Beacon Hill'",
    "value": "$300",
    "answer": "Boston",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 192,
    "category": "1994 FILMS",
    "air_date": "2000-07-19",
    "question": "'Jean Vander Pyl, who played Wilma in the original cartoon series, played Mrs. Feldspar in this movie adaptation'",
    "value": "$300",
    "answer": "The Flintstones",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 193,
    "category": "THE EYES HAVE IT",
    "air_date": "2000-07-19",
    "question": "'A hollow area that holds a light bulb'",
    "value": "$300",
    "answer": "Socket",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 194,
    "category": "GENERAL SCIENCE",
    "air_date": "2000-07-19",
    "question": "'The \"super\" class of these stars, the largest known, includes Antares & Betelgeuse'",
    "value": "$400",
    "answer": "Red giants",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 195,
    "category": "GETTING POSSESSIVE",
    "air_date": "2000-07-19",
    "question": "'You'll find this triangular island about 4 miles off the southeast coast of Massachusetts'",
    "value": "$400",
    "answer": "Martha\\'s Vineyard",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 196,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2000-07-19",
    "question": "'In the 1990s, this nation whose flag is seen here moved its seat of government to a different city'",
    "value": "$400",
    "answer": "Germany",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 197,
    "category": "ARCHITECTS",
    "air_date": "2000-07-19",
    "question": "'Dallas-Fort Worth Airport architect Gyo Obata helped design this Smithsonian museum'",
    "value": "$400",
    "answer": "Air & Space Museum",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 198,
    "category": "1994 FILMS",
    "air_date": "2000-07-19",
    "question": "'Containing the hit \"Can You Feel The Love Tonight\", it was Disney's first animated feature not based on an existing story'",
    "value": "$400",
    "answer": "The Lion King",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 199,
    "category": "THE EYES HAVE IT",
    "air_date": "2000-07-19",
    "question": "'Flower seen here (that fits the category)'",
    "value": "$400",
    "answer": "Iris",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 200,
    "category": "GENERAL SCIENCE",
    "air_date": "2000-07-19",
    "question": "'On the pH scale, a pH of 7 indicates this type of solution'",
    "value": "$500",
    "answer": "Neutral",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 201,
    "category": "GETTING POSSESSIVE",
    "air_date": "2000-07-19",
    "question": "'In Exodus, this was thrown down before Pharaoh at Moses' instruction'",
    "value": "$500",
    "answer": "Aaron\\'s rod (turned into a snake)",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 202,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2000-07-19",
    "question": "'This Mediterranean country whose flag is seen here is \"The Word\"'",
    "value": "$500",
    "answer": "Greece",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 203,
    "category": "ARCHITECTS",
    "air_date": "2000-07-19",
    "question": "'Louis Skidmore designed the secret atomic site that became this Tennessee town'",
    "value": "$500",
    "answer": "Oak Ridge",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 204,
    "category": "1994 FILMS",
    "air_date": "2000-07-19",
    "question": "'In this film Martin Scorsese says the TV audience wants \"To  watch the money\"'",
    "value": "$800",
    "answer": "Quiz Show",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 205,
    "category": "THE EYES HAVE IT",
    "air_date": "2000-07-19",
    "question": "'People say these are what you need to make it in Hollywood'",
    "value": "$500",
    "answer": "Contacts",
    "round": "Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 206,
    "category": "ALASKA",
    "air_date": "2000-07-19",
    "question": "'4 different species of bears live in Alaska:  Kodiak, grizzly, black & this'",
    "value": "$200",
    "answer": "Polar bears",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 207,
    "category": "INTERNATIONAL SPORTSMEN",
    "air_date": "2000-07-19",
    "question": "'Nike's stock fell when this basketball player announced his retirement in January 1999'",
    "value": "$200",
    "answer": "Michael Jordan",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 208,
    "category": "DRAMA QUEENS",
    "air_date": "2000-07-19",
    "question": "'In Euripides' play about this famed beauty, it's her double who goes to Troy'",
    "value": "$200",
    "answer": "Helen",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 209,
    "category": "ANGELS",
    "air_date": "2000-07-19",
    "question": "'In 1996 John Travolta spread his wings as this archangel'",
    "value": "$200",
    "answer": "Michael",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 210,
    "category": "IN EXILE",
    "air_date": "2000-07-19",
    "question": "'Porfirio Diaz seized power in this country in 1876, ruled for 35 years, fled in 1911 & died in exile'",
    "value": "$200",
    "answer": "Mexico",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 211,
    "category": "THE \"I\"s HAVE IT",
    "air_date": "2000-07-19",
    "question": "'This term for a fluid can also mean \"to sign\" as a contract'",
    "value": "$200",
    "answer": "Ink",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 212,
    "category": "ALASKA",
    "air_date": "2000-07-19",
    "question": "'Tony Knowles is pulling in $81,648 per annum in this job'",
    "value": "$400",
    "answer": "Governor",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 213,
    "category": "INTERNATIONAL SPORTSMEN",
    "air_date": "2000-07-19",
    "question": "'Ronaldo Luiz Nazario de Lima began playing this sport for Brazil's national team at age 17'",
    "value": "$400",
    "answer": "Soccer",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 214,
    "category": "DRAMA QUEENS",
    "air_date": "2000-07-19",
    "question": "'In a Shaw play, Caesar finds her hiding on a Sphinx'",
    "value": "$400",
    "answer": "Cleopatra",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 215,
    "category": "ANGELS",
    "air_date": "2000-07-19",
    "question": "'In Book III of \"Paradise Lost\", the angels play these, which are \"golden\" & \"ever-tuned\"'",
    "value": "$400",
    "answer": "harps",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 216,
    "category": "IN EXILE",
    "air_date": "2000-07-19",
    "question": "'In 1462 this printer known for movable type had to move out of Mainz'",
    "value": "$400",
    "answer": "Johannes Gutenberg",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 217,
    "category": "THE \"I\"s HAVE IT",
    "air_date": "2000-07-19",
    "question": "'Style of the 1877 painting seen here'",
    "value": "$400",
    "answer": "Impressionism",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 218,
    "category": "ALASKA",
    "air_date": "2000-07-19",
    "question": "'This second-largest Alaskan city wasn't named for an actor'",
    "value": "$600",
    "answer": "Fairbanks",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 219,
    "category": "INTERNATIONAL SPORTSMEN",
    "air_date": "2000-07-19",
    "question": "'Vladimir Samsonov is touted as Europe's only hope against China in this game'",
    "value": "$600",
    "answer": "Ping-pong",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 220,
    "category": "DRAMA QUEENS",
    "air_date": "2000-07-19",
    "question": "'A 1952 play covered the young life of this queen, like a 1998 Cate Blanchett film'",
    "value": "$600",
    "answer": "Elizabeth I",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 221,
    "category": "ANGELS",
    "air_date": "2000-07-19",
    "question": "'ABBA sang about these & Curtis Lee sang about \"Pretty Little\" these'",
    "value": "$600",
    "answer": "Angel Eyes",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 222,
    "category": "IN EXILE",
    "air_date": "2000-07-19",
    "question": "'Exiled for manslaughter, Eric the Red was forced to leave this country around 981'",
    "value": "$600",
    "answer": "Iceland",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 223,
    "category": "THE \"I\"s HAVE IT",
    "air_date": "2000-07-19",
    "question": "'Arabic for \"son of\", it comes before names like Saud'",
    "value": "$600",
    "answer": "Ibn",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 224,
    "category": "ALASKA",
    "air_date": "2000-07-19",
    "question": "'One of the 3 mottos that have been featured on regular Alaskan license plates'",
    "value": "$800",
    "answer": "\"The Last Frontier\", \"The Great Land\", or \"North to the Future\"",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 225,
    "category": "INTERNATIONAL SPORTSMEN",
    "air_date": "2000-07-19",
    "question": "'The Times of London estimates this chess player is taking home $20 mil. a year; that's some check, mate!'",
    "value": "$800",
    "answer": "Garry Kasparov",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 226,
    "category": "DRAMA QUEENS",
    "air_date": "2000-07-19",
    "question": "'In 1935 & '36 Helen Hayes reigned for 517 Broadway performances as this queen who reigned for 63 years'",
    "value": "$1,500",
    "answer": "Victoria",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 227,
    "category": "ANGELS",
    "air_date": "2000-07-19",
    "question": "'Group whose feast day is October 2, or a group founded in 1979 by Curtis Sliwa'",
    "value": "$800",
    "answer": "Guardian Angels",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 228,
    "category": "IN EXILE",
    "air_date": "2000-07-19",
    "question": "'David Ben-Gurion went to the U.S. in 1915 when this empire exiled Zionists from Palestine'",
    "value": "$800",
    "answer": "Ottoman Empire",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 229,
    "category": "THE \"I\"s HAVE IT",
    "air_date": "2000-07-19",
    "question": "'From the Latin for \"to overhang\", it means \"likely to happen at any moment\"'",
    "value": "$800",
    "answer": "Imminent",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 230,
    "category": "ALASKA",
    "air_date": "2000-07-19",
    "question": "'The mainland peninsula closest to Russia is named for this man'",
    "value": "$1000",
    "answer": "William Seward",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 231,
    "category": "INTERNATIONAL SPORTSMEN",
    "air_date": "2000-07-19",
    "question": "'New Zealand-born Jonah Lamu is tops on the pitch of this sport'",
    "value": "$1000",
    "answer": "Rugby",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 232,
    "category": "DRAMA QUEENS",
    "air_date": "2000-07-19",
    "question": "'The queen in Marlowe's \"Edward II\" is named this, like a famous queen of Spain'",
    "value": "$1000",
    "answer": "Isabella",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 233,
    "category": "ANGELS",
    "air_date": "2000-07-19",
    "question": "'With an appropriate-sounding name, John Dye plays the angel of this on \"Touched By An Angel\"'",
    "value": "$1000",
    "answer": "Angel of Death",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 234,
    "category": "IN EXILE",
    "air_date": "2000-07-19",
    "question": "'Moshoeshoe II was exiled twice before regaining this southern African country's throne in 1995'",
    "value": "$1000",
    "answer": "Lesotho",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 235,
    "category": "THE \"I\"s HAVE IT",
    "air_date": "2000-07-19",
    "question": "'Some scientists believe that the universe is undergoing expansion called this, also an economic term'",
    "value": "$1000",
    "answer": "Inflation",
    "round": "Double Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 236,
    "category": "THE MAP OF EUROPE",
    "air_date": "2000-07-19",
    "question": "'Bordering Italy, Austria, Hungary & Croatia, it's one of the world's newest independent countries'",
    "value": null,
    "answer": "Slovenia",
    "round": "Final Jeopardy!",
    "show_number": "3673"
  },
  {
    "id": 237,
    "category": "THE CIVIL WAR",
    "air_date": "2006-02-06",
    "question": "'His first act after being sworn in as president of the Confederacy was to send a peace commission to Washington, D.C.'",
    "value": "$200",
    "answer": "Jefferson Davis",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 238,
    "category": "CELEBS",
    "air_date": "2006-02-06",
    "question": "'On Sept. 14, 2005 she gave birth to Sean Preston Federline'",
    "value": "$200",
    "answer": "Britney Spears",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 239,
    "category": "WHAT'S IN A NAME?",
    "air_date": "2006-02-06",
    "question": "'Yeah, baby!  Meaning \"magnificent\", this Texas-sounding name comes with certain \"Powers\"'",
    "value": "$200",
    "answer": "Austin",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 240,
    "category": "EMOTICONS",
    "air_date": "2006-02-06",
    "question": "';-)<br />Ocular act that sends a signal'",
    "value": "$200",
    "answer": "winking",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 241,
    "category": "FLAG 'EM DOWN",
    "air_date": "2006-02-06",
    "question": "'The Alamo is located in this city & is depicted on its flag'",
    "value": "$200",
    "answer": "San Antonio",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 242,
    "category": "\"TEEN\" SCENE",
    "air_date": "2006-02-06",
    "question": "'Numerically speaking, read up on \"Fun Stuff\", \"Fashion\", \"Health\" & \"Stars\" at this magazine.com'",
    "value": "$200",
    "answer": "seventeen.com",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 243,
    "category": "THE CIVIL WAR",
    "air_date": "2006-02-06",
    "question": "'Tired of eating mule jerky, Vicksburg fell in July 1863 after a 6-week one of these military tactics'",
    "value": "$400",
    "answer": "a siege",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 244,
    "category": "CELEBS",
    "air_date": "2006-02-06",
    "question": "'The TV show \"Everybody Hates Chris\" is based on the childhood of this comic'",
    "value": "$400",
    "answer": "Chris Rock",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 245,
    "category": "WHAT'S IN A NAME?",
    "air_date": "2006-02-06",
    "question": "'This name shared by great & terrible rulers is a Russian variation of John'",
    "value": "$400",
    "answer": "Ivan",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 246,
    "category": "EMOTICONS",
    "air_date": "2006-02-06",
    "question": "':-$<br />It's where this emoticon tells you to \"put your money\"'",
    "value": "$400",
    "answer": "where your mouth is",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 247,
    "category": "FLAG 'EM DOWN",
    "air_date": "2006-02-06",
    "question": "'This descriptive nickname of the U.S. flag was coined by Francis Scott Key'",
    "value": "$400",
    "answer": "the Star-Spangled Banner",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 248,
    "category": "\"TEEN\" SCENE",
    "air_date": "2006-02-06",
    "question": "'If you're triskaidekaphobic, you're afraid of this number, & not just on a Friday'",
    "value": "$400",
    "answer": "thirteen",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 249,
    "category": "THE CIVIL WAR",
    "air_date": "2006-02-06",
    "question": "'Robert E. Lee saved this capital from capture with his June 1862 attack on McClellan's forces'",
    "value": "$600",
    "answer": "Richmond",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 250,
    "category": "CELEBS",
    "air_date": "2006-02-06",
    "question": "'He auditioned for & won the part of Ron Weasley with a rap that he wrote'",
    "value": "$600",
    "answer": "Rupert Grint",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 251,
    "category": "WHAT'S IN A NAME?",
    "air_date": "2006-02-06",
    "question": "'This feminine form of Rex is from the Latin for \"queen\"'",
    "value": "$600",
    "answer": "Regina",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 252,
    "category": "EMOTICONS",
    "air_date": "2006-02-06",
    "question": "':-*<br />Gene Simmons might accept one of these from any pretty woman'",
    "value": "$600",
    "answer": "a kiss",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 253,
    "category": "FLAG 'EM DOWN",
    "air_date": "2006-02-06",
    "question": "'The 2 colors found on all 3 national flags of the U.S., Mexico & Canada'",
    "value": "$600",
    "answer": "red & white",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 254,
    "category": "\"TEEN\" SCENE",
    "air_date": "2006-02-06",
    "question": "'A holder for liquid, or a military base's general store'",
    "value": "$600",
    "answer": "a canteen",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 255,
    "category": "THE CIVIL WAR",
    "air_date": "2006-02-06",
    "question": "'In Feb. 2005 a reenactment was staged for this 140th anniversary of this fort's reoccupation by Union troops'",
    "value": "$800",
    "answer": "Fort Sumter",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 256,
    "category": "CELEBS",
    "air_date": "2006-02-06",
    "question": "'Her 18th birthday party was \"A Cinderella Story\" with 300 guests & red velvet cake'",
    "value": "$800",
    "answer": "Hilary Duff",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 257,
    "category": "WHAT'S IN A NAME?",
    "air_date": "2006-02-06",
    "question": "'This Welsh form of Margaret was among the USA's top 10 girls' names of the 1990s'",
    "value": "$1,200",
    "answer": "Megan",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 258,
    "category": "EMOTICONS",
    "air_date": "2006-02-06",
    "question": "'=|:-)=<br />This is an extension of the initials U.S.'",
    "value": "$800",
    "answer": "Uncle Sam",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 259,
    "category": "FLAG 'EM DOWN",
    "air_date": "2006-02-06",
    "question": "'The <a href=\"http://www.j-archive.com/media/2006-02-06_J_29.jpg\" target=\"_blank\">flag</a> of this U.S. possession is almost the same as the flag of Cuba'",
    "value": "$800",
    "answer": "Puerto Rico",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 260,
    "category": "\"TEEN\" SCENE",
    "air_date": "2006-02-06",
    "question": "'Golfing \"hole\" with a bar (where you can't go), or the amendment granting women's suffrage'",
    "value": "$800",
    "answer": "19th",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 261,
    "category": "THE CIVIL WAR",
    "air_date": "2006-02-06",
    "question": "'On Sept. 2, 1864 this general sent a wire saying, \"Atlanta is ours, and fairly won\"'",
    "value": "$1000",
    "answer": "Sherman",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 262,
    "category": "CELEBS",
    "air_date": "2006-02-06",
    "question": "'\"You Stand Watching\" this \"Shine On\" singer'",
    "value": "$1000",
    "answer": "Ryan Cabrera",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 263,
    "category": "WHAT'S IN A NAME?",
    "air_date": "2006-02-06",
    "question": "'Previously attached to Theo- & Isa-, it became popular by itself after appearing in \"David Copperfield\"'",
    "value": "$1000",
    "answer": "Dora",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 264,
    "category": "EMOTICONS",
    "air_date": "2006-02-06",
    "question": "':-b..<br />Doing this means either you're hungry or you're a pig'",
    "value": "$1000",
    "answer": "drooling",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 265,
    "category": "FLAG 'EM DOWN",
    "air_date": "2006-02-06",
    "question": "'The first 50-star U.S. flag was officially raised on July 4 of this year'",
    "value": "$1000",
    "answer": "1960",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 266,
    "category": "\"TEEN\" SCENE",
    "air_date": "2006-02-06",
    "question": "'Number of lines in Shakespeare's poem that starts \"Shall I compare thee to a summer's day?\"'",
    "value": "$1000",
    "answer": "14",
    "round": "Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 267,
    "category": "NOT A CURRENT NATIONAL CAPITAL",
    "air_date": "2006-02-06",
    "question": "'Ljubljana,<br />Bratislava,<br />Barcelona'",
    "value": "$400",
    "answer": "Barcelona",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 268,
    "category": "U.S. WINTER OLYMPIANS",
    "air_date": "2006-02-06",
    "question": "'Mike Eruzione of Winthrop, Mass. was captain of the miraculous 1980 Olympic team in this sport'",
    "value": "$400",
    "answer": "hockey",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 269,
    "category": "SCIENCE",
    "air_date": "2006-02-06",
    "question": "'At sea level at 70 degrees this travels 1,129 feet per second; it speeds up over 1 foot per sec. for each rising degree'",
    "value": "$400",
    "answer": "sound",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 270,
    "category": "WORDS OF THE WRITER",
    "air_date": "2006-02-06",
    "question": "'\"I beheld the wretch--the miserable monster whom I had created\"'",
    "value": "$400",
    "answer": "Mary Shelley",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 271,
    "category": "AT THE MALL",
    "air_date": "2006-02-06",
    "question": "'Found \"just what I needed\" at this \"City\", an electronics store'",
    "value": "$400",
    "answer": "Circuit City",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 272,
    "category": "FROM THE GREEK",
    "air_date": "2006-02-06",
    "question": "'The name of this color comes from the Greek word porphyra'",
    "value": "$400",
    "answer": "purple",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 273,
    "category": "NOT A CURRENT NATIONAL CAPITAL",
    "air_date": "2006-02-06",
    "question": "'Istanbul,<br />Ottawa,<br />Amman'",
    "value": "$800",
    "answer": "Istanbul",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 274,
    "category": "U.S. WINTER OLYMPIANS",
    "air_date": "2006-02-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2006-02-06_DJ_23.jpg\" target=\"_blank\">Jimmy of the Clue Crew puts some lines on the ice in the Olympic Oval rink at Park City, UT.</a>)  In 1998, <a href=\"http://www.j-archive.com/media/2006-02-06_DJ_23a.jpg\" target=\"_blank\">this U.S. skater</a> was 2nd at Nagano; in 2002, she was 3rd here in Utah'",
    "value": "$800",
    "answer": "Michelle Kwan",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 275,
    "category": "SCIENCE",
    "air_date": "2006-02-06",
    "question": "'The largest tree, the General Sherman in California, is this type, also called a Sierra Redwood'",
    "value": "$800",
    "answer": "a sequoia",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 276,
    "category": "WORDS OF THE WRITER",
    "air_date": "2006-02-06",
    "question": "'\"Take thy beak from out my heart, and take thy form from off my door!\"'",
    "value": "$800",
    "answer": "Edgar Allan Poe",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 277,
    "category": "AT THE MALL",
    "air_date": "2006-02-06",
    "question": "'SKX is the stock symbol for this manufacturer of sporty shoes'",
    "value": "$800",
    "answer": "Skechers",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 278,
    "category": "FROM THE GREEK",
    "air_date": "2006-02-06",
    "question": "'A bowl-shaped depression, as from the impact of a meteorite, it's from the Greek for \"mixing bowl\"'",
    "value": "$1,000",
    "answer": "crater",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 279,
    "category": "NOT A CURRENT NATIONAL CAPITAL",
    "air_date": "2006-02-06",
    "question": "'Sofia,<br />Sarajevo,<br />Saigon'",
    "value": "$1200",
    "answer": "Saigon",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 280,
    "category": "U.S. WINTER OLYMPIANS",
    "air_date": "2006-02-06",
    "question": "'Life has its ups & downs for Travis Mayer, a 2002 medalist in the event named for these little hills on the slopes'",
    "value": "$1200",
    "answer": "moguls",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 281,
    "category": "SCIENCE",
    "air_date": "2006-02-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2006-02-06_DJ_13.jpg\" target=\"_blank\">Sarah of the Clue Crew reads from the pole vault at Duke University's track in Durham, NC.</a>)  In bending an elastic solid, stress is the force causing deformation & this is the 6-letter term for <a href=\"http://www.j-archive.com/media/2006-02-06_DJ_13a.jpg\" target=\"_blank\">the deformation</a>'",
    "value": "$1200",
    "answer": "strain",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 282,
    "category": "WORDS OF THE WRITER",
    "air_date": "2006-02-06",
    "question": "'\"'Do all lawyers defend n-negroes, Atticus?'  'Of course they do, Scout'\"'",
    "value": "$1,500",
    "answer": "Harper Lee",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 283,
    "category": "AT THE MALL",
    "air_date": "2006-02-06",
    "question": "'This \"Urban\" store is the parent company of Anthropologie'",
    "value": "$1200",
    "answer": "Urban Outfitters",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 284,
    "category": "FROM THE GREEK",
    "air_date": "2006-02-06",
    "question": "'From the Greek for \"false name\", it's a fictitious name used by an author'",
    "value": "$1200",
    "answer": "a pseudonym",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 285,
    "category": "NOT A CURRENT NATIONAL CAPITAL",
    "air_date": "2006-02-06",
    "question": "'Bucharest,<br />Bonn,<br />Bern'",
    "value": "$1600",
    "answer": "Bonn",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 286,
    "category": "U.S. WINTER OLYMPIANS",
    "air_date": "2006-02-06",
    "question": "'In 2002 Vonetta Flowers & Jill Bakken won gold in the 2-woman version of this high-speed sport'",
    "value": "$1600",
    "answer": "the bobsled",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 287,
    "category": "SCIENCE",
    "air_date": "2006-02-06",
    "question": "'6 elements once known as inert gases are now known by this aristocratic name'",
    "value": "$1600",
    "answer": "noble gases",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 288,
    "category": "WORDS OF THE WRITER",
    "air_date": "2006-02-06",
    "question": "'\"For never man had a more faithful, loving, sincere servant, than Friday was to me\"'",
    "value": "$1600",
    "answer": "Daniel Defoe",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 289,
    "category": "AT THE MALL",
    "air_date": "2006-02-06",
    "question": "'This bookstore chain is named for its \"edgy\" founders, brothers Tom & Louis'",
    "value": "$1600",
    "answer": "Borders",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 290,
    "category": "FROM THE GREEK",
    "air_date": "2006-02-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2006-02-06_DJ_04.jpg\" target=\"_blank\">Jon of the Clue Crew paddles his kayak.</a>)  Kayak is an example of this type of reversible word from the Greek for \"running back again\"'",
    "value": "$1600",
    "answer": "a palindrome",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 291,
    "category": "NOT A CURRENT NATIONAL CAPITAL",
    "air_date": "2006-02-06",
    "question": "'Belize City,<br />Guatemala City,<br />Panama City'",
    "value": "$2000",
    "answer": "Belize City",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 292,
    "category": "U.S. WINTER OLYMPIANS",
    "air_date": "2006-02-06",
    "question": "'His \"Bode\" of work includes 2 Alpine skiing silver medals in 2002'",
    "value": "$2000",
    "answer": "Bode Miller",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 293,
    "category": "SCIENCE",
    "air_date": "2006-02-06",
    "question": "'(<a href=\"http://www.j-archive.com/media/2006-02-06_DJ_15.wmv\">A honey-colored retriever named Max tries to lick Cheryl of the Clue Crew as she pets him at NC State University in Raleigh, NC.</a>)  Veterinarians refer to this area of an animal's body as the posterior or this region, from the Latin for \"the tail\"'",
    "value": "$2000",
    "answer": "the caudal region",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 294,
    "category": "WORDS OF THE WRITER",
    "air_date": "2006-02-06",
    "question": "'\"'...Why look'st thou so?'--'With my crossbow I shot the albatross'\"'",
    "value": "$2000",
    "answer": "Samuel Taylor Coleridge",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 295,
    "category": "AT THE MALL",
    "air_date": "2006-02-06",
    "question": "'The name of this clothing store for teens is French for \"airmail\"'",
    "value": "$2000",
    "answer": "Aéropostale",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 296,
    "category": "FROM THE GREEK",
    "air_date": "2006-02-06",
    "question": "'It's an outline of the contents of a course or curriculum'",
    "value": "$2000",
    "answer": "a syllabus",
    "round": "Double Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 297,
    "category": "FAMOUS SHIPS",
    "air_date": "2006-02-06",
    "question": "'On December 27, 1831 it departed Plymouth, England to map the coastline of South America'",
    "value": null,
    "answer": "the HMS Beagle",
    "round": "Final Jeopardy!",
    "show_number": "4931"
  },
  {
    "id": 298,
    "category": "OLD FOLKS IN THEIR 30s",
    "air_date": "2009-05-08",
    "question": "'goop.com is a lifestyles website from this Oscar-winning actress; the g & p represent her initials'",
    "value": "$200",
    "answer": "Gwyneth Paltrow",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 299,
    "category": "MOVIES & TV",
    "air_date": "2009-05-08",
    "question": "'On March 19, 2009 he said, \"I'm excited and honored to introduce my first guest... Barack Obama\"'",
    "value": "$200",
    "answer": "Jay Leno",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 300,
    "category": "A STATE OF COLLEGE-NESS",
    "air_date": "2009-05-08",
    "question": "'Baylor,<br />Stephen F. Austin,<br />Rice'",
    "value": "$200",
    "answer": "Texas",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 301,
    "category": "ANIMAL COLLECTIVE",
    "air_date": "2009-05-08",
    "question": "'Synonym for dignity that's the term for a group of lions'",
    "value": "$200",
    "answer": "a pride",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 302,
    "category": "I'D RATHER BE SKIING",
    "air_date": "2009-05-08",
    "question": "'If you're a beginner, you might hippity-hop over to this smaller, gentler slope'",
    "value": "$200",
    "answer": "a bunny hill",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 303,
    "category": "PARLEZ VOUS?",
    "air_date": "2009-05-08",
    "question": "'If your mate from Marseilles says he's getting to LAX via \"Sud-Ouest\", pick him up at this carrier'",
    "value": "$200",
    "answer": "Southwest",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 304,
    "category": "OLD FOLKS IN THEIR 30s",
    "air_date": "2009-05-08",
    "question": "'In 2008 David Gregory became moderator of this NBC Sunday morning news show'",
    "value": "$400",
    "answer": "Meet the Press",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 305,
    "category": "MOVIES & TV",
    "air_date": "2009-05-08",
    "question": "'Time magazine said this 2003 Pixar film was \"the ultimate fish-out-of-water story\"'",
    "value": "$400",
    "answer": "Finding Nemo",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 306,
    "category": "A STATE OF COLLEGE-NESS",
    "air_date": "2009-05-08",
    "question": "'Antioch,<br />Bowling Green,<br />Kent State'",
    "value": "$400",
    "answer": "Ohio",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 307,
    "category": "ANIMAL COLLECTIVE",
    "air_date": "2009-05-08",
    "question": "'Like peas, whales & seals are in groups called these'",
    "value": "$400",
    "answer": "pods",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 308,
    "category": "I'D RATHER BE SKIING",
    "air_date": "2009-05-08",
    "question": "'Something you'd sprinkle on after a shower, it's also the term for soft, dry, freshly fallen snow'",
    "value": "$400",
    "answer": "powder",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 309,
    "category": "PARLEZ VOUS?",
    "air_date": "2009-05-08",
    "question": "'Duck, duck, l'oie; (l'oie of course referring to this other feathered friend)'",
    "value": "$400",
    "answer": "a goose",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 310,
    "category": "OLD FOLKS IN THEIR 30s",
    "air_date": "2009-05-08",
    "question": "'Linus Torvalds is the father of this operating system used on cell phones & supercomputers'",
    "value": "$600",
    "answer": "Linux",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 311,
    "category": "MOVIES & TV",
    "air_date": "2009-05-08",
    "question": "'Of his dialogue, this Han Solo actor said, \"You can type this (stuff), George, but you sure can't say it\"'",
    "value": "$600",
    "answer": "Harrison Ford",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 312,
    "category": "A STATE OF COLLEGE-NESS",
    "air_date": "2009-05-08",
    "question": "'DePaul,<br />Wheaton,<br />Northwestern'",
    "value": "$600",
    "answer": "Illinois",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 313,
    "category": "ANIMAL COLLECTIVE",
    "air_date": "2009-05-08",
    "question": "'A crash is a group of these large horned mammals'",
    "value": "$600",
    "answer": "rhinoceroses",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 314,
    "category": "I'D RATHER BE SKIING",
    "air_date": "2009-05-08",
    "question": "'In California, a premier spot for skiing is this resort area that shares its name with a prehistoric elephant'",
    "value": "$600",
    "answer": "Mammoth",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 315,
    "category": "PARLEZ VOUS?",
    "air_date": "2009-05-08",
    "question": "'\"Je ne sais pas\" means this, but you still get credit if you phrase it in the form of a question'",
    "value": "$600",
    "answer": "\"I don\\'t know\"",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 316,
    "category": "OLD FOLKS IN THEIR 30s",
    "air_date": "2009-05-08",
    "question": "'The district of conservative rep. Patrick McHenry in this state includes Mooresville, a home of NASCAR'",
    "value": "$800",
    "answer": "North Carolina",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 317,
    "category": "MOVIES & TV",
    "air_date": "2009-05-08",
    "question": "'Tim Robbins played a public TV newsman in \"Anchorman: The Legend of\" him'",
    "value": "$800",
    "answer": "Ron Burgundy",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 318,
    "category": "A STATE OF COLLEGE-NESS",
    "air_date": "2009-05-08",
    "question": "'Wayne State,<br />Kalamazoo College, Madonna University (it's Franciscan Catholic, not Material Girl)'",
    "value": "$800",
    "answer": "Michigan",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 319,
    "category": "ANIMAL COLLECTIVE",
    "air_date": "2009-05-08",
    "question": "'It can be a pack of dogs, or a place to board them'",
    "value": "$800",
    "answer": "a kennel",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 320,
    "category": "I'D RATHER BE SKIING",
    "air_date": "2009-05-08",
    "question": "'In this type of race you have to zigzag between flags or other obstacles in proper order'",
    "value": "$1,200",
    "answer": "a slalom",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 321,
    "category": "PARLEZ VOUS?",
    "air_date": "2009-05-08",
    "question": "'When mom tells you to do something \"Maintenant!\", she means this'",
    "value": "$800",
    "answer": "now",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 322,
    "category": "OLD FOLKS IN THEIR 30s",
    "air_date": "2009-05-08",
    "question": "'Elon Musk is now making rockets & electric cars; before that he co-founded & sold this electronic payment system'",
    "value": "$1000",
    "answer": "PayPal",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 323,
    "category": "MOVIES & TV",
    "air_date": "2009-05-08",
    "question": "'We were frakkin' sad when this sci fi show had its series finale on March 20, 2009'",
    "value": "$1000",
    "answer": "Battlestar Galactica",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 324,
    "category": "A STATE OF COLLEGE-NESS",
    "air_date": "2009-05-08",
    "question": "'Grambling,<br />McNeese State,<br />Southern'",
    "value": "$1000",
    "answer": "Louisiana",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 325,
    "category": "ANIMAL COLLECTIVE",
    "air_date": "2009-05-08",
    "question": "'A flock of these black birds is called a murder'",
    "value": "$1000",
    "answer": "crows",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 326,
    "category": "I'D RATHER BE SKIING",
    "air_date": "2009-05-08",
    "question": "'Bumps or mounds of snow that accumulate on a slope are called these, like some very wealthy & powerful people'",
    "value": "$1000",
    "answer": "moguls",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 327,
    "category": "PARLEZ VOUS?",
    "air_date": "2009-05-08",
    "question": "'\"Huitieme\" is French for this ordinal number'",
    "value": "$1000",
    "answer": "eighth",
    "round": "Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 328,
    "category": "AMERICAN AUTHORS",
    "air_date": "2009-05-08",
    "question": "'Her home Orchard House was the model for whre the March family lived in her most famous novel'",
    "value": "$400",
    "answer": "Louisa May Alcott",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 329,
    "category": "ALBUMS THAT ROCK",
    "air_date": "2009-05-08",
    "question": "'\"X&Y\",<br />\"Parachutes\"'",
    "value": "$400",
    "answer": "Coldplay",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 330,
    "category": "ANATOMY",
    "air_date": "2009-05-08",
    "question": "'This cord that connects a fetus to the placenta contains 2 arteries & 1 vein'",
    "value": "$400",
    "answer": "the umbillical cord",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 331,
    "category": "MATHEM-ATTACK!",
    "air_date": "2009-05-08",
    "question": "'Che Guevara probably knew the political-sounding term for the root symbol seen <a href=\"http://www.j-archive.com/media/2009-05-08_DJ_26.jpg\" target=\"_blank\">here</a>'",
    "value": "$400",
    "answer": "radical",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 332,
    "category": "NAME THE DECADE",
    "air_date": "2009-05-08",
    "question": "'The World Wide Web gets its first page'",
    "value": "$400",
    "answer": "the 1990s",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 333,
    "category": "WORD ORIGINS",
    "air_date": "2009-05-08",
    "question": "'This adjective meaning deceptive or sneaky is from the Latin de via, meaning \"out of the way\"'",
    "value": "$400",
    "answer": "devious",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 334,
    "category": "AMERICAN AUTHORS",
    "air_date": "2009-05-08",
    "question": "'During the War Of 1812, this \"Rip Van Winkle\" author wrote biographies of Naval commanders'",
    "value": "$800",
    "answer": "Washington Irving",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 335,
    "category": "ALBUMS THAT ROCK",
    "air_date": "2009-05-08",
    "question": "'\"American Idiot\",<br />\"Dookie\"'",
    "value": "$800",
    "answer": "Green Day",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 336,
    "category": "ANATOMY",
    "air_date": "2009-05-08",
    "question": "'The human body has 3 types of these: skeletal, smooth & cardiac, a combination of skeletal & smooth'",
    "value": "$800",
    "answer": "muscles",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 337,
    "category": "MATHEM-ATTACK!",
    "air_date": "2009-05-08",
    "question": "'You should answer this one automatically:<br />It's the property that says<br />a = a'",
    "value": "$800",
    "answer": "reflexive",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 338,
    "category": "NAME THE DECADE",
    "air_date": "2009-05-08",
    "question": "'The first controlled nuclear chain reaction'",
    "value": "$800",
    "answer": "the 1940s",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 339,
    "category": "WORD ORIGINS",
    "air_date": "2009-05-08",
    "question": "'This New York island's name may come from the Algonquian word for \"island\"'",
    "value": "$800",
    "answer": "Manhattan",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 340,
    "category": "AMERICAN AUTHORS",
    "air_date": "2009-05-08",
    "question": "'Susan & Benjamin Cheever, children of this short story master, are both authors as well'",
    "value": "$1200",
    "answer": "John Cheever",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 341,
    "category": "ALBUMS THAT ROCK",
    "air_date": "2009-05-08",
    "question": "'\"Master of Puppets\",<br />\"Death Magnetic\"'",
    "value": "$1200",
    "answer": "Metallica",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 342,
    "category": "ANATOMY",
    "air_date": "2009-05-08",
    "question": "'The talus fits between the ends of these 2 bones forming the ankle joint'",
    "value": "$1200",
    "answer": "the tibia & fibula",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 343,
    "category": "MATHEM-ATTACK!",
    "air_date": "2009-05-08",
    "question": "'(<a href=\"http://www.j-archive.com/media/2009-05-08_DJ_28.jpg\" target=\"_blank\">Kelly of the Clue Crew shows an array of numbers enclosed in brackets on the monitor.</a>)  A set of numbers in rows and columns can be used in many ways--for example, to encrypt a code or create 3-D computer graphics; the set shares this name with a 1999 film'",
    "value": "$1200",
    "answer": "a matrix",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 344,
    "category": "NAME THE DECADE",
    "air_date": "2009-05-08",
    "question": "'Khruschev's \"Secret Speech\" denounces Stalin'",
    "value": "$1200",
    "answer": "the 1950s",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 345,
    "category": "WORD ORIGINS",
    "air_date": "2009-05-08",
    "question": "'This compass direction may come from the Proto-Germanic for \"to the left of the rising sun\"'",
    "value": "$4,800",
    "answer": "north",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 346,
    "category": "AMERICAN AUTHORS",
    "air_date": "2009-05-08",
    "question": "'He stood 5'3\" & was the subject of movies that came out in 2005 & 2006'",
    "value": "$1600",
    "answer": "(Truman) Capote",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 347,
    "category": "ALBUMS THAT ROCK",
    "air_date": "2009-05-08",
    "question": "'\"In Your Honor\",<br />\"The Color and the Shape\"'",
    "value": "$1600",
    "answer": "Foo Fighters",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 348,
    "category": "ANATOMY",
    "air_date": "2009-05-08",
    "question": "'Humans have 33 vertebrae, 7 of them cervical, meaning they are in this part of the body'",
    "value": "$1600",
    "answer": "your neck",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 349,
    "category": "MATHEM-ATTACK!",
    "air_date": "2009-05-08",
    "question": "'The symbol <i>i</i> is used to represent the imaginary square root of this number'",
    "value": "$1600",
    "answer": "-1",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 350,
    "category": "NAME THE DECADE",
    "air_date": "2009-05-08",
    "question": "'George Orwell, 34 years dead, hits the bestseller list'",
    "value": "$1,800",
    "answer": "the 1980s",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 351,
    "category": "WORD ORIGINS",
    "air_date": "2009-05-08",
    "question": "'From the Latin for \"much writing\", it's another name for a lie detector test'",
    "value": "$1600",
    "answer": "a polygraph",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 352,
    "category": "AMERICAN AUTHORS",
    "air_date": "2009-05-08",
    "question": "'He reviewed films & TV for the New Republic before his first book, \"Goodbye, Columbus\", was published in 1959'",
    "value": "$2000",
    "answer": "Philip Roth",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 353,
    "category": "ALBUMS THAT ROCK",
    "air_date": "2009-05-08",
    "question": "'\"Beggars Banquet\",<br />\"Steel Wheels\"'",
    "value": "$2000",
    "answer": "the Rolling Stones",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 354,
    "category": "ANATOMY",
    "air_date": "2009-05-08",
    "question": "'The pons connects the 2 hemispheres of this part of the brain that regulates balance'",
    "value": "$2000",
    "answer": "the cerebellum",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 355,
    "category": "MATHEM-ATTACK!",
    "air_date": "2009-05-08",
    "question": "'(<a href=\"http://www.j-archive.com/media/2009-05-08_DJ_30.jpg\" target=\"_blank\">Jimmy of the Clue Crew shows a geometric diagram on the monitor.</a>)  Half the base times the height gives the area of a triangle; for a <a href=\"http://www.j-archive.com/media/2009-05-08_DJ_30a.jpg\" target=\"_blank\">cylinder</a>, the area of the base times the height gives this measurement'",
    "value": "$2000",
    "answer": "volume",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 356,
    "category": "NAME THE DECADE",
    "air_date": "2009-05-08",
    "question": "'Man first reaches the South Pole'",
    "value": "$2000",
    "answer": "the 1910s",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 357,
    "category": "WORD ORIGINS",
    "air_date": "2009-05-08",
    "question": "'A type of ear implant to help the deaf, it's from the Greek for \"snail\"'",
    "value": "$2000",
    "answer": "cochlear",
    "round": "Double Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 358,
    "category": "EUROPEAN HISTORY",
    "air_date": "2009-05-08",
    "question": "'He filed for divorce citing Leviticus 20:21, \"If a man shall take his brother's wife, it is an unclean thing\"'",
    "value": null,
    "answer": "Henry VIII",
    "round": "Final Jeopardy!",
    "show_number": "5690"
  },
  {
    "id": 359,
    "category": "AMERICAN EXPLORERS",
    "air_date": "1996-12-06",
    "question": "'Edward Beale brought news of this 1848 discovery in California to the east coast'",
    "value": "$100",
    "answer": "gold",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 360,
    "category": "MEASURING DEVICES",
    "air_date": "1996-12-06",
    "question": "'The amount of this in a solution can be measured by a saccharometer'",
    "value": "$100",
    "answer": "sugar",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 361,
    "category": "MYTHOLOGY",
    "air_date": "1996-12-06",
    "question": "'Daedalus used this substance to fasten the wings to his back'",
    "value": "$100",
    "answer": "wax",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 362,
    "category": "TELEVISION",
    "air_date": "1996-12-06",
    "question": "'This Sunday night series is subtitled \"The New Adventures of Superman\"'",
    "value": "$100",
    "answer": "Lois & Clark",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 363,
    "category": "ANNUAL EVENTS",
    "air_date": "1996-12-06",
    "question": "'This state's Days of '47 Festival honors the day Brigham Young reached the Salt Lake Valley in 1847'",
    "value": "$100",
    "answer": "Utah",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 364,
    "category": "HOMOPHONIC PAIRS",
    "air_date": "1996-12-06",
    "question": "'A complete donut center'",
    "value": "$100",
    "answer": "whole hole",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 365,
    "category": "AMERICAN EXPLORERS",
    "air_date": "1996-12-06",
    "question": "'Stephen Long & Zebulon Pike have peaks named for them in this state, an area they said was uninhabitable'",
    "value": "$200",
    "answer": "Colorado",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 366,
    "category": "MEASURING DEVICES",
    "air_date": "1996-12-06",
    "question": "'The energy from this is measured by a pyrheliometer'",
    "value": "$200",
    "answer": "the Sun",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 367,
    "category": "MYTHOLOGY",
    "air_date": "1996-12-06",
    "question": "'Cadmus planted these parts of a dragon to raise some troops'",
    "value": "$200",
    "answer": "teeth",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 368,
    "category": "TELEVISION",
    "air_date": "1996-12-06",
    "question": "'\"Freddy's Nightmares\", a horror anthology that debuted in 1988, was based on this movie series'",
    "value": "$200",
    "answer": "Nightmare on Elm Street",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 369,
    "category": "ANNUAL EVENTS",
    "air_date": "1996-12-06",
    "question": "'Monroe, near Snohomish in this state, is the site of the annual Evergreen State Fair'",
    "value": "$200",
    "answer": "Washington",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 370,
    "category": "HOMOPHONIC PAIRS",
    "air_date": "1996-12-06",
    "question": "'In a restaurant, it's a quartet's table request'",
    "value": "$200",
    "answer": "for four",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 371,
    "category": "AMERICAN EXPLORERS",
    "air_date": "1996-12-06",
    "question": "'Co-commanders of the 1st U.S. expedition to explore from Mississippi to the west coast'",
    "value": "$300",
    "answer": "Lewis & Clark",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 372,
    "category": "MEASURING DEVICES",
    "air_date": "1996-12-06",
    "question": "'An odometer measures the distance covered by a vehicle & this device measures how far you've walked'",
    "value": "$300",
    "answer": "a pedometer",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 373,
    "category": "MYTHOLOGY",
    "air_date": "1996-12-06",
    "question": "'The sister of Orestes, mourning became her'",
    "value": "$300",
    "answer": "Electra",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 374,
    "category": "TELEVISION",
    "air_date": "1996-12-06",
    "question": "'This crime drama with Robert Wagner & Stefanie Powers was created by Sidney Sheldon'",
    "value": "$300",
    "answer": "Hart to Hart",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 375,
    "category": "ANNUAL EVENTS",
    "air_date": "1996-12-06",
    "question": "'Dog lovers look forward to the Westminster Kennel Club dog show, held each February in this city'",
    "value": "$300",
    "answer": "New York City",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 376,
    "category": "HOMOPHONIC PAIRS",
    "air_date": "1996-12-06",
    "question": "'Contented performing kittens might be paid this way'",
    "value": "$300",
    "answer": "per purr",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 377,
    "category": "AMERICAN EXPLORERS",
    "air_date": "1996-12-06",
    "question": "'Jedediah Smith was a mountain man & explorer employed in this industry'",
    "value": "$400",
    "answer": "fur trading",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 378,
    "category": "MEASURING DEVICES",
    "air_date": "1996-12-06",
    "question": "'A spirometer measures the capacity of these organs'",
    "value": "$400",
    "answer": "the lungs",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 379,
    "category": "MYTHOLOGY",
    "air_date": "1996-12-06",
    "question": "'Zeus' father, Cronus, was one of this group of 12'",
    "value": "$400",
    "answer": "Titans",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 380,
    "category": "TELEVISION",
    "air_date": "1996-12-06",
    "question": "'Character seen <a href=\"http://www.j-archive.com/media/1996-12-06_J_04.wmv\">here</a>, his action-packed journeys are legendary:'",
    "value": "$600",
    "answer": "Hercules (Kevin Sorbo)",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 381,
    "category": "ANNUAL EVENTS",
    "air_date": "1996-12-06",
    "question": "'The Pendleton Roundup, an annual rodeo, takes place in Pendleton in this northwestern state'",
    "value": "$400",
    "answer": "Oregon",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 382,
    "category": "HOMOPHONIC PAIRS",
    "air_date": "1996-12-06",
    "question": "'A squash that's been pierced by a bull's horn'",
    "value": "$400",
    "answer": "gored gourd",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 383,
    "category": "AMERICAN EXPLORERS",
    "air_date": "1996-12-06",
    "question": "'Senator Thomas Hart Benton's son-in-law was this \"Pathfinder\"'",
    "value": "$500",
    "answer": "John C. Frémont",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 384,
    "category": "MEASURING DEVICES",
    "air_date": "1996-12-06",
    "question": "'A nilometer measures the height of the water in this'",
    "value": "$500",
    "answer": "the Nile River",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 385,
    "category": "MYTHOLOGY",
    "air_date": "1996-12-06",
    "question": "'Leda laid 2 eggs:  one with Helen & Pollux in it, the other containing Clytemnestra & him'",
    "value": "$500",
    "answer": "Castor",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 386,
    "category": "TELEVISION",
    "air_date": "1996-12-06",
    "question": "'Jack Wagner, formerly of \"General Hospital\", now plays Dr. Peter Burns on this Fox drama'",
    "value": "$500",
    "answer": "Melrose Place",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 387,
    "category": "ANNUAL EVENTS",
    "air_date": "1996-12-06",
    "question": "'The Tanglewood Music Festival is a summer highlight in Lenox in this New England state'",
    "value": "$500",
    "answer": "Massachusetts",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 388,
    "category": "HOMOPHONIC PAIRS",
    "air_date": "1996-12-06",
    "question": "'Remained sedate'",
    "value": "$500",
    "answer": "stayed staid",
    "round": "Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 389,
    "category": "NOTABLE NONHUMANS",
    "air_date": "1996-12-06",
    "question": "'This Nazi dictator sometimes dined alone with Blondi, his Alsatian'",
    "value": "$200",
    "answer": "Adolf Hitler",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 390,
    "category": "WORLD FACTS",
    "air_date": "1996-12-06",
    "question": "'This isthmus connects North & South America'",
    "value": "$200",
    "answer": "Isthmus of Panama",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 391,
    "category": "ART & ARTISTS",
    "air_date": "1996-12-06",
    "question": "'He painted \"Irises\" & \"Pink Roses\" as well as \"Sunflowers\"'",
    "value": "$200",
    "answer": "Vincent Van Gogh",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 392,
    "category": "BUSINESS & INDUSTRY",
    "air_date": "1996-12-06",
    "question": "'It has over 9,700 tax preparation offices worldwide'",
    "value": "$200",
    "answer": "H&R Block",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 393,
    "category": "HISTORY",
    "air_date": "1996-12-06",
    "question": "'Historians refer to the Golden Age as the time during which Pericles ruled this city'",
    "value": "$200",
    "answer": "Athens",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 394,
    "category": "POETS",
    "air_date": "1996-12-06",
    "question": "'On Feb. 12, 1959, the 150th anniversary of Lincoln's birth, he addressed a joint session of Congress'",
    "value": "$200",
    "answer": "Carl Sandburg",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 395,
    "category": "NOTABLE NONHUMANS",
    "air_date": "1996-12-06",
    "question": "'In 1964 he lifted his beagles Him & Her by the ears on the White House lawn, provoking protest'",
    "value": "$400",
    "answer": "Lyndon Johnson",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 396,
    "category": "WORLD FACTS",
    "air_date": "1996-12-06",
    "question": "'A humid city, Rio de Janeiro lies just north of this tropic line'",
    "value": "$400",
    "answer": "the Tropic of Capricorn",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 397,
    "category": "ART & ARTISTS",
    "air_date": "1996-12-06",
    "question": "'This drip artist was born in Cody, Wyoming in 1912'",
    "value": "$400",
    "answer": "Jackson Pollock",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 398,
    "category": "BUSINESS & INDUSTRY",
    "air_date": "1996-12-06",
    "question": "'In 1961 this firm introduced its Selectric typewriter, which used a spherical typing element'",
    "value": "$400",
    "answer": "IBM",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 399,
    "category": "HISTORY",
    "air_date": "1996-12-06",
    "question": "'Under the 1814 Treaty of Kiel, this country gave Norway to Sweden but kept Greenland & other islands'",
    "value": "$400",
    "answer": "Denmark",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 400,
    "category": "POETS",
    "air_date": "1996-12-06",
    "question": "'Between 1842 & 1885, he repeatedly revised his \"Idylls of the King\"'",
    "value": "$400",
    "answer": "Alfred Lord Tennyson",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 401,
    "category": "NOTABLE NONHUMANS",
    "air_date": "1996-12-06",
    "question": "'Colo was the first of these great apes born in captivity, in 1956 at the Columbus Zoo'",
    "value": "$600",
    "answer": "Gorilla",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 402,
    "category": "WORLD FACTS",
    "air_date": "1996-12-06",
    "question": "'The lowest river in the world, it's revered by Jews, Christians & Muslims alike'",
    "value": "$600",
    "answer": "The River Jordan",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 403,
    "category": "ART & ARTISTS",
    "air_date": "1996-12-06",
    "question": "'He spent several summers painting pointillist seascapes including \"Le Bec Du Hoc, Grandcamp\"'",
    "value": "$600",
    "answer": "Georges Seurat",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 404,
    "category": "BUSINESS & INDUSTRY",
    "air_date": "1996-12-06",
    "question": "'In 1934 he plugged Bulova \"Lone Eagle\" watches'",
    "value": "$600",
    "answer": "Charles Lindbergh",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 405,
    "category": "HISTORY",
    "air_date": "1996-12-06",
    "question": "'In February 1904 this country attacked the Russian fleet at Port Arthur'",
    "value": "$600",
    "answer": "Japan",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 406,
    "category": "POETS",
    "air_date": "1996-12-06",
    "question": "'For much of the winter of 1794-95, he served as acting supervisor for Dumfries, Scotland'",
    "value": "$600",
    "answer": "Robert Burns",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 407,
    "category": "NOTABLE NONHUMANS",
    "air_date": "1996-12-06",
    "question": "'In 1945 this famous scottie was injured in a fight with Blaze, Elliott Roosevelt's mastiff'",
    "value": "$800",
    "answer": "Fala",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 408,
    "category": "WORLD FACTS",
    "air_date": "1996-12-06",
    "question": "'Discovered by David Livingstone, Botswana's Lake Ngami lies in the northern part of this desert'",
    "value": "$1,100",
    "answer": "Kalahari Desert",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 409,
    "category": "ART & ARTISTS",
    "air_date": "1996-12-06",
    "question": "'His sculpture, \"The Age of Bronze\", exhibited in 1877, was inspired by Michelangelo'",
    "value": "$800",
    "answer": "Auguste Rodin",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 410,
    "category": "BUSINESS & INDUSTRY",
    "air_date": "1996-12-06",
    "question": "'Only Philip Morris & this Cincinnati-based firm have yearly ad expenditures exceeding $2 billion'",
    "value": "$800",
    "answer": "Procter & Gamble",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 411,
    "category": "HISTORY",
    "air_date": "1996-12-06",
    "question": "'On May 30, 1967 Colonel Ojukwu declared Biafra's independence from this country, starting a civil war'",
    "value": "$800",
    "answer": "Nigeria",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 412,
    "category": "POETS",
    "air_date": "1996-12-06",
    "question": "'Her \"I Heard a Fly Buzz\" may have been based on a chapter in \"The House of the Seven Gables\"'",
    "value": "$800",
    "answer": "Emily Dickinson",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 413,
    "category": "NOTABLE NONHUMANS",
    "air_date": "1996-12-06",
    "question": "'This favorite horse of Alexander the Great sometimes wore golden horns in battle'",
    "value": "$1000",
    "answer": "Bucephalus",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 414,
    "category": "WORLD FACTS",
    "air_date": "1996-12-06",
    "question": "'In area this country whose capital is now called Yangon is the largest in mainland southeast Asia'",
    "value": "$1000",
    "answer": "Myanmar (Burma)",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 415,
    "category": "ART & ARTISTS",
    "air_date": "1996-12-06",
    "question": "'You can see this British sculptor's \"Reclining Mother and Child\" at the Walker Art Center in Minneapolis'",
    "value": "$1000",
    "answer": "Henry Moore",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 416,
    "category": "BUSINESS & INDUSTRY",
    "air_date": "1996-12-06",
    "question": "'In 1811 this German family began its steel-making business by constructing a plant in Essen'",
    "value": "$600",
    "answer": "Krupp",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 417,
    "category": "HISTORY",
    "air_date": "1996-12-06",
    "question": "'In the midst of the Korean War, this South Korean president was elected to his second of 4 terms'",
    "value": "$1000",
    "answer": "Syngman Rhee",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 418,
    "category": "POETS",
    "air_date": "1996-12-06",
    "question": "'He once wrote, \"I choose to be a plain New Hampshire farmer\"'",
    "value": "$1000",
    "answer": "Robert Frost",
    "round": "Double Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 419,
    "category": "BRITISH NOVELS",
    "air_date": "1996-12-06",
    "question": "'This 1895 novel is subtitled \"An Invention\"'",
    "value": null,
    "answer": "The Time Machine",
    "round": "Final Jeopardy!",
    "show_number": "2825"
  },
  {
    "id": 420,
    "category": "LOST IN SPACE",
    "air_date": "2010-12-07",
    "question": "'While making repairs on the Intl. Space Station, Scott Parazynski lost a needle-nose pair of these'",
    "value": "$200",
    "answer": "pliers",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 421,
    "category": "TIMELESS TV",
    "air_date": "2010-12-07",
    "question": "'September 2010 brought the 45th edition of this comedian's telethon'",
    "value": "$200",
    "answer": "Jerry Lewis",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 422,
    "category": "LET'S HIT IT",
    "air_date": "2010-12-07",
    "question": "'Hit this paper mache container, Spanish for \"jug\", if you want candy and small gifts'",
    "value": "$200",
    "answer": "pinata",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 423,
    "category": "WORLD BOOK DESCRIBES THE \"G\" MAN",
    "air_date": "2010-12-07",
    "question": "'\"In 1997, the House (of Reps.) voted to reprimand him... It marked the first time the House had reprimanded a Speaker\"'",
    "value": "$200",
    "answer": "Gingrich",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 424,
    "category": "MONEY SLANG",
    "air_date": "2010-12-07",
    "question": "'We'll give you $200, not $1,000, for this five letter word meaning stately or majestic'",
    "value": "$200",
    "answer": "grand",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 425,
    "category": "RVs",
    "air_date": "2010-12-07",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-12-07_J_26.jpg\" target=\"_blank\">Jimmy of the Clue Crew reports from the RV/MH Hall of Fame in Elkhart, IN.</a>)  The GMC Motorhome from the '60s & 70s was among the first models to have this innovation that helps with traction by putting the weight over the <a href=\"http://www.j-archive.com/media/2010-12-07_J_26a.jpg\" target=\"_blank\">wheels</a> that do the work'",
    "value": "$200",
    "answer": "front-wheel drive",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 426,
    "category": "LOST IN SPACE",
    "air_date": "2010-12-07",
    "question": "'In its years of operation, this Soviet space station released more than 200 objects (mostly trash) into space'",
    "value": "$400",
    "answer": "Mir",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 427,
    "category": "TIMELESS TV",
    "air_date": "2010-12-07",
    "question": "'Originally a half hour, this soap started in 1963 & featured Nurse Jessie Brewer'",
    "value": "$400",
    "answer": "General Hospital",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 428,
    "category": "LET'S HIT IT",
    "air_date": "2010-12-07",
    "question": "'This word seen on doors is what a right-handed batter does when he hits the ball to left field'",
    "value": "$400",
    "answer": "pull",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 429,
    "category": "WORLD BOOK DESCRIBES THE \"G\" MAN",
    "air_date": "2010-12-07",
    "question": "'\"See Simon, Paul\"'",
    "value": "$400",
    "answer": "(Art) Garfunkel",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 430,
    "category": "MONEY SLANG",
    "air_date": "2010-12-07",
    "question": "'Proverbially, you can \"break\" this food, or \"take (it) out of someone's mouth\"; earn some dough'",
    "value": "$400",
    "answer": "bread",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 431,
    "category": "RVs",
    "air_date": "2010-12-07",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-12-07_J_27.jpg\" target=\"_blank\">Jimmy of the Clue Crew reports from the RV/MH Hall of Fame in Elkhart, IN.</a>)  I'm behind the wheel of the <a href=\"http://www.j-archive.com/media/2010-12-07_J_27a.jpg\" target=\"_blank\">very first motor home</a>, from the company whose name has become a synonym for \"motor home\"; since 1967, they've sold over 400,000 of them'",
    "value": "$400",
    "answer": "Winnebago",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 432,
    "category": "LOST IN SPACE",
    "air_date": "2010-12-07",
    "question": "'Ed White, the first U.S. spacewalker, lost one of these outside Gemini 4; he must've looked like a later \"moonwalker\"'",
    "value": "$600",
    "answer": "a glove",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 433,
    "category": "TIMELESS TV",
    "air_date": "2010-12-07",
    "question": "'In 1948 Douglas Edwards became the first anchor of this network's Evening News'",
    "value": "$600",
    "answer": "CBS",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 434,
    "category": "LET'S HIT IT",
    "air_date": "2010-12-07",
    "question": "'Aaron Fechter invented this carnival game where you hit a mammal with a mallet'",
    "value": "$600",
    "answer": "Whack-A-Mole",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 435,
    "category": "WORLD BOOK DESCRIBES THE \"G\" MAN",
    "air_date": "2010-12-07",
    "question": "'\"American poet... became known as a leader of the Beat literary movement of the 1950s\"'",
    "value": "$600",
    "answer": "(Allen) Ginsberg",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 436,
    "category": "MONEY SLANG",
    "air_date": "2010-12-07",
    "question": "'The shell of this mollusk is composed chiefly of calcium carbonate'",
    "value": "$2,200",
    "answer": "a clam",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 437,
    "category": "RVs",
    "air_date": "2010-12-07",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-12-07_J_28.jpg\" target=\"_blank\">Kelly of the Clue Crew reports from the RV/MH Hall of Fame in Elkhart, IN.</a>)  One of the first times a movie star received a <a href=\"http://www.j-archive.com/media/2010-12-07_J_28a.jpg\" target=\"_blank\">fancy trailer</a> as a perk was in 1931; Paramount gave a <a href=\"http://www.j-archive.com/media/2010-12-07_J_28b.jpg\" target=\"_blank\">Chevy house car</a> to <a href=\"http://www.j-archive.com/media/2010-12-07_J_28c.jpg\" target=\"_blank\"> this</a> sexy star as she left the stage to make movies like \"She Done Him Wrong\"'",
    "value": "$600",
    "answer": "Mae West",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 438,
    "category": "LOST IN SPACE",
    "air_date": "2010-12-07",
    "question": "'Piers Sellers lost a tool in space while spreading putty into this Space Shuttle named for Capt. Cook's ship'",
    "value": "$800",
    "answer": "Discovery",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 439,
    "category": "TIMELESS TV",
    "air_date": "2010-12-07",
    "question": "'Shown Saturday afternoons on ABC, this sport's tour outdrew college football & moved to ESPN in 1997'",
    "value": "$800",
    "answer": "the pro bowling tour",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 440,
    "category": "LET'S HIT IT",
    "air_date": "2010-12-07",
    "question": "'Everlast makes these that come in speed and heavy varieties'",
    "value": "$800",
    "answer": "punching bags",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 441,
    "category": "WORLD BOOK DESCRIBES THE \"G\" MAN",
    "air_date": "2010-12-07",
    "question": "'\"Served under the Apache leaders Cochise and Mangas Coloradas... in 1894, he was moved to Fort Sill'",
    "value": "$800",
    "answer": "Geronimo",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 442,
    "category": "MONEY SLANG",
    "air_date": "2010-12-07",
    "question": "'You don't get 5 guesses at this winglike appendage to the underwater portion of a hull'",
    "value": "$800",
    "answer": "a fin",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 443,
    "category": "LOST IN SPACE",
    "air_date": "2010-12-07",
    "question": "'In 1992 Space Shuttle astronauts delivered ashes of this \"Star Trek\" creator into the final frontier'",
    "value": "$1000",
    "answer": "Gene Roddenberry",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 444,
    "category": "TIMELESS TV",
    "air_date": "2010-12-07",
    "question": "'2010's \"When Love Is Not Enough\" was the 240th presentation in this series from a greeting card company'",
    "value": "$1000",
    "answer": "Hallmark Hall of Fame",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 445,
    "category": "LET'S HIT IT",
    "air_date": "2010-12-07",
    "question": "'In some casinos, a blackjack dealer must hit with an ace & a 6, known as this type of 17'",
    "value": "$1000",
    "answer": "soft",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 446,
    "category": "WORLD BOOK DESCRIBES THE \"G\" MAN",
    "air_date": "2010-12-07",
    "question": "'\"One of the most original and provocative American architects working today\"'",
    "value": "$1000",
    "answer": "(Frank) Gehry",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 447,
    "category": "MONEY SLANG",
    "air_date": "2010-12-07",
    "question": "'When speaking of Messrs. Netanyahu or Britten, it's all about the first name, pluralized'",
    "value": "$1000",
    "answer": "the Benjamins",
    "round": "Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 448,
    "category": "PLAY HEROINES",
    "air_date": "2010-12-07",
    "question": "'Blanche DuBois'",
    "value": "$400",
    "answer": "A Streetcar Named Desire",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 449,
    "category": "DEFENESTRATION IN CINEMA",
    "air_date": "2010-12-07",
    "question": "'Giving the devil his due, Fr. Karras invites the devil inside himself, then exits from the second floor in this 1973 movie'",
    "value": "$400",
    "answer": "The Exorcist",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 450,
    "category": "A MASSIVE \"M\"ETROPOLIS",
    "air_date": "2010-12-07",
    "question": "'3.6 million: Down Under'",
    "value": "$400",
    "answer": "Melbourne",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 451,
    "category": "TAINTED GOV",
    "air_date": "2010-12-07",
    "question": "'In 2010 this Illinois governor was tried on corruption charges, but convicted on only 1 count'",
    "value": "$400",
    "answer": "Blagojevich",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 452,
    "category": "MEDICINE",
    "air_date": "2010-12-07",
    "question": "'As Franklin D. Roosevelt's blood pressure was 300/190, he suffered from this 1-word condition'",
    "value": "$400",
    "answer": "hypertension",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 453,
    "category": "4 CONSONANTS IN A ROW",
    "air_date": "2010-12-07",
    "question": "'If you're vertical but supported by your palms, you're doing one of these'",
    "value": "$400",
    "answer": "a handstand",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 454,
    "category": "PLAY HEROINES",
    "air_date": "2010-12-07",
    "question": "'Emily Webb of Grover's Corners'",
    "value": "$800",
    "answer": "Our Town",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 455,
    "category": "DEFENESTRATION IN CINEMA",
    "air_date": "2010-12-07",
    "question": "'In this Bruce Willis movie, the villain goes out the window of the Nakatomi building, gun in hand'",
    "value": "$800",
    "answer": "Die Hard",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 456,
    "category": "A MASSIVE \"M\"ETROPOLIS",
    "air_date": "2010-12-07",
    "question": "'11 million: on Luzon Island'",
    "value": "$800",
    "answer": "Manila",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 457,
    "category": "TAINTED GOV",
    "air_date": "2010-12-07",
    "question": "'In 2006 this Illinois governor was busted for racketeering; what's in the water there?'",
    "value": "$800",
    "answer": "George Ryan",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 458,
    "category": "MEDICINE",
    "air_date": "2010-12-07",
    "question": "'In 1905 German scientist Alfred Einhorn created this first injectable local anesthetic used in dentistry'",
    "value": "$800",
    "answer": "novocaine",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 459,
    "category": "4 CONSONANTS IN A ROW",
    "air_date": "2010-12-07",
    "question": "'A caterpillar that moves by contraction & expansion'",
    "value": "$800",
    "answer": "an inchworm",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 460,
    "category": "DEFENESTRATION IN CINEMA",
    "air_date": "2010-12-07",
    "question": "'Movie in which Axel Foley asks, \"where ...you get off arresting me for being thrown out a window?\"'",
    "value": "$1200",
    "answer": "Beverly Hills Cop",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 461,
    "category": "A MASSIVE \"M\"ETROPOLIS",
    "air_date": "2010-12-07",
    "question": "'1.1 million: in the heart of the Po River Valley'",
    "value": "$1200",
    "answer": "Milan",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 462,
    "category": "TAINTED GOV",
    "air_date": "2010-12-07",
    "question": "'In 2010 it was revealed that Robert Rizzo made $800,000 a year as the city this of Bell, Calif., population 37,000'",
    "value": "$1200",
    "answer": "manager",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 463,
    "category": "MEDICINE",
    "air_date": "2010-12-07",
    "question": "'Micro-Trach is an oxygen delivery system developed by this physician known for his \"maneuver\"'",
    "value": "$1200",
    "answer": "(Henry) Heimlich",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 464,
    "category": "4 CONSONANTS IN A ROW",
    "air_date": "2010-12-07",
    "question": "'A loop found on footwear, it's a symbol of success through one's own efforts'",
    "value": "$3,400",
    "answer": "a bootstrap",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 465,
    "category": "A MASSIVE \"M\"ETROPOLIS",
    "air_date": "2010-12-07",
    "question": "'18 million: on the Arabian Sea'",
    "value": "$3,000",
    "answer": "Mumbai",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 466,
    "category": "TAINTED GOV",
    "air_date": "2010-12-07",
    "question": "'In 2010 a House committee charged this veteran Harlem congressman with ethics violations'",
    "value": "$1600",
    "answer": "(Charlie) Rangel",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 467,
    "category": "MEDICINE",
    "air_date": "2010-12-07",
    "question": "'(<a href=\"http://www.j-archive.com/media/2010-12-07_DJ_09.jpg\" target=\"_blank\">Dr. Oz presents the clue.</a>) By surgically interrupting the electrical impulses that are causing an abnormal rhythm, the maze procedure is designed to threat this type of heart arrhythmia abbreviated \"A.F.\"'",
    "value": "$1600",
    "answer": "atrial fibrillation",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 468,
    "category": "4 CONSONANTS IN A ROW",
    "air_date": "2010-12-07",
    "question": "'Hard coal that burns with little flame'",
    "value": "$1600",
    "answer": "anthracite",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 469,
    "category": "PLAY HEROINES",
    "air_date": "2010-12-07",
    "question": "'Barbara Undershaft'",
    "value": "$2000",
    "answer": "Major Barbara",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 470,
    "category": "DEFENESTRATION IN CINEMA",
    "air_date": "2010-12-07",
    "question": "'In this Coen Brothers movie, Charles Durning jumps out a window during a board meeting'",
    "value": "$2000",
    "answer": "The Hudsucker Proxy",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 471,
    "category": "A MASSIVE \"M\"ETROPOLIS",
    "air_date": "2010-12-07",
    "question": "'3.2 million: 150 miles from Bogota'",
    "value": "$2000",
    "answer": "Medellin",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 472,
    "category": "TAINTED GOV",
    "air_date": "2010-12-07",
    "question": "'Elected to the Senate in 1930, he refused to resign as Louisiana's gov. until '32, when his handpicked crony got the gig'",
    "value": "$2000",
    "answer": "Huey Long",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 473,
    "category": "MEDICINE",
    "air_date": "2010-12-07",
    "question": "'The name of this branch of pediatrics that deals with newborn infants literally means \"newborn study\"'",
    "value": "$2000",
    "answer": "neonatal",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 474,
    "category": "4 CONSONANTS IN A ROW",
    "air_date": "2010-12-07",
    "question": "'This important mechanism is what you're turning when you wind a clock'",
    "value": "$2000",
    "answer": "the mainspring",
    "round": "Double Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 475,
    "category": "FLAGS OF THE WORLD",
    "air_date": "2010-12-07",
    "question": "'In use from 1844 to 1905, a flag representing the union of these 2 countries was nicknamed the \"herring salad\"'",
    "value": null,
    "answer": "Norway and Sweden",
    "round": "Final Jeopardy!",
    "show_number": "6037"
  },
  {
    "id": 476,
    "category": "AMERICAN AUTHORS",
    "air_date": "2007-05-30",
    "question": "'While he was in Spain in 1959, he wrote \"The Dangerous Summer\", a story about rival bullfighters'",
    "value": "$200",
    "answer": "Hemingway",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 477,
    "category": "BEGINNING & END",
    "air_date": "2007-05-30",
    "question": "'Like a door, a Broadway show does these 2 things'",
    "value": "$200",
    "answer": "open & close",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 478,
    "category": "STATE SUPERLATIVES",
    "air_date": "2007-05-30",
    "question": "'A valley at 282 feet below sea level in this state is the lowest point in the Western Hemisphere'",
    "value": "$200",
    "answer": "California",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 479,
    "category": "3 LITTLE LETTERS",
    "air_date": "2007-05-30",
    "question": "'Like banks, many grocery stores now have these for dispensing cash & taking deposits'",
    "value": "$200",
    "answer": "ATMs",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 480,
    "category": "CALL OUT THE VOICE SQUAD",
    "air_date": "2007-05-30",
    "question": "'He was the voice of Mickey Mouse in \"Steamboat Willie\"'",
    "value": "$200",
    "answer": "Walt Disney",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 481,
    "category": "YOU'RE UNDER A \"REST\"",
    "air_date": "2007-05-30",
    "question": "'Eastern European capital city of more than 2.2 million'",
    "value": "$200",
    "answer": "Bucharest",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 482,
    "category": "AMERICAN AUTHORS",
    "air_date": "2007-05-30",
    "question": "'In 1884 she moved to Red Cloud, Nebraska & later fictionalized it as the town of Hanover in \"O Pioneers!\"'",
    "value": "$400",
    "answer": "Willa Cather",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 483,
    "category": "BEGINNING & END",
    "air_date": "2007-05-30",
    "question": "'In 2006 it began on July 1 in Strasbourg & ended on July 23 in Paris'",
    "value": "$3,000",
    "answer": "the Tour de France",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 484,
    "category": "STATE SUPERLATIVES",
    "air_date": "2007-05-30",
    "question": "'With 6,640 miles of coast, this state has the longest shoreline'",
    "value": "$400",
    "answer": "Alaska",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 485,
    "category": "3 LITTLE LETTERS",
    "air_date": "2007-05-30",
    "question": "'(<a href=\"http://www.j-archive.com/media/2007-05-30_J_09.jpg\" target=\"_blank\">Cheryl of the Clue Crew reports from the Catalina Island Conservancy.</a>) Rampant use of this 3-letter insecticide lead to a hefty settlement for restorating the population of Catalina's <a href=\"http://www.j-archive.com/media/2007-05-30_J_09a.jpg\" target=\"_blank\">bald eagles</a>'",
    "value": "$400",
    "answer": "DDT",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 486,
    "category": "CALL OUT THE VOICE SQUAD",
    "air_date": "2007-05-30",
    "question": "'(<a href=\"http://www.j-archive.com/media/2007-05-30_J_27.jpg\" target=\"_blank\">Hi, I'm Harry Shearer.</a>) Among my many \"Simpsons\" voices are the subservient Smithers & this man who lives next door to Homer--Howdy, neighbor'",
    "value": "$400",
    "answer": "Ned Flanders",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 487,
    "category": "YOU'RE UNDER A \"REST\"",
    "air_date": "2007-05-30",
    "question": "'Any mountain's summit'",
    "value": "$400",
    "answer": "crest",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 488,
    "category": "AMERICAN AUTHORS",
    "air_date": "2007-05-30",
    "question": "'(<a href=\"http://www.j-archive.com/media/2007-05-30_J_16.jpg\" target=\"_blank\">Alex reports from the Mark Twain House.</a>) Mark Twain said that this anti-slavery <a href=\"http://www.j-archive.com/media/2007-05-30_J_16a.jpg\" target=\"_blank\">novelist</a>, his next-door neighbor, liked to sneak up behind people and \"fetch a war-whoop that would jump that person out of his clothes\"'",
    "value": "$600",
    "answer": "(Harriet Beecher) Stowe",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 489,
    "category": "BEGINNING & END",
    "air_date": "2007-05-30",
    "question": "'\"From\" this to this is an idiom meaning from the start of a meal (or something else) to the end'",
    "value": "$600",
    "answer": "from soup to nuts",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 490,
    "category": "STATE SUPERLATIVES",
    "air_date": "2007-05-30",
    "question": "'It pumps more than one million barrels of oil a day, more than any other state'",
    "value": "$600",
    "answer": "Texas",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 491,
    "category": "3 LITTLE LETTERS",
    "air_date": "2007-05-30",
    "question": "'\"Day to Day\" & \"All Things Considered\" are among the programs going out to its 26 million listeners'",
    "value": "$600",
    "answer": "NPR",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 492,
    "category": "CALL OUT THE VOICE SQUAD",
    "air_date": "2007-05-30",
    "question": "'The voice of Daffy Duck (for the first 50 years)'",
    "value": "$600",
    "answer": "Mel Blanc",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 493,
    "category": "YOU'RE UNDER A \"REST\"",
    "air_date": "2007-05-30",
    "question": "'A braced framework for carrying a railroad over a chasm'",
    "value": "$600",
    "answer": "a trestle",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 494,
    "category": "AMERICAN AUTHORS",
    "air_date": "2007-05-30",
    "question": "'Under the name Laura Bancroft, he wrote about Twinkle & Chubbins in Nature Fairyland after taking us to Oz'",
    "value": "$800",
    "answer": "L. Frank Baum",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 495,
    "category": "BEGINNING & END",
    "air_date": "2007-05-30",
    "question": "'These titles of the <a href=\"http://www.j-archive.com/media/2007-05-30_J_17.jpg\" target=\"_blank\">2 paintings</a> <a href=\"http://www.j-archive.com/media/2007-05-30_J_17a.jpg\" target=\"_blank\">seen here</a> represent the beginning & end of Jesus' life'",
    "value": "$800",
    "answer": "\"The Nativity\" & \"The Crucifixion\"",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 496,
    "category": "STATE SUPERLATIVES",
    "air_date": "2007-05-30",
    "question": "'Considered the healthiest state in 2006, it's also home to the Mayo Clinic'",
    "value": "$800",
    "answer": "Minnesota",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 497,
    "category": "3 LITTLE LETTERS",
    "air_date": "2007-05-30",
    "question": "'Its headquarters compound in Langley, Virginia is named for Former President George Bush'",
    "value": "$800",
    "answer": "the CIA",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 498,
    "category": "CALL OUT THE VOICE SQUAD",
    "air_date": "2007-05-30",
    "question": "'He voiced Puss In Boots in \"Shrek 2\"'",
    "value": "$800",
    "answer": "Antonio Banderas",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 499,
    "category": "YOU'RE UNDER A \"REST\"",
    "air_date": "2007-05-30",
    "question": "'Quickly! (to an Italian)'",
    "value": "$800",
    "answer": "Presto",
    "round": "Jeopardy!",
    "show_number": "5243"
  },
  {
    "id": 500,
    "category": "AMERICAN AUTHORS",
    "air_date": "2007-05-30",
    "question": "'William Rose Benet won a Pulitzer for \"The Dust Which Is God\", & this brother won for \"John Brown's Body\"'",
    "value": "$1000",
    "answer": "Stephen Vincent Benet",
    "round": "Jeopardy!",
    "show_number": "5243"
  }
]

app.get('/questions', (req, res) => {
  let result = questions
  if (req.query.category) {
    result = result.filter(quest => quest.category.includes(req.query.category));
  }

  if (req.query.limit) {
    result = result.slice(0, parseInt(req.query.limit))
  }

  res.send(result)
});


app.get('/questions/:id', (req, res) => {
  const question = questions.find(quest => quest.id === +req.params.id)
  if (question) {
    res.status(200).json(question)
  } else {
    res.status(404).send('Not Found')
  }
})

app.listen(port, function () {
  console.log(`Serveur is OK, Check the http://localhost:${port}`)
})