'use strict';

eventsApp.controller('EventController', function ($scope) {

    $scope.sortorder = 'name';

    $scope.event = {
        name : 'Angular Boot Camp',
        date : '1/1/2013',
        time : '10:30 am',
        location : {
            address : 'Google Headquarters',
            city : 'Mountain View',
            province : 'CA'
        },
        imageUrl : 'img/angularjs-logo.png',
        sessions : [ {
            name : 'Directives Masterclass',
            creatorName : 'Bob Smith',
            duration : 1,
            level : 'Advanced',
            abstract : 'In this session you will learn the ins and outs of directives.',
            upVoteCount : 0
        }, {
            name : 'Scopes for fun and profit',
            creatorName : 'John Doe',
            duration : 2,
            level : 'Introductory',
            abstract : 'This session will take a closer look at scopes.',
            upVoteCount : 0
        }, {
            name : 'Well Behaved Controllers',
            creatorName : 'Jane Doe',
            duration : 4,
            level : 'Intermediate',
            abstract : 'This session will take a closer look at scopes.',
            upVoteCount : 0
        }

        ]

    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        }
    };

});