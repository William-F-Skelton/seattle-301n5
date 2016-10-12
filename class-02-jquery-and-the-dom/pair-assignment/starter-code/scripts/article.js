'use strict';

var articles = [];

function Article (opts) {
  // TODID: Use the js object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`
	this.author = opts.author; //
	this.title = opts.title; //
	this.category = opts.category; //
	this.authorUrl = opts.authorUrl; //
	this.publishedOn = opts.publishedOn; //
	this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

  /* TODID: Now use jQuery to fill in the rest of the current
  template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */
	var $newTitle = $('#articles').find('h1').html();
	$newTitle.text(this.title);

	var $newAuthor = $('#articles').find('a').html();
	$newAuthor.text(this.author);
	$newAuthor.attr('href', this.authorUrl);

	var $newPubDate = $('#articles').find('time').html();
	$newPubDate.text(this.publishedOn);
	$newPubDate.attr('pubdate datetime', this.publishedOn);

	var $artBody = $('.article-body').html();
	$('.article-body').append('<p></p>');
	$('p').html().text(this.body);


// Display the date as a relative number of 'days ago'
var $new
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');

  /* TODID: This cloned article is no longer a template,
  as it now has real data attached to it! We need to account
  for that before this current article gets rendered to our
  DOM. */

	$newArticle.removeClass('.template');
  return $newArticle;
};

rawData.sort(function(firstElement, secondElement) {
  return (new Date(secondElement.publishedOn)) - (new Date(firstElement.publishedOn));
});

rawData.forEach(function(theCurrentArticleObject) {
  articles.push(new Article(theCurrentArticleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
