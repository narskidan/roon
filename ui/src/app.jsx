import React, { useEffect, useState, useReducer } from 'react'
import Urbit from '@urbit/http-api'
import Typewriter from 'typewriter-effect';

const api = new Urbit( '', '', window.desk )
api.ship = window.ship

function reducer( state, action ) {
  let newState = [ ...state ]
  switch ( action.type ) {
    case 'init':
      return action.init
    case 'push':
      newState.push(action.val)
      return newState
    case 'pop':
      newState.shift()
      return newState
    default:
      return state
  }
}

export function App() {
  const [unclicked, setUnclicked] = useState(true)
  const [ state, dispatch ] = useReducer( reducer, [] )
  const [ inputValue, setInputValue ] = useState( "" )

  useEffect(() => {
    async function init() {
      api.subscribe( { app:"roon", path: '/values', event: handleUpdate } )
    }
    init()
  }, [] )

  const handleUpdate = ( upd ) => {
    if ( 'init' in upd ) {
      dispatch({type:'init', init:upd.init})
    }
    else if ( 'push' in upd ) {
      dispatch({type:'push', val:upd.push.value})
    }
    else if ( 'pop' in upd ) {
      dispatch( { type:'pop' } )
    }
  }

  const push = () => {
    const val = parseInt( inputValue )
    if ( isNaN( val ) ) return
    api.poke( {
      app: 'roon',
      mark: 'roon-action',
      json: { push: { target:`~${window.ship}`, value:val } }
    } )
    setInputValue( "" )
  }

  const pop = () => {
    api.poke( {
      app: 'roon',
      mark: 'roon-action',
      json: { pop: `~${window.ship}` }
    } )
  }

  const runes = [
    {
        name: "buccol",
        symbol: "$:",
        url: "https://fontmeme.com/permalink/240225/1c0bc3174ea0f2d2e5da72a3daa5db02.png",
        hint: "butthole",
        fortunes: [
            "The anxio-retentive yestermom puckers reminiscently. Gaze manlyly tomorroward.",
            "You've been tight. Hardness breaks. Softness wins by yielding",
            "Discipline will break you. Submit to God, who's will never breaks.",
            ""
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
        url: "https://fontmeme.com/permalink/240225/5367b31573a3708464703251f4b83e1c.png",
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
        url: "https://fontmeme.com/permalink/240225/06437b382737e02aeabfd1ac3c464916.png",
        hint: "Professor McGonogall",
        fortunes: [
            "Those Irish pastures, anemoia.",
            "Reach out to the teacher who you always think of. They also think of you.",
            "A teacher is coming.",
            "Your true face has rotted beneath the mast. Now, the mask is your face."
        ]
    },
    {
        name: "dottis",
        symbol: ".=",
        url: "https://fontmeme.com/permalink/240225/f0cb58662212151f54ba216d1c920390.png",
        hint: "dotties",
        fortunes: [
            "Childhood summers are still inside, bathing you, softly sponging you with reminders that it's all okay.",
            "In a dress, you met the one who will teach you how to breathe",
            "Has time begun to pass? Even the relief of spring only means sickness - for most.",
            "Your life will spin and spin, and then stop. What you saw spinning will be a blur, and then nothing."
        ]
    },
    {
        name: "fassig",
        symbol: "/~",
        url: "https://fontmeme.com/permalink/240225/08dd838a0590ae6a88f01ce302616584.png",
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
        url: "https://fontmeme.com/permalink/240225/2f325ed085db3a04fd695cf7c8f6a284.png",
        hint: "taxi cab at the bar",
        fortunes: [
            "You tasted early, what many never taste",
            "Recently you had a sample, much more is coming",
            "The change you're waiting for is almost here.",
            "You started well, but laziness wants to corrupt you. Remember where you came from."
        ]
    },
  ]
  const date = new Date()
  const seed = (date.getFullYear() + date.getMonth() + date.getDate());
  console.log(seed)
  const rune1 = runes[(seed + 0) % runes.length];
  const rune2 = runes[(seed + 1) % runes.length];
  const rune3 = runes[(seed + 2) % runes.length];
  const rune4 = runes[(seed + 3) % runes.length];
  const cast = [rune1, rune2, rune3, rune4]
  // original (using pop and push)
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen">
//       <input style={{width:200}} className='border' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//       <div>
//         <button onClick={() => push()} style={{width:100}} className='border p-2 text-black-400'>Push</button>
//         <button onClick={() => pop()} style={{width:100}} className='border p-2 text-black-400'>Pop</button>
//         <p>Our stack</p>
//         {state.map((eachValue, index) => {
//           return (<li key={index}>{eachValue}</li>)
//         })}
//       </div>
//     </main>
//   )
  return (
    <main>
      <h1>rune cast ~{window.ship}</h1>
      <center><span>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</span></center>
      <br />
      <div id="imgs">{cast.map(r => (<img src={r.url}></img>))}</div>
      <br />
      <hr></hr>
      {
        (unclicked)
        ? (
            <div>
                <center><div class="loader"></div></center>
                <div style={{fontFamily: 'monospace', color: 'darkgray', marginTop: '40px'}}>
                <Typewriter
                    options={
                        {delay: 25}
                    }
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`$ ./urbit/.roon --fortune<br />`)
                            .typeString(`(%ask) fortune: ${cast.map(c => c.name).join('-')} <br />`)
                            .typeString(`~${window.ship}:dojo> |load \`\`&yijing`)
                            .deleteChars(6)
                            .typeString(`our %roon<br />`)
                            .typeString('> Building your fortune...<br />')
                            .typeString('> collecting Ares proto-runes...<br />')
                            .typeString(`~${window.ship}:dojo> +fortune<br />`)
                            .typeString(`<span style="color: lightgrey">[~ ${cast.map(c => c.name).join('-')}]</span><br/>`)
                            .typeString(`~${window.ship}:dojo> |cast &noun ${cast.map(c => c.name).join('-')}</div><br/>`)
                            .typeString('> Reading fortune.......<br />')
                            .pauseFor(500)
                            .callFunction(() => {
                                setUnclicked(false);
                            })
                            .start();
                    }}
                />
                </div>
            </div>
        )
        : (
            <div>{cast.map((r, i) => (
                <div class="reading">
                    <span class="symbol">{r.symbol}</span>
                    <span class="meaning">{r.fortunes[i]}</span>
                </div>
            ))}</div>
        )
      }
    </main>
  )
}

export default App;