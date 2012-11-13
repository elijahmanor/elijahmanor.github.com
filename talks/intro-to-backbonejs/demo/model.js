$(document).ready(function($) {
    $("#search").on("click", function(e) {
        var $zip = $("#zip"),
            value = $zip.val();

        e.preventDefault();        
        if ( value ) { 
            $.ajax({
                url: "http://api.wunderground.com/api/7eaec3b21b154448/conditions/q/" + $zip.val() + ".json",
                dataType: "jsonp",
                success: function(data) {
                    var observation = data.current_observation,
                        location = observation.display_location,
                        image = observation.image,
                        $row = $("<tr></tr>"),
                        $output = $("#output");
                    
                    $(".alert").fadeOut("slow");
                    $row.append("<td><img src='" + observation.icon_url + "' /></td>");
                    $row.append($("<td></td>", { text: location.city  }));
                    $row.append($("<td></td>", { text: location.state_name }));
                    $row.append($("<td></td>", { text: location.zip}));
                    $row.append($("<td></td>", { text: observation.temp_f + "°F" }));
                    $row.append($('<td><a href="#"><i class="icon-trash"></i></a></td>').on("click", function(e) {
                        e.preventDefault();
                        $(this).closest("tr").remove(); 
                        if (!$output.find("tbody tr").length) {
                            $output.fadeOut("slow");
                        }                                
                    }));
                    
                    $output.find("tbody").append($row);
                    $output.fadeIn("show");
                    $("#zip").val("");
                }
            });
        } else {
            $( ".alert" ).text("Please enter a zip code").fadeIn("slow");           
        }
    });
});
