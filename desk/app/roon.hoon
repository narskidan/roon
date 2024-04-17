/+  default-agent, dbug
|%
+$  card  card:agent:gall
++  to-js
  |=  [new-reading=? readings=(list @da)]
  ^-  json
  %-  pairs:enjs:format
  :~  :-  'new-reading'  b+new-reading
  :-  'readings'  a+(turn readings |=(n=@da s+(scot %da n)))
  ==
++  build-notification
:: note: .^(? %gu /(scot %p our.bol)/hark/(scot %da now.bol)/$)
:: (checks for hark lol)
|=  [=bowl:gall msg=@t]
  =/  id      `@uvH`(end 7 (shas %yoho-notification eny.bowl))
  =/  rope    [~ ~ q.byk.bowl /(scot %p %zod)/[dap.bowl]]
  =/  action  [%add-yarn & & id rope now.bowl [ship+our.bowl msg ~] /[dap.bowl] ~]
  =/  =cage   [%hark-action !>(action)]
  [%pass /hark %agent [our.bowl %hark] %poke cage]
--
%-  agent:dbug
=/  readings
  `(list @da)`~
=/  new-reading  `bean`%.n
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %.n) bowl)
++  on-init
  ^-  (quip card _this)
  :_  this
  :~  [%pass /timers %arvo %b %wait (add now.bowl ~h1)]
  ==
++  on-save  on-save:def
++  on-load  on-load:def
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  `this(new-reading %.n)
++  on-watch  on-watch:def
++  on-leave  on-leave:def
:: Scry
:: .^([new-reading=bean readings=(list @da)] %gx /=roon=/noun)
:: The above no longer works because readings now returns 
:: a JSON type thingie.
++  on-peek
  |=  =path
  ^-  (unit (unit cage))
  ``json+!>((to-js new-reading readings))
++  on-agent  on-agent:def
++  on-arvo
  |=  [=wire =sign-arvo]
  ^-  (quip card _this)
  :_  this(new-reading %.y, readings (snoc readings now.bowl))
  :~  [%pass /timers %arvo %b %wait (add now.bowl ~d5)]
      (build-notification bowl ' Your fortune is ready')
  ==
++  on-fail   on-fail:def
--