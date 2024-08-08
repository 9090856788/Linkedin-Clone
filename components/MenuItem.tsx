import {
  Bell,
  BriefcaseBusiness,
  Home,
  MessageCircleMore,
  Users,
} from "lucide-react";
import React from "react";

interface NavItem {
  src: string;
  icon: JSX.Element;
  text: string;
}

const NavItem: NavItem[] = [
  {
    src: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/network",
    icon: <Users />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "Job",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Message",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notification",
  },
];

const MenuItem = () => {
  return (
    <div className="flex gap-5">
      {NavItem &&
        NavItem.map((item) => (
          <a
            href={item.src}
            key={item.text}
            className="flex flex-col items-center gap-1 px-2 py-2 hover:text-grey-600"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
    </div>
  );
};

export default MenuItem;
