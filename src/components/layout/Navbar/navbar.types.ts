import React from "react";

export type MenuItem = {
  id: number;
  type: "MenuItem" | "MenuList";
  label: string;
  url?: string;
  children:
    | (Omit<MenuItem, "children" | "type"> & {
        description?: string | React.ReactNode;
      })[]
    | [];
};

export type MenuListData = (Omit<MenuItem, "children" | "type"> & {
  description?: string | React.ReactNode;
})[];

export type NavMenu = MenuItem[];
