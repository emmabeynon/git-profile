describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));
  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});

describe('when searching for a user', function(){
  beforeEach(module('GitUserSearch'));
  var ctrl;
  var fakeUserInfo;
  var scope;

  // stubbing factory
  beforeEach(function(){
    module(function ($provide) {
      fakeUserInfo = jasmine.createSpyObj('fakeUserInfo', ['query']); // creates a fake object
      $provide.factory('Search', function() { // $provide overrides the existing 'Search' factory
        return fakeUserInfo;
      });
    });
  });

  beforeEach(inject(function ($q, $rootScope) {
    scope = $rootScope;
    fakeUserInfo.query.and.returnValue($q.when(items)); // returns a promise - when it resolves, it returns 'items'
  }));

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  var items = { 'data': [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    },
  ]};


  it('displays search results', function(){
    ctrl.searchTerm = 'hello';
    ctrl.doSearch();
    scope.$apply();
    expect(ctrl.searchResult).toEqual(items.data);
  });
});

// $scope.apply - runs digest cycle, resolves promises. needed because these functions aren't happening on a web page
