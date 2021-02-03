---
layout: page
title: Home
permalink: /
order: 0
image: /assets/images/helena.png
---


<div>

	<div class="centered">
		<div class="big less-padding"><span class=""><span class="accent-color extra-big">{{ site.title }}</span></span>Lab</div>
		<div class="lighter"> {{ site.subtitle }} </div>
	</div>

	<div>

	<div class="sub-sub-title">
	@ UC Berkeley EECS <img class="berkeley-logo" src="/assets/images/berkeley-mini.png">
	</div>


	<div class="header">
	Research Themes
	</div>

		{% for theme in site.themes %}
		<div class="focus">
			<div class="focus-head">{{ theme.title }}</div>
			<div class="focus-description">
				{{ theme.description }}
			</div>
		</div>
		{% endfor %}

	</div>

	<div class="header">
	People
	</div>

	<div class="people">
		{% assign rolesSorted = site.people | group_by: 'roleindex' | sort: 'name'  %}
		{% for role in rolesSorted %}
			{% assign people = role.items | sort: "last" %}
			{% for person in people %}
				<a href="{{ person.website }}" target="_blank">
					<div class="person">
						<div class="person-img-container">
							<div class="square" style="background-image:url({{ person.img }}"></div>
						</div>
						<div class="person-name">{{ person.first | append: " " | append: person.last }}</div>
						<div class="person-role">
							{{ person.role }}
						</div>
					</div>
				</a>
			{% endfor %}
		{% endfor %}

	</div>


	<div class="header">
	Projects
	</div>

	<div class="projects">
		{% assign displayOrderSorted = site.projects | sort: 'displayorder'  %}
		{% for project in displayOrderSorted %}
			{% if project.website %}
				<a href="{{ person.website }}" target="_blank">
			{% endif %}
				<div class="project">
					<div class="project-img-container">
						<div class="rect" style="background-image:url({{ project.img }}"></div>
					</div>
					<div class="project-name">{{ project.name }}</div>
					<div class="project-desc">
						{{ project.desc }}
					</div>
				</div>
			
			{% if project.website %}
				</a>
			{% endif %}
		{% endfor %}

	</div>



</div>