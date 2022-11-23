import { UserClass } from "../Classes/User_class";
import { pins } from "./pins";

export const users = [
    new UserClass("yuramcpecs@gmail.com", "be"),
    new UserClass("ivanzvonarpivo@gmail.com", "e"),
    new UserClass("yurkig@gmail.com", "b")
];

users[0].pins = pins.slice(0, 15);
users[1].pins = pins.slice(15, 30);
users[2].pins = pins.slice(30);