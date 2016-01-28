githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': 'f5d8766aa06f91034e17e902a2baaea6659b4d47'
        }
      });
    }
  };
}]);

githubUserSearch.factory('Repos', ['$http', function($http){
  return {
    query: function(url) {
      return $http({
        url: url,
        method: 'GET',
      });
    }
  };
}]);
