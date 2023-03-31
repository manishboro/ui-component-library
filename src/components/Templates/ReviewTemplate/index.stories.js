import React from 'react';
import ReviewTemplate from '.';

export default {
  title: 'Templates/ReviewTemplates',
  component: ReviewTemplate,
};

const Template = args => <ReviewTemplate {...args} />;

export const ReviewTemplates = Template.bind({});
ReviewTemplates.args = {
  breadcrumbs: [{ name: 'Application', path: '/Application' }, { name: 'Reviews' }],
  yearDropdownOptions: [
    'March 2020 - February 2021',
    'March 2021 - February 2022',
    'March 2022 - February 2023',
  ],
  yearHandleChange: () => { },
  totalReview: {
    iconSrc: '/images/icons/edit.svg',
    iconAlt: 'Reviews',
    heading: 'Total Reviews',
    value: 150,
  },

  averageRating: {
    iconSrc: '/images/icons/favorite.svg',
    iconAlt: 'Reviews',
    heading: 'Average Rating',
    value: 4,
  },

  reviewRatings: [
    {
      numberOfStar: 5,
      value: 70,
    },
    {
      numberOfStar: 4,
      value: 12,
    },
    {
      numberOfStar: 3,
      value: 10,
    },
    {
      numberOfStar: 2,
      value: 6,
    },
    {
      numberOfStar: 1,
      value: 2,
    },
  ],

  fbRecommendation: {
    iconSrc: '/images/icons/recommendations.svg',
    iconAlt: 'Facebook',
    heading: 'Facebook Recommendations',
    value: 30,
  },

  ratingOptions: [
    '5 Star',
    '4 Star',
    '3 Star',
    '2 Star',
    '1 Star',
  ],
  ratingHandleChange: () => { },
  platformOptions: [
    "Google",
    "Yahoo",
    "Facebook",
    "Glassdoor",
  ],
  platformHandleChange: () => { },
  sortByOptions: [
    'label1',
    'label2',
    'label3',
  ],
  searchOnChange: () => { },
  reviews: [
    {
      reviewerName: 'Thomas Edison',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Toronto ,Canada',
      rating: 4,
      review:
        "I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs",
      numOfReply: 2,
    },
    {
      reviewerName: 'Ruben Baptista',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Gulu, Uganda',
      rating: 3,
      review: 'When I generate one dummy text it returns only one line. I wish that I can choose many text instead of one line.',
      numOfReply: 2,
    },
    {
      reviewerName: 'Carter Schleifer',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Delhi ,India',
      rating: 5,
      review:
        'I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert (generate) Make it easier (submenu under alt+insert) to choose style. And remember: The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert I love this plugin.',
    },
    {
      reviewerName: 'Ruben Baptista',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Karachi ,Pakistan',
      rating: 1,
      review: 'When I generate one dummy text it returns only one line. I wish .',
    },
    {
      reviewerName: 'Thomas Edison',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Toronto ,Canada',
      rating: 4,
      review:
        "I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs",
      numOfReply: 2,
    },
    {
      reviewerName: 'Ruben Baptista',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Gulu, Uganda',
      rating: 3,
      review: 'When I generate one dummy text it returns only one line. I wish that I can choose many text instead of one line.',
      numOfReply: 2,
    },
    {
      reviewerName: 'Carter Schleifer',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Delhi ,India',
      rating: 5,
      review:
        'I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert (generate) Make it easier (submenu under alt+insert) to choose style. And remember: The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert I love this plugin.',
    },
    {
      reviewerName: 'Ruben Baptista',
      reviewerImg: '/images/profile-1.jpg',
      companyIcon: '/images/icons/google.svg',
      companyName: 'google',
      postedAt: 'Dec 22 , 2022',
      location: 'Karachi ,Pakistan',
      rating: 1,
      review: 'When I generate one dummy text it returns only one line. I wish .',
    },
  ],
  postedBy: "Admin Name",
  postedOn: "Posted on 22 dec 2022",
  postComment: "Hi Vipra, Thanks for reaching out & sharing your thoughts with us. The duration of the game can vary. If you'll notice, you'll see that some games even end sooner! This wholly depends upon the outcomes that you come across when playing. We can assure you that this is completely random",
  onPost: () => { }
};
