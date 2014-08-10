// posts_list.js manager


// var postsData = [
//   {
//     title: 'Introducing Telescope',
//     author: 'Sacha Greif',
//     url: 'http://sachagreif.com/introducing-telescope/'
//   },
//   {
//     title: 'Meteor',
//     author: 'Tom Coleman',
//     url: 'http://meteor.com'
//   },
//   {
//     title:'The Meteor Book',
//     author: 'Tom Coleman',
//     url: 'http://themeteorbook.com'
//   }
// ];

// basically sends postsData to postsList template as Posts
// Template.postsList.helpers({
//   posts: postsData
// });


//dont need other because we now have collections DB
Template.postsList.helpers({ 
  posts: function() {
    return Posts.find(); 
  }
});