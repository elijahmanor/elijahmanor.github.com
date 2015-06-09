---
layout: page-wide
title: Speaking
---

{% assign talks = 0 %}
{% assign usergroups = 0 %}
{% assign conferences = 0 %}
{% assign podcasts = 0 %}
{% for event in site.data.events %}
	{% assign talks = talks | plus: event.sessions.size %}
	{% case event.type %}
	{% when 'usergroup' %}
		{% assign usergroups = usergroups | plus: 1 %}
	{% when 'conference' %}
		{% assign conferences = conferences | plus: 1 %}
	{% when 'podcast' %}
		{% assign podcasts = podcasts | plus: 1 %}
	{% endcase %}
{% endfor %}

<div><span class="eventSize">{{ site.data.events | size }}</span> Events (<span class="talkSize">{{ talks }}</span> Talks (<span class="userGroupSize">{{ usergroups }}</span> User Groups, <span class="conferenceSize">{{ conferences }}</span> Conferences) and <span class="podcastSize">{{ podcasts }}</span> Podcasts)</div>
{% capture nowunix %}{{ 'now' | date: '%s' }}{% endcapture %}
<div id="eventEmployer" class="ButtonGroup">
  <button type="button" class="ButtonGroup-button" data-value="sommet">Sommet</button>
  <button type="button" class="ButtonGroup-button" data-value="appendto">appendTo</button>
  <button type="button" class="ButtonGroup-button" data-value="manorism">Manorism</button>
  <button type="button" class="ButtonGroup-button" data-value="lampo">Ramsey Solutions</button>
</div>
<div id="eventType" class="ButtonGroup">
  <button type="button" class="ButtonGroup-button" data-value="usergroup">User Groups</button>
  <button type="button" class="ButtonGroup-button" data-value="conference">Conferences</button>
  <button type="button" class="ButtonGroup-button" data-value="podcast">Podcasts</button>
</div>
<ul class="Events">
{% for event in site.data.events reversed %}
	{% capture eventdate %}{{ event.date | date: '%s' }}{% endcapture %}
  <li class="Event {% if nowunix < eventdate %}Event--upcoming{% endif %}" data-date="{{ event.date }}" data-employer="{{event.employer}}" data-type="{{ event.type }}">
		<div class="Event-date Date">
			<div class="Date-day">{{ event.days }}</div>
			<div class="Date-summary">
				<div class="Date-month">{{ event.date | date: "%b" }}</div>
				<div class="Date-year">{{ event.date | date: "%Y" }}</div>
			</div>
		</div>
		<div class="Badges">
			<div class="Badges-badge Badges-badge--type Event-type">{{ event.type }}</div>
			<div class="Badges-badge Badges-badge--employer Event-employer">{{ event.employer }}</div>
		</div>
		<header class="Event-name">
			<a href="{{ event.url }}" target="_blank">{{ event.name }}</a>
		</header>
		<div class="Event-location">{{ event.location }}</div>
		<div class="Event-title">{{ event.title }}</div>
		<div class="Event-description">{{ event.description }}</div>
		<ul class="Sessions">
		{% for session in event.sessions %}
			<li class="Session">
				<div class="Session-name">{{ session.name }}</div>
				<ul class="Session-links">
					<li class="Session-link {% if session.slides == empty %}Session-link--unavailable{% endif %}"><a href="{{ session.slides }}" target="_blank">Slides</a></li>
					<li class="Session-link {% if session.video == empty %}Session-link--unavailable{% endif %}"><a href="{{ session.video }}" target="_blank">Video</a></li>
					<li class="Session-link {% if session.feedback == empty %}Session-link--unavailable{% endif %}"><a href="{{ session.feedback }}" target="_blank">Feedback</a></li>
				</ul>
			</li>
		{% endfor %}
		</ul>
	</li>
{% endfor %}
</ul>

<!--
* [Prototyping and Unit Testing](/talks/prototyping-unit-testing/builder)
* [Six Things Every jQuery Developer Should Know](/talks/six-things)
* [Introduction to Backbone.js](/talks/intro-to-backbonejs)
* [What is HTML5 and CSS3?](/talks/html5-and-css3)
* [Good JavaScript Habits](/talks/good-js-practices)
* [Fixing Common JavaScript Bugs](/talks/fixing-common-javascript-bugs)
* [Exterminating Common jQuery Bugs](/talks/find-jquery-bugs)
* [Angry Birds of JavaScript](/talks/angry-birds-javascript)
* [Extending Your jQuery App with AmplifyJS](/talks/amplifyjs)
* [Grunt-ify Your Front-End Development](/talks/gruntify-fed)
* [How to Pick Good JavaScript Libraries](/talks/good-js-libs)
-->
