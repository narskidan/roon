var runes = [
  {
      name: "buccol",
      symbol: "$:",
      url: "https://fontmeme.com/permalink/240225/1c0bc3174ea0f2d2e5da72a3daa5db02.png",
      hint: "butthole",
      fortunes: [
          "The retentive yestermom puckers sonorously. Gaze manlyly tomorroward.",
          "You've been tight. Hardness breaks. Softness wins by yielding",
          "Discipline will break you. Submit to God, who's will never breaks.",
          "You squeezed the lemon, you drank the juice."
      ]
  },
  {
      name: "barcen",
      symbol: "|%",
      url: "https://fontmeme.com/permalink/240225/c602ee9f217e8c15734e2b2821cb5dbb.png",
      hint: "door",
      fortunes: [
          "When you ate what is dead, you made it alive. What will happen when you eat what is alive?",
          "You have met a person. Know them, the way so you rarely do.",
          "Earth will send someone to you, one of the world's children, who is a gift",
          "The years are many arms, a door to connect with people through love."
      ]
  },
  {
      name: "wutpam",
      symbol: "?&",
      url: "https://fontmeme.com/permalink/240225/77e8b2a597bc18fc5804551ffbac1eb5.png",
      hint: "and what?",
      fortunes: [
          "You have asked yourself enough questions. Now clarity, now answers. Don't think.",
          "The answer to the question you asked is 'yes, and...'",
          "Stop questioning the foundation. You found the bottom, now build upward",
          "Your life will chain together disparate truths into a warm fabric for cold aeons."
      ]
  },
  {
      name: "dicbal",
      symbol: ":-",
      url: "https://fontmeme.com/permalink/240225/9b8e9b075064849f6afa59e05a05cc55.png",
      hint: "colhelp",
      fortunes: [
          "Your body and innocence have been exploited, a darkness nuzzles your skin, soft and fatty.",
          "Sex hunted you recently. Come out of hiding, become the hunter.",
          "Stand erect tomorrow, and the next day. Be firm, like Redwood thrusting into the clouds.",
          "Manliness calls to you. You will become strong, and the soft earth will thirst for you to plough and water fertile dirt."
      ]
  },
  {
      name: "lustar",
      symbol: "+*",
      url: "https://fontmeme.com/permalink/240225/a1d0d91fc692eaa5ba3c7c5c4ce7c253.png",
      hint: "lust star",
      fortunes: [
          "You were born of a powerful, explosive desire. Consellations donned earthly forms to conceive you.",
          "Feel the astral buzz, the swirl of blood in the morning that turns dragons into marble pillars.",
          "Burning in your blood, the call to fuck, be fucked, to become fucking. God gave you lust so you would explode into confetti. Die and be reborn, NOW!",
          "Discipline will never be enough, the heart of a poet is distracted by bacchus, your blood, that horny star - this is your lot."
      ]
  },
  {
      name: "zappat",
      symbol: "!@",
      url: "https://fontmeme.com/permalink/240228/5367b31573a3708464703251f4b83e1c.png",
      hint: "wing branch",
      fortunes: [
          "You have hid from pain by being a source of pain. A hornet who protects by threatening retaliation.",
          "Who did you hurt recently? And why did you say it was okay?",
          "The time is coming when you will need to hurt someone.",
          "Become someone you would be afraid of."
      ]
  },
  {
      name: "micgal",
      symbol: ";<",
      url: "https://fontmeme.com/permalink/240228/06437b382737e02aeabfd1ac3c464916.png",
      hint: "Professor McGonogall",
      fortunes: [
          "Those Irish pastures, anemoia.",
          "Reach out to the teacher who you always think of. They also think of you.",
          "A teacher is coming. Learn to stop being yourself",
          "Your true face has rotted beneath the mask. Now, the mask is your face."
      ]
  },
  {
      name: "dottis",
      symbol: ".=",
      url: "https://fontmeme.com/permalink/240318/1c0e06d17143625241e917571efd7108.png",
      hint: "dotties",
      fortunes: [
          "Childhood summers are still inside, bathing you, softly sponging you with the knowledge that you used to be a child.",
          "In a dress, you met the one who will teach you how to breathe",
          "Has time begun to pass? Even the relief of spring only means sickness - for most.",
          "Your life will spin and spin, and then stop. What you saw spinning will be a blur, and then nothing."
      ]
  },
  {
      name: "fassig",
      symbol: "/~",
      url: "https://fontmeme.com/permalink/240228/08dd838a0590ae6a88f01ce302616584.png",
      hint: "fascist",
      fortunes: [
          "Who broke the word 'authority', your father, or your father's father?",
          "You have broken what you meant to control",
          "You will control the present, but fail to morph it into your imagined past.",
          "Nothing you want to control even matters."
      ]
  },
  {
      name: "barcab",
      symbol: "|_",
      url: "https://fontmeme.com/permalink/240228/2f325ed085db3a04fd695cf7c8f6a284.png",
      hint: "taxi cab at the bar",
      fortunes: [
          "You tasted early, what many never taste",
          "Recently you had a sample, much more is coming",
          "The change you're waiting for is almost here.",
          "You started well, but laziness wants to corrupt you. Remember where you came from."
      ]
  },
]
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


for (const rune of runes) {
  download(rune.url, rune.name + '.png', function(){
    console.log('Downloading ' + rune.name);
  });
}