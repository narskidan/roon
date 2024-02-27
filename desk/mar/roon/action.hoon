/-  *roon
|_  act=action
++  grow
  |%
  ++  noun  act
  --
++  grab
  |%
  ++  noun  action
  ++  json
    =,  dejs:format
    |=  jon=json
    ^-  action
    %.  jon
    %-  of
    :~  [%push (ot ~[target+(se %p) value+ni])]
        [%pop (se %p)]
    ==
  --
++  grad  %noun
--