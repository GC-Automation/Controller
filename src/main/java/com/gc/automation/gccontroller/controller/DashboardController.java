package com.gc.automation.gccontroller.controller;

import com.gc.automation.gccontroller.models.Unit;
import com.gc.automation.gccontroller.newUnits;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.xml.ws.Response;

@Controller
public class DashboardController {
    // Here you set your context

    @RequestMapping("/dashboard")
    public String home() {
        System.out.println("Dashboard");

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
//@RequestMapping(value = "/newunits",method = RequestMethod.GET)
//    public void listnewUnits(){
//
//    newUnits.start();
//
//}


}
