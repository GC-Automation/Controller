package com.gc.automation.gccontroller.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {
    // Here you set your context

    @RequestMapping("/")
    public String home() {
        System.out.println("Index");

        return "index";
    }
    @RequestMapping("/login")
    public String login() {
        System.out.println("Login");

        return "auth";
    }
    @RequestMapping("/register")
    public String register() {
        System.out.println("Register");

        return "reg";
    }
    @RequestMapping("/error/404")
    public String error404() {
        System.out.println("Error 404");

        return "error404";
    }
}
