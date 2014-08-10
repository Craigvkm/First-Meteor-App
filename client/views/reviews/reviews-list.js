var reviewsData = [
  {
    username: "Jake",
    comment: "Hey guys thanks for the help",
    rating: 5
  },
  {
    username: "Chris",
    comment: "I was not impressed by this buisness",
    rating: 1
  },
  {
    username: "Tony",
    comment: "You guys were ok, a little slow for my taste",
    rating: 3
  }

];

Template.customerReviews.helpers({
  review: reviewsData
});