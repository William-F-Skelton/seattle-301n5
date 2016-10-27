'use strict';

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODID: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
      type: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).done(function(data) {
      console.log(data);
      data.filter(function(ele) {
        console.log(ele.owner.login === 'william-f-skelton');
        return ele.owner.login === 'william-f-skelton';
      }).forEach(function(repo) {
        console.log(output);
        var output = '<h2>' + repo.name + '</h2>' +
        '<p>' + repo.description + '</p>';
        $('#repos').append(output);
        console.log(`===============`);
      })
    });

  };
  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
