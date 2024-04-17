/+  *test
/=  emirp  /gen/emirp
|%
++  test-01
  %+  expect-eq
    !>  `@ud`13
    !>  (emirp 1)
++  test-02
  %+  expect-eq
    !>  `@ud`30
    !>  (emirp 2)
++  test-03
  %+  expect-eq
    !>  `@ud`169
    !>  (emirp 5)
++  test-04
  %+  expect-eq
    !>  `@ud`638
    !>  (emirp 10)
++  test-05
  %+  expect-eq
    !>  `@ud`6.857
    !>  (emirp 25)
++  test-06
  %+  expect-eq
    !>  `@ud`32.090
    !>  (emirp 50)
++  test-07
  %+  expect-eq
    !>  `@ud`115.370
    !>  (emirp 100)
++  test-08
  %+  expect-eq
    !>  `@ud`4.509.726
    !>  (emirp 500)
++  test-09
  %+  expect-eq
    !>  `@ud`20.588.650
    !>  (emirp 1.000)
++  test-10
  %+  expect-eq
    !>  `@ud`96.818.899
    !>  (emirp 1.847)
++  test-11
  %+  expect-eq
    !>  `@ud`125.250.594
    !>  (emirp 2.102)
--