//adds 3 reviews when none are found
if (Reviews.find().count() === 0) {
  Reviews.insert({
    username: "Jake",
    comment: "Hey guys thanks for the help",
    rating: 5
  });

  Reviews.insert({
    username: "Chris",
    comment: "I was not impressed by this buisness",
    rating: 1
  });

  Reviews.insert({
    username: "Tony",
    comment: "You guys were ok, a little slow for my taste",
    rating: 3
  });
}

//adds 3 posts when no posts are found
if (Posts.find().count() === 0) { 
  Posts.insert({
      title: 'Introducing Telescope',
      author: 'Sacha Greif',
      url: 'http://sachagreif.com/introducing-telescope/'
  });
    Posts.insert({
      title: 'Meteor',
      author: 'Tom Coleman',
      url: 'http://meteor.com'
  });
    Posts.insert({
      title: 'The Meteor Book',
      author: 'Tom Coleman',
      url: 'http://themeteorbook.com'
  }); 
}

