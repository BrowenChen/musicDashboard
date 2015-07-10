import Ember from 'ember';
import d3 from 'bower_components/d3/d3';

export default Ember.Component.extend({
	classNames: "dashboard-d3",
	chart: d3.charts.bubble().emptyMessage("No "),

	draw: function() {
		console.log("Test");
		d3.select(this.get['element'])
		.call(this.get('chart'));
	}
});
