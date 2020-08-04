var getRandomActivities = function() {
    var url = `https://www.boredapi.com/api/activity`
    
    $.ajax(url)
	.done(function( data ) {

		var text = `activity: ${data.activity}<br></br>
                    type: ${data.type}<br></br>
                    participants: ${data.participants}<br></br>
                    price: $ ${data.price}<br></br>
                    link: ${data.link}<br></br>
                    key: ${data.key}<br></br>
                    accessibility: ${data.accessibility}`
                                        
        $("#data").html(text);
    });

};

$("#search").click(function(){
    //get link the api function to dispaly the random activities
    getRandomActivities();
});