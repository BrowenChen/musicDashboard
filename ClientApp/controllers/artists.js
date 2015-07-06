import Ember from 'ember';

export default Ember.Controller.extend({
	firstName: "Owen",
	musicGenre: "Fusion",
	actions: {
		createLog: function(){
			alert("Hey, you just created a log");
		},
		login: function(){
			// alert("Logging in ");
			var log = {
				"name": "Owen Chen",
				"info": this.get("details"),
				"duration": this.get("duration"),
				"weakness": this.get("weakness")
			};

			// Ember.$.get('http://localhost:3000/api/artists', function(data) {
			//   console.log(data);
			// });

			Ember.$.ajax("http://localhost:3000/api/artists", {
				type: 'POST',
				dataType: 'json',
				contentType:"application/json; charset=utf-8",
				data: JSON.stringify({"artist": log}),
				success: function(data, response) {
					console.log(data);
					console.log(data, response);
				},
				error: function (err) {
					console.log("error" + err);
				}
			}).then(function(){
				console.log("success");
				window.location.reload();
			});

		}
	}
});
