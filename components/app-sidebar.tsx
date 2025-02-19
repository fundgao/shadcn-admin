"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Gift,
  Command,
  Aperture,
  GalleryVerticalEnd,
  Dog,
  PieChart,
  Settings,
  Users,
  NotepadText,
  BadgeJapaneseYen,
  SquareTerminal,
  Github,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Goldoge",
    email: "fund@goldoge.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "首页概况",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "产品管理",
      url: "#",
      icon: Gift,
      items: [
        {
          title: "产品列表",
          url: "#",
        },
        {
          title: "产品分类",
          url: "#",
        },
        {
          title: "产品属性",
          url: "#",
        },
        {
          title: "产品服务",
          url: "#",
        },
        {
          title: "产品评论",
          url: "#",
        },
      ],
    },
    {
      title: "订单管理",
      url: "#",
      icon: NotepadText,
      items: [
        {
          title: "订单管理",
          url: "#",
        },
        {
          title: "售后服务",
          url: "#",
        },
        {
          title: "核销服务",
          url: "#",
        },
      ],
    },
    {
      title: "财务管理",
      url: "#",
      icon: BadgeJapaneseYen,
      items: [
        {
          title: "财务概况",
          url: "#",
        },
        {
          title: "提现管理",
          url: "#",
        },
        {
          title: "发票管理",
          url: "#",
        },
        {
          title: "资金记录",
          url: "#",
        },
        {
          title: "佣金记录",
          url: "#",
        },
      ],
    },
    {
      title: "会员管理",
      url: "#",
      icon: Users,
      items: [
        {
          title: "会员管理",
          url: "#",
        },
        {
          title: "会员分组",
          url: "#",
        },
        {
          title: "会员等级",
          url: "#",
        },
        {
          title: "会员标签",
          url: "#",
        },
      ],
    },
    {
      title: "公司管理",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "公司介绍",
          url: "#",
        },
        {
          title: "代理介绍",
          url: "#",
        },
        {
          title: "产品介绍",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "系统设置",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "用户管理",
          url: "#",
        },
        {
          title: "角色管理",
          url: "#",
        },
        {
          title: "操作日志",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "金狗科技",
      url: "https://goldog.netlify.app",
      icon: Dog,
    },
    {
      name: "FundOS",
      url: "https://ai16z.netlify.app",
      icon: Aperture,
    },
    {
      name: "Github",
      url: "https://github.com/fundgao",
      icon: Github,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
