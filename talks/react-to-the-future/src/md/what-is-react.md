<!--
{
  "className": "Slide--title"
}
-->

# What is React?

> "A JavaScript Library for Building User Interfaces" -- [React](https://facebook.github.io/react/)


---

# Who Uses React?

<div class="Split">
  <div class="Split-column">
    <ul>
      <li>Atlassian</li>
      <li>BBC</li>
      <li>Codecademy</li>
      <li>Dropbox</li>
      <li>EveryDollar</li>
      <li>Facebook</li>
      <li>Flipboard</li>
      <li>GitHub</li>
      <li>Imgur</li>
      <li>Instagram</li>
    </ul>
  </div>
  <div class="Split-column">
    <ul>
      <li>Khan Academy</li>
      <li>Netflix</li>
      <li>PayPal</li>
      <li>Reddit</li>
      <li>Salesforce</li>
      <li>Venmo</li>
      <li>WhatsApp</li>
      <li>Wired</li>
      <li>Yahoo</li>
    </ul>
  </div>
</div>

Add your own entry to [Facebook's Sites Using React Wiki](https://github.com/facebook/react/wiki/Sites-Using-React)

---

# So, It's like Angular or Ember?

## No

>  "Lots of people use React as the V in MVC." -- [React](https://facebook.github.io/react/)

---

# So, It's a Template Library?

## No

> "React components are far more powerful than Angular templates; they should be compared with Angular's directives instead" --Pete Hunt ([Quora](http://www.quora.com/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look))

---

# Why is it Compelling?

* Declarative & Composable
* Virtual DOM
* One-Way Data Flow

---

# Declarative & Composable

<div class="Split">
  <div class="Split-column">
    <p>Imperative Code: How</p>
    <pre class="language-javascript language--clean language--small"><code>
$('form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: '/customers',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.status')
        .append('&lt;h3&gt;' + data + '&lt;/h3&gt;');
    }
  });
});</code></pre>
  </div>
  <div class="Split-column">
    <p>Declarative Code: What</p>
    <pre class="language-jsx language--clean language--small"><code>
var NoteBox = React.createClass({
  // ... more code ...
  render: function() {
    return &lt;div className="NoteBox"&gt;
      &lt;h1>Notes&lt;/h1&gt;
      &lt;NoteList data={this.state.data} /&gt;
      &lt;NoteForm onPost={this.handlePost} /&gt;
    &lt;/div&gt;;
  }
});</code></pre>
  </div>
</div>  

---

# Declarative & Composable

* React is an Abstraction away from the DOM
* It Simplifies the Mental Model
* Re-render the whole app on every update
* Mix and match components to build UIs

---

# Virtual DOM

<div class="Split">
  <div class="Split-column">
  <ul>
<li> Re-rendering the whole app on every update is not efficient
<li> The Virtual DOM will only update what is necessary
</ul>
<blockquote> "I tend to think of React as Version Control for the DOM" —AdonisSMU</blockquote>

  </div>
  <div class="Split-column">
  <ul>

<li> It works much like a Gaming Engine
</ul>
<img src="./img/mario-sprite.png" />


  </div>
</div>

---

# React Uses a One-Way Data Flow

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

<small>We will upack this later in the presentation</small>

---

# Dangers of a Two-Way Data Flow

<div class="Split">
  <div class="Split-column">
<blockquote>"...you can set the directionality of it to be 2-Way Data Binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps." --<a href="https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785">Misko Hevery</a></blockquote>

  </div>
  <div class="Split-column">
  <ul>

<img src="./img/2-way-binding.png" />
<small style="text-align: center; display: block;">Image from <a href="https://medium.com/@davidsouther/song-flux-e1f9786579f6">David Souther</a></small>

  </div>
</div>

---

# So, Why is it Compelling?

## Declarative → Predictable → Confidence → Reliability <span class="Footnote">*<span>

<br />

<span class="Footnote">*</span> Tom Ochino's [React.js Conf keynote](https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868)

---

# So, What is the Learning Curve?

* Learning React? **Easy**
* Learning the Rest? **Intermediate**

---

<!--
{
  "className": "Slide--reload"
}
-->

# Getting Started

<div class="Split">
  <div class="Split-column">

<p>Once you know the basics (we'll cover those in this talk), then you can get started building locally with the [create-react-app](https://github.com/facebookincubator/create-react-app) command-line utility.</p>

<p>Or, if you just want to tinker online then [codesandbox.io](https://codesandbox.io) is a great option!</p>

  </div>
  <div class="Split-column">


<iframe src="https://codesandbox.io/embed/92yzpkw2xw?autoresize=1&codemirror=1" 
data-online="https://codesandbox.io/embed/92yzpkw2xw?autoresize=1&codemirror=1"
data-offline="https://codesandbox.io/embed/92yzpkw2xw?autoresize=1&codemirror=1"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
  </div>
</div>



<!--

---

# Large Scale Applications?

* React scales better with complexity
* Good news is... the main SPA frameworks are influencing each other
* Angular 2x & Ember 2x are moving away from 2-way data binding

---

# Is React Similar to Web Components?

## No

React is abstracted away from the browser, while Web Components will be a native browser feature

> "We’re not going to build React on it because there’s a strong model difference -- imperative in Web Components to declarative in React.  Web Components doesn’t have an idiomatic way to define things like where events go." -—Sebastian [Google Docs](https://docs.google.com/document/d/1QZxArgMwidgCrAbuSikcB2iBxkffH6w0YB0C1qCsuH0/edit)

---

# Can React be used with other JavaScript MVC Frameworks? Yes

* [Improving Angular Rendering Performance](http://mono.software/posts/Improving-AngularJS-long-list-rendering-performance-using-ReactJS/) & [Faster Angular Rendering](http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/)
* [Using React as Backbone View](http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html)

-->
