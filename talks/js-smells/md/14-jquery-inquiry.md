# jQuery Inquiry

# Smell

Notes:

Become tired of...

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
