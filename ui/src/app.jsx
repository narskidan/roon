import React, { useEffect, useState } from 'react'
import Urbit from '@urbit/http-api'
import Typewriter from 'typewriter-effect';
import runes from './data/runes'
import NullReadings from './components/NullReadings'
import NoReadings from './components/NoReadings'


const urbit = new Urbit( '', '', window.desk )
urbit.ship = window.ship

export function App() {
  const [unclicked, setUnclicked] = useState(true)
  const [isNewReading, setIsNewReading] = useState(true)
  const [readingsHistory, setReadingsHistory] = useState(null);

  useEffect(() => {
    urbit.scry({
      app: "roon",
      path: '/whatever',
    }).then(res => {
      setIsNewReading(res['new-reading']);
      setReadingsHistory(res.readings)
    }).catch(e => {
      console.log(e)
    });
    }, []);

  if (readingsHistory === null) {
    return <NullReadings />
  }

  if (readingsHistory.length === 0) {
    return <NoReadings />
  }

  const seed = readingsHistory
    .slice(-1)[0]
    .split('')
    .map(e => e.charCodeAt(0))
    .reduce((e, acc) => acc + e)
  const rune1 = runes[(seed + 0) % runes.length];
  const rune2 = runes[(seed + 1) % runes.length];
  const rune3 = runes[(seed + 2) % runes.length];
  const rune4 = runes[(seed + 3) % runes.length];
  const cast = [rune1, rune2, rune3, rune4]

  return (
    <main>
      <h1>rune cast ~{window.ship}</h1>
      <center><span>{`${readingsHistory.slice(-1)[0]}`}</span></center>
      <br />
      <center>
        <div id="imgs">{cast.map(r => (<img src={`http://24.144.93.173/${r.name}.png`}></img>))}</div>
      </center>
      <br />
      <hr></hr>
      {
        (unclicked && isNewReading)
        ? (
            <div>
                <center><div class="loader"></div></center>
                <div style={{fontFamily: 'monospace', color: 'darkgray', marginTop: '40px'}}>
                <Typewriter
                    options={
                        {delay: 20}
                    }
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`$ ./urbit/.roon --fortune<br />`)
                            .typeString(`(%ask) fortune: ${cast.map(c => c.name).join('-')} <br />`)
                            .typeString(`~${window.ship}:dojo> |load \`\`&yijing`)
                            .deleteChars(6)
                            .typeString(`our %roon<br />`)
                            .typeString('> casting Ares proto-runes...<br />')
                            .typeString(`~${window.ship}:dojo> +fortune<br />`)
                            .typeString(`<span style="color: lightgrey">[~ ${cast.map(c => c.name).join('-')}]</span><br/>`)
                            .typeString(`~${window.ship}:dojo> |cast &noun ${cast.map(c => c.name).join('-')}</div><br/>`)
                            .typeString('> Reading fortune.......<br />')
                            .pauseFor(400)
                            .callFunction(() => {
                              setUnclicked(false);
                              urbit.poke( {
                                app: 'roon',
                                mark: 'roon-loader',
                                json: { whatev: 'lol' }
                              }).catch(e => {
                                console.log(e)
                              })
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