

import React from 'react';
import EmSidebar from '.';

export default {
    title: 'Organisms/EmSidebars',
    component: EmSidebar,

};

const Template = (args) => <EmSidebar {...args} />;

export const EmSidebars = Template.bind({});
EmSidebars.args = {
    // sideBarList: [
    //     { title: "Scheduled Message", icon: "/images/icons/clock-b.svg", href: "" },
    //     { title: "Calls", icon: "/images/icons/call.svg", href: "" },
    //     { title: "Voice Mails", icon: "/images/icons/voice.svg", href: "" },
    //     { title: "Contacts", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Surveys", icon: "/images/icons/clock.svg", href: "" },
    //     {
    //         title: "Forms", icon: "/images/icons/clock.svg", href: "",
    //         subMenu: [
    //             { title: "Reviews", icon: "/images/icons/clock.svg", href: "" },
    //             { title: "Review Invites", icon: "/images/icons/clock.svg", href: "" }
    //         ],
    //     },
    //     { title: "Reputation", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Text Campaigns", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Email Campaigns", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Calender", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Settings", icon: "/images/icons/clock.svg", href: "" },
    //     { title: "Support", icon: "/images/icons/clock.svg", href: "" },
    // ]
};
