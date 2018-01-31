package com.gc.automation.gccontroller.models;

import java.sql.Time;

public class Day {
    private String name;
    private boolean isActive;
    private final String id;
    private Time fromTime;
    private Time toTime;

    Day(String scheduleid, String name, boolean isActive, Time fromTime, Time toTime) {
        this.setName(name);
        id = scheduleid + "-" + name;
        this.setActive(isActive);
        this.setFromTime(fromTime);
        this.setToTime(toTime);
    }

    Day(String scheduleid, String name) {
        id = scheduleid + "-" + name;
    }

    Day(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Time getFromTime() {
        return fromTime;
    }

    public void setFromTime(Time fromTime) {
        this.fromTime = fromTime;
    }

    public Time getToTime() {
        return toTime;
    }

    public void setToTime(Time toTime) {
        this.toTime = toTime;
    }

    public String getId() {
        return id;
    }
}
