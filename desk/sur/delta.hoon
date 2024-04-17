|%
+$  action
  $%  [%push target=@p value=@]
      [%pop target=@p]
  ==
+$  update
  $%  [%init values=(list @)]
      action
  ==
--