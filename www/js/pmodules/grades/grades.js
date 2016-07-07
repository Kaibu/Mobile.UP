define(['jquery', 'underscore', 'backbone', 'utils', 'Session', 'pmodules/grades/grades.common'], function($, _, Backbone, utils, Session, grades){
	var rendertmpl = _.partial(utils.rendertmpl, _, "js/pmodules/grades");

	var GradesView = Backbone.View.extend({

		events: {
			"click .grades-tabs": "tabClick"
		},

		initialize: function() {
			this.template = rendertmpl("gradeList");
			this.moduleTemplate = rendertmpl("gradeList.module");
			this.listenTo(this.model, "sync", this.render);
		},

		tabClick: function(ev) {
			ev.preventDefault();
			return false;
		},

		render: function() {
			this.$el.empty();
			this.$el.append(this.template({
				data: this.model.toJSON(),
				moduleTemplate: this.moduleTemplate
			}));
			this.$el.trigger("create");
		}
	});

	var GradeAveragesView = Backbone.View.extend({

		initialize: function() {
			this.template = rendertmpl("gradeAverages");
			this.listenTo(this.model, "sync", this.render);
		},

		render: function() {
			var averages = undefined;
			if (this.model.get("averageGrade") && this.model.get("lps")) {
				averages = {grade: this.model.get("averageGrade"), lps: this.model.get("lps")};
			}

			this.$el.empty();
			this.$el.append(this.template({averages: averages}));
			this.$el.trigger("create");
		}
	});

	app.views.GradesPage = Backbone.View.extend({

		attributes: {"id": "grades"},

		initialize: function(){
			this.template = rendertmpl('grades');
			this.listenToOnce(this, "render", this.prepareGrade);

			this.grades = new grades.Grades();
			this.listenTo(this.grades, "error", this.requestFail);
		},

		requestFail: function(error) {
			var errorPage = new utils.ErrorView({el: '#gradesHost', msg: 'Zurzeit nicht verfügbar.', module: 'grades', err: error});
		},

		prepareGrade: function() {
			new GradesView({model: this.grades, el: this.$("#gradesTable")});
			new GradeAveragesView({model: this.grades, el: this.$("#averageData")});
			new utils.LoadingView({model: this.grades, el: this.$("#loadingSpinner")});

			this.grades.fetch(utils.cacheDefaults());
		},

		render: function(){
			$(this.el).html(this.template({}));
			$(this.el).trigger("create");
			this.trigger("render");
			return this;
		}
	});

	return app.views.GradesPage;
});