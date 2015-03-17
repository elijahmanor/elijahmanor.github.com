# jQuery Inquiry

------

## Smelly Code

```
$('a').addClass('reg-link')
    .find('span')
        .addClass('inner')
    .end().end()
    .find('div')
        .mouseenter(mouseEnterHandler)
        .mouseleave(mouseLeaveHandler)
    .end()
    .explode();

$(elem).props('checked')

$(elem).val()
.value
.href intead of attr('href')


    $("#foo").parent().parent()...
```

------

## Why Does This Smell?

------

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
