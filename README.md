# Angular-statusapp
The application "statusapp" is based on a statuslist with a list of items that can be expand and contract. 
	- The application "statusapp" is based on a statuslist with a list of items that can be expand and contract. 
	- The data for the statuslist comes from a jSON file named as "statuslist.json" located at "/Code/app/assets/json" directory
	- Each statuslist item consisting of data about the Changelist Name / build Id, Owner Name, Time Started, State & Stream Status
	- Upon expanding the List Heading, a detailed view appears for each list item.
	- The statuslist item detail view consisting of 5 containers and first 4 containers each showing the data of Functional Test, Metrics, Build & Unit Test respectively.
	- The 5th container in statuslist item detail view shows the final result of the list item.
	- Upon clicking first 4 container boxes, each shows a modal box with detailed data related to the list item fetched from the jSon data provided.
	
=> This application is developed using AngularJS (1.5.11)
=> The application's module is injected with dependencies for ngRoute, ngAnimate, ui.bootstrap, custom controller, custom service and custom directives


Run the Application
========================

The application is preconfigured with a simple development web server. The simplest way to start this server is:

	-> Open Command prompt(windows) or Terminal (Mac)
	-> Go to the Code directory
	-> Type "npm start" (without quotes)
	

Run the Unit Test
========================

The application is preconfigured with unit tests. These are written in Jasmine, which can be run with the Karma test runner. 

    -> The configuration is found at "Code/app/assets/js/test/karma.conf.js".
    -> The unit tests are at "Code/app/assets/js/test/unit/"
	
	-> The easiest way to run the unit tests is to use:
		--> Open Command prompt(windows) or Terminal (Mac)
		--> Go to "Code/app/assets/js/test/" directory
		--> Type "karma start karma.conf" (without quotes)


