String.prototype.replaceAll = function (replaceThis, withThis) {
   var re = new RegExp(replaceThis,"g");
   return this.replace(re, withThis);
};

var profile = {
    /**
     * template = template html, variables = object to use in tag replacement
     */
    updateTemplate: function (template, variables) {
        Object.keys(variables).forEach(function(key) {
            if (typeof variables[key] === 'object') {
                template = profile.updateTemplate(template, variables[key]);
            } else {
                template = template.replaceAll("{{"+key+"}}", variables[key]);
            }
        });

        return template;
    },

    loadTemplates: function (user) {
        // avatar image
        profile.loadImage(user.global.avatar_url, 580, null, "#item-header-avatar");

        // // name/username
        $("div.five.columns h2").html(user.about.name);
        $(".user-nicename").html("@" + user.global.username);

        // last active time
        $("#last_active_ago").html("<i class='icon-time'></i> active " + user.last_active_ago + " ago");

        // Fill JS templates
        var templates = {
            "#template-profile-about-me": "about"
            // groups, members, replies
        };

        var aboutHtml = "";
        Object.keys(templates).forEach(function(key) {
            var template = $(key).html();
            var variables = Object.assign(user['global'], user[templates[key]]);

            aboutHtml += profile.updateTemplate(template, variables);
        });

        // // About Me
        $("#about-meTab .dl-horizontal:first").html(aboutHtml);

        profile.loadActivityStream(user);
    },

    loadActivityStream: function (user) {
        // Load activity stream
        var activities = user.activities;

        var activityHtml = "";

        for (i=0, len = activities.length; i < len; ++i) {
            if (i in activities) {

                // Render comments
                if (Array.isArray(activities[i]['comments']) && activities[i]['comments'].length > 0) {
                    activities[i]['has_comments'] = " has-comments";

                    var comment_template = $("#template-activity-stream-comment").html();
                    // var comments = Object.assign(user['global'], activities[i]['comments']);
                    var commentsHtml = profile.updateTemplate(comment_template, activities[i]['comments']);
                    activities[i]['comments'] = commentsHtml;
                } else {
                    activities[i]['comments'] = "<ul class='admin-only'><li>" + activities[i]['comments'] + "</li></ul>";
                }

                // Render activity list
                var template = $("#template-activity-stream").html();
                var variables = Object.assign(user['global'], activities[i]);
                activityHtml += profile.updateTemplate(template, variables);
            }
        }

        // Activity Stream
        $("#activity-stream").html(activityHtml)
    },

    loadImage: function (path, width, height, target) {
        $('<img src="'+ path +'">').load(function() {
          $(this).width(width).height(height).appendTo(target);
        });
    },

    loadUser: function (callback) {
        let params = (new URL(location)).searchParams;
        let userKey = params.get('user');

        if (!userKey || userKey == "random") {
            $.ajax({
              url: 'https://randomuser.me/api/',
              dataType: 'json',
              success: function(data) {
                console.log(data);
              }
            });
        } else {
            $.getJSON( "js/json/" + userKey + ".json", function(user) {
                callback(user);
            });
        }
    },
};