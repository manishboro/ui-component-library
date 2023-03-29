
import React from 'react';
import ReviewReply from '.';

export default {
  title: 'Molecules/Review/ReviewsReply',
  component: ReviewReply,
};

const Template = (args) => <ReviewReply {...args} />;

export const ReviewsReply = Template.bind({});
ReviewsReply.args = {
  postedBy: "Admin Name",
  postedOn: "22 dec 2022",
  postComment: "Hi Vipra, Thanks for reaching out & sharing your thoughts with us. The duration of the game can vary. If you'll notice, you'll see that some games even end sooner! This wholly depends upon the outcomes that you come across when playing. We can assure you that this is completely random",
  show: true,
  close: () => { }
};
