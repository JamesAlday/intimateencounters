String.prototype.replaceAll = function (replaceThis, withThis) {
   var re = new RegExp(replaceThis,"g");
   return this.replace(re, withThis);
};

$(document).ready ( function() {
    var users = {
        "CableSnake69": {
            "global": {
                "username": "CableSnake69",
                "avatar_url": "./sweetdate/images/5a202fc80dacc-bpfull.jpg",
            },
            "about":{
                "name": "David Eugenson",
                "birthday": "1992-01-01",
                "city":"New York",
                "state":"NY",
                "iso_sex1": "Man",
                "iso_sex2": "Woman",
                "marital_status": "Single",
            },
            
            "last_active_ago": "2 weeks",
           
            "activities": [
                {
                    "action": " changed their profile picture ",
                    "time_since": "2 months",
                    "has_comments": "",
                    "comments": "",
                },
                {
                    "action": "‘s profile was updated ",
                    "time_since": "2 months",
                    "has_comments": "",
                    "comments": [
                        {
                            "avatar_url": "./sweetdate/images/5a7842a119a6d-bpthumb.jpg",
                            "username": "anonymous",
                            "time_ago": "a week ago"
                        }
                    ],
                },
            ]
        }
    };

    /**
     * template = template html, variables = object to use in tag replacement
     */
    function updateTemplate(template, variables) {
        Object.keys(variables).forEach(function(key) {
            if (typeof variables[key] === 'object') {
                template = updateTemplate(template, variables[key]);
            } else {
                template = template.replaceAll("{{"+key+"}}", variables[key]);
            }
        });

        return template;
    }

    function loadTemplates() {
        // Pick user from data array
        let params = (new URL(location)).searchParams;
        let userKey = params.get('user');
        let user = users[userKey] || users["CableSnake69"];

        // avatar image
        loadImage(user.global.avatar_url, 580, null, "#item-header-avatar")

        // name/username
        $("div.five.columns h2").html(user.about.name);
        $("user-nicename").html("@" + user.global.username);

        // last active time
        $("#last_active_ago").html("<i class='icon-time'></i> active " + user.last_active_ago + " ago");

        // Fill JS templates
        var templates = {
            "#template-profile-about-me": "about"
        };

        var aboutHtml = "";
        Object.keys(templates).forEach(function(key) {
            var template = $(key).html();
            var variables = Object.assign(user['global'], user[templates[key]]);

            aboutHtml += updateTemplate(template, variables);
        });

        // About Me
        $("#about-meTab .dl-horizontal:first").html(aboutHtml);

        loadActivityStream(user);
    }

    function loadActivityStream(user) {
        // Load activity stream
        var activities = user.activities;

        var activityHtml = "";

        for (i=0, len = activities.length; i < len; ++i) {
            if (i in activities) {

                // Render comments
                if (activities[i]['comments'].length > 0) {
                    activities[i]['has_comments'] = " has-comments";

                    var comment_template = $("#template-activity-stream-comment").html();
                    // var comments = Object.assign(user['global'], activities[i]['comments']);
                    var commentsHtml = updateTemplate(comment_template, activities[i]['comments']);
                    activities[i]['comments'] = commentsHtml;
                }

                // Render activity list
                var template = $("#template-activity-stream").html();
                var variables = Object.assign(user['global'], activities[i]);
                activityHtml += updateTemplate(template, variables);
            }
        }

        // Activity Stream
        $("#activity-stream").html(activityHtml)
    }

    // Does the thing with the stuff
    loadTemplates();

    function loadImage(path, width, height, target) {
        $('<img src="'+ path +'">').load(function() {
          $(this).width(width).height(height).appendTo(target);
        });
    }
});