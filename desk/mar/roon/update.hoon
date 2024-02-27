/-  *roon
|_  upd=update
++  grow
  |%
  ++  noun  upd
  ++  json
    =,  enjs:format
    ^-  ^json
    ?-    -.upd
      %pop   (frond 'pop' s+(scot %p target.upd))
      %init  (frond 'init' a+(turn values.upd numb))
      %push  %+  frond  'push'
             %-  pairs
             :~  ['target' s+(scot %p target.upd)]
                 ['value' (numb value.upd)]
    ==       ==
  --
++  grab
  |%
  ++  noun  update
  --
++  grad  %noun
--