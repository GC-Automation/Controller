package com.gc.automation.gccontroller.models;

import java.util.ArrayList;

public class Schedules {
    private String id;
    private String name;
    private ArrayList<Day> days;
    private ArrayList<Channel> channels;

    //Create a new Schedule
    Schedules(String name, ArrayList<Day> days, ArrayList<Channel> channels) {
        this.setName(name);
        this.setDays(days);
        this.setChannels(channels);
    }

    //Load Schedule from DB
    Schedules(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Day> getDays() {
        return days;
    }

    public void setDays(ArrayList<Day> days) {
        this.days = days;
    }

    public ArrayList<Channel> getChannels() {
        return channels;
    }

    public void setChannels(ArrayList<Channel> channels) {
        this.channels = channels;
    }

    public void addChannel(Channel channel) {
        this.channels.add(channel);
    }

    public boolean removeChannel(Channel channel) {
        return channels.remove(channel);
    }

    public void disableDay(String day) {
        for (int i = 0; i < days.size(); i++) {
            if (days.get(i).getName() == day) {
                days.get(i).setActive(false);
            }
        }

    }

    public void enableDay(String day) {
        for (int i = 0; i < days.size(); i++) {
            if (days.get(i).getName() == day) {
                days.get(i).setActive(true);
            }
        }

    }

    public String getId() {
        return id;
    }
}
