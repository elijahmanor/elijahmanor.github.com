<!--
{
  "className": "Slide--title"
}
-->

# Flux

---

# Flux

> "Flux is more of a pattern than a framework" --[Flux](https://github.com/facebook/flux#requirements)

---

# Why Not MVC?

RETHINK THIS EXAMPLE... MAYBE SHOW THE 2-WAY APPROACH INSTEAD

<div class="mermaid">
  graph LR;

  classDef controller fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef model fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Model(Model)-->Controller(Controller);
  Controller-->View(View);
  View-->Controller
  Controller-->Model

  class Model model;
  class Controller controller;
  class View view;
</div>

---

# MVC Gone Wrong

RETHINK THIS EXAMPLE... MAYBE SHOW THE 2-WAY APPROACH INSTEAD

<div class="mermaid">
  graph TD;

  classDef controller fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef model fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Model1(Model)-->Controller(Controller);
  Model2(Model)-->Controller;
  Model3(Model)-->Controller;
  Model4(Model)-->Controller;
  Controller-->Model1;
  Controller-->Model2;
  Controller-->Model3;
  Controller-->Model4;
  View1(View)-->Controller;
  View2(View)-->Controller;
  View3(View)-->Controller;
  View4(View)-->Controller;
  Controller-->View1;
  Controller-->View2;
  Controller-->View3;
  Controller-->View4;

  class Model1,Model2,Model3,Model4 model;
  class Controller controller;
  class View1,View2,View3,View4 view;
</div>

---

# Why?

> "We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable." --https://facebook.github.io/flux/docs/overview.html

---

# What is Flux?

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef dispatcher fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Action(Action)-->Dispatcher(Dispatcher);
  Dispatcher-->Store(Store);
  Store-->View(View);

  class Action action;
  class Dispatcher dispatcher;
  class Store store;
  class View view;
</div>

---

# What is Flux... Really?

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef dispatcher fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Action1(Action)-->Dispatcher(Dispatcher);
  Dispatcher-->Store(Store);
  Store-->View(View);
  View-->Action2(Action);
  Action2-->Dispatcher;

  class Action1,Action2 action;
  class Dispatcher dispatcher;
  class Store store;
  class View view;
</div>

---




# Flux

NOTES:

* https://github.com/voronianski/flux-comparison
* https://github.com/spoike/refluxjs
* https://facebook.github.io/flux/docs/overview.html#content
* http://jonathancreamer.com/what-the-flux/
* http://blog.andrewray.me/flux-for-stupid-people/
* https://ochronus.com/react-reflux-example/
* https://github.com/enaqx/awesome-react#flux-tutorials
