 // tab selection and displaying
        $("#widget #nav li").click(function () {
            var index = $("#widget #nav li").index(this);

            $("#widget #nav li").removeClass("selected");
            $(this).addClass("selected");
            var content = $("#widget div.main").addClass("hidden").get(index);
            $(content).removeClass("hidden");
        });
        // quickstats time selections
        $("#timetabs ul li").click(function () {
            var index = $("#timetabs ul li").index(this);

            $("#timetabs ul li").removeClass("selected");
            $(this).addClass("selected");
            var content = $("#timecontent div.content").addClass("hidden").get(index);
            $(content).removeClass("hidden");
        });
    });