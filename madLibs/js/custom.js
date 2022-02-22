$(document).ready(function(){
    $("#lib-button").click(function(){
        
            let noun = $("#noun").val();
            let adj = $("#adjective").val();
            let person = $("#person").val();

            $("#story").append(person + " really likes " + adj + " " + noun + ".");
        
    });

    // var makeMadLib = {
    //     noun: ,
    //     adj: ,
    //     person: ,
    // }

});