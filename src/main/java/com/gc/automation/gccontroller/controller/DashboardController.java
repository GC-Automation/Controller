package com.gc.automation.gccontroller.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {
    // Here you set your context
    @RequestMapping("/dashboard")
    public String dashboard() {
        System.out.println("Dashboard");
        //return "dashboard";
        return "dashboard";
    }
    @RequestMapping("/")
    public String home() {
        System.out.println("Index");
        //return "dashboard";
        return "index";
    }
    @RequestMapping("/login")
    public String login() {
        System.out.println("Login");
        //return "dashboard";
        return "auth";
    }
    @RequestMapping("/register")
    public String register() {
        System.out.println("Register");
        //return "dashboard";
        return "reg";
    }
    @RequestMapping("/error/404")
    public String error404() {
        System.out.println("Error 404");
        //return "dashboard";
        return "error404";
    }
}
