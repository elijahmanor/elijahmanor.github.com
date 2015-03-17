# Two-Way Data Binding Smell

------

## Smelly Code

```
```

> "...you can set the directionality of it to be 2 way data binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps." --Miško Hevery https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785

------

## React Flux Architecture

![](./img/flux-simple-f8-diagram-with-client-action-1300w.png)

------

## Why Does This Smell?

------

so two-way data binding
that's kind of a love hate relationship
so there is this thing in angular 1 if you have two components and they are bound to eachother you can set the directionality to be 2 way data binding
that seems good until you  have a large scale application and then
it turns out to be an anti-pattern for large apps
