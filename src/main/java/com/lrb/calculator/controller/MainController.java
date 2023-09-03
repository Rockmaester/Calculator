package com.lrb.calculator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("")
    public String showGreetings(){
        return "greetings";
    }

    @GetMapping("/calcPage")
    public String showCalc(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "calc";
    }
}
