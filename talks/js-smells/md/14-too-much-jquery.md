# Too Much jQuery

Notes:

```
$('input').keyup(function() {
    if($(this).val() === 'blah') { ... }
});
```

```
$('input').keyup(function() {
  if(this.value === 'blah') { ... }
});
```
