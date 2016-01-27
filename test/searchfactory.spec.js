describe('factory: Search', function() {
  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search){
    search = Search;
  }));

  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .expectGET("https://api.github.com/search/users?access_token=f5d8766aa06f91034e17e902a2baaea6659b4d47&q=hello")
    .respond(
      { items: items }
    );
  }));

  var items = [
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
  ];


  it('returns search results', function() {
    search.query('hello')
      .then(function(response){
        expect(response.data.items).toEqual(items);
      });
      httpBackend.flush();
  });

  it ('responds to query', function() {
      expect(search.query).toBeDefined();
  });
});
