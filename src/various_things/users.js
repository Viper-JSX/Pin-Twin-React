import { UserClass } from "../Classes/User_class";
import { pins } from "./pins";

export const users = [
    new UserClass("yuramcpecs@gmail.com", "counterstrike"),
    new UserClass("ivanzvonarpivo@gmail.com", "counterstrike2008"),
    new UserClass("yurkig@gmail.com", "worldfreelancer")
];

users[0].pins = pins.slice(0, 15);
users[1].pins = pins.slice(15, 30);
users[2].pins = pins.slice(30);