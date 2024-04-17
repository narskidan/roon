/-  *delta
/+  default-agent, dbug
|%
+$  card  card:agent:gall
--
%-  agent:dbug
^-  agent:gall
|_  =bowl:gall
+*  this     .
    default  ~(. (default-agent this %|) bowl)
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  ?>  ?=(%noun mark)
  =/  action  !<(?([%sub =@p] [%unsub =@p]) vase)
  ?-    -.action
      %sub
    :_  this
    [%pass /values-wire %agent [p.action %delta] %watch /values]~
  ::
      %unsub
    :_  this
    [%pass /values-wire %agent [p.action %delta] %leave ~]~
  ==
::
++  on-agent
  |=  [=wire =sign:agent:gall]
  ^-  (quip card _this)
  ?>  ?=([%values-wire ~] wire)
  ?+    -.sign  (on-agent:default wire sign)
      %watch-ack
    ?~  p.sign
      ((slog '%delta-follower: subscribe succeeded!' ~) `this)
    ((slog '%delta-follower: subscribe failed!' ~) `this)
  ::
      %kick
    %-  (slog '%delta-follower: Got kick, resubscribing...' ~)
    :_  this
    [%pass /values-wire %agent [src.bowl %delta] %watch /values]~
  ::
    %fact
    ~&  >>  fact+p.cage.sign
    ?>  ?=(%delta-update p.cage.sign)
    ~&  >>  !<(update q.cage.sign)
    `this
  ==
++  on-watch  on-watch:default
++  on-peek   on-peek:default
++  on-init   on-init:default
++  on-save   on-save:default
++  on-load   on-load:default
++  on-arvo   on-arvo:default
++  on-leave  on-leave:default
++  on-fail   on-fail:default
--