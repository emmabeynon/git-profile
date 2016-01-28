githubUserSearch.controller('GitUserSearchController', ['Search', 'Repos', function(Search, Repos) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;

      });
    // Repos.query(user)
    //   .then(function(response) {
    //     self.reposResult = response.data;
    // });
  };
}]);
