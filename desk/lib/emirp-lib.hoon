|%
++  is-dvzb
  |=  [a=@ud b=@ud]
  =(0 (mod a b))
:: Best prime checking algorithm:
:: Divide n by all prime numbers
:: (determined via a modified version
:: of the sieve of eratosthenes)
:: up to sqrt(n)
++  is-prime
  |=  n=@ud
  :: Micro optimization: Only check up to n / 4
  %+  levy
  %-  sieve  (whole-sqrt n)
  |=(e=@ud !(is-dvzb n e))
:: Sieve of eratosthenes implementation based on @GallAgentHelga's
:: code (https://git.lain.church/bitchfemcel/real-eri/issues/3)
++  sieve
  |=  n=@ud
  ^-  (list @ud)
  =/  field 
    ^-  (list (unit @ud))
    (turn (gulf 0 n) some)
  :: we can stop at (sqrt n) for math reasons
  =/  stop-point  (whole-sqrt n)
  =/  index  2
  |-
  ?:  (gth index stop-point)
    =/  unwrapped  (turn (slag 2 field) need)
    (skim unwrapped |=(n=@ud !=(n 0)))
  =/  indices  (every-n index field)
  %=  $
    field  (clear-composites field indices)
    index  (add 1 index)
  ==
++  every-n
  |=  [n=@ud l=(list (unit @ud))]
  =/  times-x  |=(x=@ud (mul x n))
  =/  factors  (div (dec (lent l)) n)
  (turn (gulf 2 factors) times-x)
++  clear-composites
  |=  [f=(list (unit @ud)) c=(list @ud)]
  ^-  (list (unit @ud))
  ?:  =(0 (lent c))
    f
  =/  null-unit  `(unit @ud)`(some 0)
  %=  $
    f  (snap f (snag 0 c) null-unit)
    c  (slag 1 c)
  ==
++  whole-sqrt
  |=  n=@ud
  (div `@ud`+:(toi:rs (sqt:rs (sun:rs n))) 2)
:: ++flop for @ud
++  flud
  |=  n=@ud
  %-  fix-dots
  %-  flop
  %+  scow  %ud  n
++  fix-dots
  |=  n=tape
  =/  n  (skim n |=(c=@t !=(c '.')))
  `@ud`(scan n dem)
--
