# roon

An Urbit application that tells your fortune using stylized runes from the Hoon programming language.

`|install ~nocdev-nolsub-motluc-nammex %roon`

![Screenshot 2024-05-06 at 9 59 40 a m](https://github.com/darighost/roon/assets/104947308/ec41353f-78a4-442f-8bf3-9a175e2acd56)

## How it works

Upon install, the `on-init` arm of `app/roon.hoon` will set a 1 minute timer to Behn.

When that timer finishes, Behn will call our app's `on-agent` arm, which will generate a new runecast, then call Behn and tell it to on-agent us again in a few days.

When the frontend finishes loading a fortune, it calls our `on-poke` arm, which lets us know the fortune is already read. This way, we don't repeat the loading screen when you go to the same fortune.

When the frontend calls our `on-peek` arm, we tell them three things:

1. Is this a new fortune? If so, do the loading screen.
2. What readings do we have? We don't just give the most recent reading, we give them the whole history of readings.
3. The name of our ship. The frontend needs this. Idk how they scry us without knowing this, but for some reason, they can scry us without knowing the ship name, but they cannot poke without it. We give them this, so they can poke.

Btw, the "reading" is just the ship's current date, with now.bowl.

Btw btw, the backend is completely unnecessary. There's no reason we can't just generate the reading using the date on the frontend. I guess we need some kind of state between sessions in case you've already seen you're reading? But even then - we could use a cookie or localStorage or whatever. Really, this was just an opportunity for me to make the simplest Gall agent so I can learn.
