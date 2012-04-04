---

# Prototyping and Unit Testing 
## Using Mockjax, mockJSON, & Amplify

---

# Who Am I?

Elijah Manor

* [appendTo, LLC](http://appendTo.com) 
* Microsoft ASP.NET MVP & ASPInsider
* [elijah.manor@gmail.com](mailto:elijah.manor@gmail.com)
* [http://twitter.com/elijahmanor](http://twitter.com/elijahmanor) 
* [http://elijahmanor.com](http://elijahmanor.com)

---

# Front-end Challenge #1

The front-end and back-end of your application inevitably progress at different speeds. In order for each layer to develop independently it is optimal if the front-end developer can work regardless of the status of the back-end.

---

# Mockjax to the Rescue!

![figure](http://dl.dropbox.com/u/200135/talks/images/batman.jpg "batman")

---

# Mockjax jQuery Plugin

The [`mockjax` plugin](http://github.com/appendto/jquery-mockjax) is a development and testing tool for *intercepting* and *simulating ajax requests* made with jQuery with a minimal impact on changes to production code.

Once the developer has determined the envelope structure of the data returning from an service, then you can start the process of mocking.

---

# Mockjax: Define the Url

	//Full url to resource
	$.mockjax({
		url: "/url/to/rest-service"
	});
{: .javascript }

	//Contain an "*" as a wildcard
	$.mockjax({
		// Matches /data/quote, /data/tweet etc.
		url: "/data/*"
	});
{: .javascript }

	//Use a full regular expression
	$.mockjax({
		// Matches /data/quote, /data/tweet but not /data/quotes
		url: /^\/data\/(quote|tweet)$/i
	});
{: .javascript }

---

# Mockjax: Define Response

	//A simple text response
	$.mockjax({ url: "/restful/api", responseText: "Hello World!" });
{: .javascript }

	//A simple JSON response
	$.mockjax({
		url: "/restful/api",
		contentType: "text/json",
		responseText: { firstName: "John", lastName: "Doe" } 
	});
{: .javascript }

	//A simple XML response
	$.mockjax({
		url: "/restful/api",
		responseXML: "<document><quote>Hello world!</quote></document>" // Need xmlDOM plugin
	});
{: .javascript }

---

# Mockjax: Define Response++

	// Using a proxy
	$.mockjax({
		url: "/restful/api",
		proxy: "/mocks/data.json"
	});
{: .javascript }

	// Using a callback
	$.mockjax({
		url: "/restful/api",
		response: function() {
			this.responseText = "Hello world!";
		}
	});
{: .javascript }

---

# Mockjax: Advanced Techniques

	// Simulating Response Time & Latency
	$.mockjax({
		url: "/restful/api",
		responseTime: 750, // Simulate a network latency of 750ms
		responseText: "A text response from the server"
	});
{: .javascript }

	// Simulating HTTP Response Statuses 
	$.mockjax({
		url: "/restful/api",
		status: 500, // Server 500 error occurred
		responseTime: 750,
		responseText: "A text response from the server"
	});
{: .javascript }

---

# Mockjax: Global Settings

	$.mockjaxSettings = {
		status:        200,
		responseTime:  500,
		isTimeout:     false,
		contentType:   "text/plain",
		response:      "", 
		responseText:  "",
		responseXML:   "",
		proxy:         "",
		lastModified:  null,
		etag:          ""
	};
{: .javascript }

---

# Mockjax: Example Usage

	$.mockjax({
		url: "/Contact/Details/*",
		contentType: "text/json",
		dataType: "json",
		responseTime: 750,
		responseText: {
			firstName: "John",
			lastName: "Doe"
		}
	});
{: .javascript }

	$.getJSON( "/Contact/Details/5", function( data ) {
		alert( data );
	});
{: .javascript }

---

# Unit Testing with Mockjax

	module("Contact Manager", {
		setup: function() {
			$.mockjax({
				url: "/Contact/List",
				responseText: [ { fullName: "John Doe" }, { fullName: "Jane Smith" } ]
			});
		},
		teardown: function() {
			$.mockjaxClear();
		}
	});

	asyncTest("Get Contacts", function() {
		$.getJSON("/Contact/List", function(result) {
			equal(result.length, 2);
			start();
		});
	});
{: .javascript }

http://jsfiddle.net/elijahmanor/bP4Lv/

---

# Front-End Challenge #2

Now that we have a technique to mock the data, it can become very tedious to manually provide extensive mock data so that you can flush out your User Interface. 

---

# MockJSON to the Rescue! 

![figure](http://dl.dropbox.com/u/200135/talks/images/robin.jpg "robin")

---

# MockJSON jQuery Plugin

`mockJSON` has a valuable templating mechnaism that lets you *quickly build up complex set of objects* that can be used to quickly prototype your User Interface.
  
---

# MockJSON Template API

	// Numbers
	{ "age|0-99" : 0 } // { "age" : 42 }
{: .javascript }

	// Boolean
	{ "married|0-1" : true } // { "married": false }
{: .javascript }

	// Strings
	{ "name" : "@LAST_NAME, @MALE_FIRST_NAME" } // { "name" : "Hall, Kevin" }
	{ "initials|1-5" : "@LETTER_UPPER." } // { "initials": "V.M.J." }
{: .javascript }


	// Arrays
	{ "contacts|0-3" : [
		{ "Name" : "@FEMALE_FIRST_NAME" } ] 
	} // { "contacts": [{ Name: "Laura" }, { Name: "Ruth" }] }
{: .javascript }

---

# MockJSON Template API++

	// Adding the @US_STATE keyword
	$.mockJSON.data.US_STATE = [
		"Alabama", "Alaska", ... , "Wisconsin", "Wyoming"
	];
	{ "state" : "@US_STATE" } // { "state": "Alaska" }
{: .javascript }

---

# MockJSON Template Syntax

	$.mockJSON.generateFromTemplate({
		"contacts|2-4": [{
			"firstName": "@MALE_FIRST_NAME",
			"lastName": "@LAST_NAME",
			"city": "@CITY_NAME",
			"state": "@STATE_ABBREVIATION"
		}]
	});
{: .javascript }

![mockJSON](http://dl.dropbox.com/u/200135/talks/images/mockJSONOutput.png "mockJSON")
{: .rightCenter }

---

# Mockjax & MockJSON Power!

![figure](http://dl.dropbox.com/u/200135/talks/images/batman-robin.jpg "batman-robin")

---
				
# Mockjax and MockJSON Syntax

	$.mockjax({
		url: "/service/datasource-remote.php",
		contentType: "text/json"
		dataType: "json",
		responseTime: 750,
		responseText: $.mockJSON.generateFromTemplate({
			"contacts|50-500": [{
				"firstName": "@MALE_FIRST_NAME",
				"lastName": "@LAST_NAME",
				"street" : "@LOREM",
				"city": "@CITY_NAME",
				"state": "@STATE_ABBREVIATION",
			}]
		})	
	});
{: .javascript}

---

# Front-End Challenge #3

Although we are mocking and testing, our code is still tightly coupled a specific ajax definition specified in the `$.ajax` method. 

As your application grows you will find that it is important to abstract the various pieces of your implementation to help you easily extend the functionality and make it less painful to maintain.

---
				
# Amplify to the Rescue!

![figure](http://dl.dropbox.com/u/200135/talks/images/spiderman-action.jpg "spiderman")

---

# Amplify Request Component

The `amplify.request` component sets out to make data retrieval more maintainable. It does this by *separating the definition of a request from the actual request of the data*.

The goal of `amplify.request` is to *abstract* the layer of implementation from the actual request and response so that you can minimize code changes to your project.

---
 
# Amplify Request Define API

	// Define a Request
	amplify.request.define( string resourceId, string requestType [, hash settings ] ) 
{: .javascript}

* resourceId: Identifier string for the resource
* requestType: Type of data retrieval method from the server. 
* settings (optional): Set of key/value pairs 
	* Any settings found in jQuery.ajax()
	* cache: Different caching algorithms (boolean, number, string)
	* decoder: Parse an ajax response before calling success or error callback 
---

# Amplify Request Define

	amplify.request.define( "getContactDetails", "ajax", {
		//Amplify will replace {id} with data passed to it
		url: "/Contact/Details/{id}", 
		dataType: "json",
		type: "GET", 
		//Response will be cached for 15 seconds
		cache: 15000     
	});
{: .javascript }

---

# Amplify Request Simplified API

	// Simplified Request
	amplify.request( string resourceId [, hash data [, function callback ]] )

* resourceId: Identifier string for the resource
* data (optional): an object literal of data to be sent to the resource
* callback (optional): a function to call once the resource has been retrieved
{: .javascript }

	amplify.request( "getContactDetails", 
		{ id: 4 }, // Resolve URL to "/Contact/Details/4"
		function( data ) {
			console.log( data );
		});
{: .javascript }

---

# Amplify Request Hash API

	// Request with Hash Settings
	amplify.request( hash settings )
{: .javascript }

* settings
	* resourceId: Identifier string for the resource
	* data (optional): Data associated with the request
	* success (optional): Function to invoke on success
	* error (optional): Function to invoke on error

	amplify.request({ 
		resourceId: "getContactDetails",
		data: { id: 4 }, // Resolve URL to "/Contact/Details/4"
		success: function( data ) { console.log( data ) },
		error: function( message, level ) { console.log( level + ": " + message ) }
	});
{: .javascript }

---

# Demo 
## Contact Manager Appliation

---

# Pick Your Own Adventure

![figure](http://dl.dropbox.com/u/200135/talks/images/superheros.jpg "superheros")

---

# Questions? 

*Referenced Scripts*

* Mockjax - [http://bit.ly/mockjax](http://bit.ly/mockjax)  
* mockJSON - [http://bit.ly/mockjson](http://bit.ly/mockjson)  
* Amplify - [http://bit.ly/amplifyjs](http://bit.ly/amplifyjs)  

*Speaker Rate*

* [http://speakerrate.com/elijahmanor](http://speakerrate.com/elijahmanor)

*Contact Information*

* [elijah.manor@gmail.com](mailto:elijah.manor@gmail.com)
* [http://twitter.com/elijahmanor](http://twitter.com/elijahmanor) 
* [http://elijahmanor.com](http://elijahmanor.com)

