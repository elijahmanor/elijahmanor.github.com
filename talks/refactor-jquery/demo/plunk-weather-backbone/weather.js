window.Forecast = Backbone.Model.extend({
    url: function() {
        return "http://api.wunderground.com/api/7eaec3b21b154448/conditions/q/" + this.get("zip") + ".json";
    },
    parse : function( data, xhr ) {
        var observation = data.current_observation;
        return {
            id: observation.display_location.zip,
            url: observation.icon_url,
            state: observation.display_location.state_name,
            zip: observation.display_location.zip,
            city: observation.display_location.city,
            temperature: observation.temp_f,
            wind: observation.wind_mph,
            feelslike: observation.feelslike_f,
            image: observation.image.url
        };
    },
    sync: function(method, model, options){
        options.dataType = "jsonp";
        return Backbone.sync(method, model, options);
    },
    validate: function (options) {
        if (!options.zip) {
           return "Please enter a zip code";
        }
    }
});

window.Forecasts = Backbone.Collection.extend({
    model: Forecast
});

window.SearchView = Backbone.View.extend({
    events: {
        "click #search": "addZip"
    },
    initialize: function() {
        this.collection.on("add", this.clear, this);
    },
    addZip: function(e) {
        e.preventDefault();

        this.model = new Forecast();
        this.model.on("invalid", this.toggleError, this);

        if (this.model.set({zip: this.$("#zip").val()}, {validate:true})) {
            this.collection.add( this.model );
            this.toggleError();
        }
    },
    clear: function() {
        this.$("#zip").val("");
    },
    toggleError: function(model, error) {
        this.$(".alert").text(error).toggle(!!error);
    }
});

var ForecastView = Backbone.View.extend({
    events: {
        "click .delete": "destroy"
    },
    initialize: function() {
        this.collection.on("add", this.render, this);
        this.collection.on("remove", this.remove, this);
    },
    render: function(model) {
        var view = new ForecastItemView({id: model.get("zip"), model: model});
        this.$("tbody").append(view.el).closest("table").fadeIn("slow");
        return this;
    },
    remove: function(model) {
        $( "#" + model.get("zip") ).remove();
        if ( !this.collection.length ) {
            this.$el.fadeOut("slow");
        }
    },
    destroy: function(e) {
        var id = $(e.currentTarget).closest("tr").attr("id"),
            model = this.collection.get(id);

        this.collection.remove(model);
    }
});

var ForecastItemView = Backbone.View.extend({
    tagName: "tr",
    template: _.template($("#forcast-template").html()),

    initialize: function() {
        _.bindAll(this, "render");
        this.model.fetch({success: this.render});
    },
    render: function(model) {
        var content = this.template(model.toJSON());
        this.$el.html(content);
        return this;
    }
});

var ForecastDetailView = Backbone.View.extend({
    tagName: "div",
    template: _.template($("#forecast-detail-template").html()),
    initialize: function() {
        _.bindAll(this, "render");
    },
    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
});

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "detail/:id": "showDetail"
  },
  home: function() {
    $("#detailView").hide();
    $("#homeView").fadeIn();
  },
  showDetail: function(id) {
    var model = window.forecasts.get(id),
        view = new ForecastDetailView({model: model});

    $("#homeView").hide();
    $("#detailView").html(view.render().el).fadeIn();
  }
});

var router = new Router();

$( document ).on( "click", "a.route", function( e ) {
  e.preventDefault();
  router.navigate( $(this).attr("href"), { trigger: true } );
});

$(document).ready(function() {
    Backbone.history.start();

    window.forecasts = new Forecasts();

    window.searchView = new SearchView({
        el: $("#weather"),
        collection: forecasts
    });

    window.forcastView = new ForecastView({
        el: $("#output"),
        collection: forecasts
    });
});