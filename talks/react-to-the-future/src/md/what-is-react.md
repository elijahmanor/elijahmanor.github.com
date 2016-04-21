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
    <p>Imperative Code</p>
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
    <p>Declarative Code</p>
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

* Re-rendering the whole app on every update is not efficient
* The Virtual DOM will only update what is necessary
* It works much like a Gaming Engine

> "I tend to think of React as Version Control for the DOM" —AdonisSMU

---

# One-Way Data Flow

> "...you can set the directionality of it to be 2-Way Data Binding. That actually seems to be a good idea until you have a large scale application and then it turns out you have no idea whats going on... and turns out to be an anti-pattern for large apps." --[Misko Hevery](https://www.youtube.com/watch?v=uD6Okha_Yj0#t=1785)

---

# So, Why is it Compelling?

## Declarative → Predictable → Confidence → Reliability <span class="Footnote">*<span>

<br />

<span class="Footnote">*</span> Tom Ochino's [React.js Conf keynote](https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868)

---

# So, What is the Learning Curve?

* Learning React? **Easy**
* Learning the Rest? **Intermediate**

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
