package com.gc.automation.gccontroller.models;

public class Channel {
    String id;
    String name;
    String unitid;

    Channel(String unitid, String channel, String name) {
        id = unitid + "-" + channel;
        this.name = name;

    }

    //Load from DB using unitID and Channel Nr
    Channel(String unitid, String channel) {
        id = unitid + "-" + channel;
    }

    //Load from DB using id
    Channel(String id) {
        this.id = id;
    }
}
