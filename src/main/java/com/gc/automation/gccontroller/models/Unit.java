package com.gc.automation.gccontroller.models;

import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Unit {
    private String id;
    private String name;
    private ArrayList<Channel> channels;

    @Autowired
    DataSource dataSource;

    //New Units
    Unit(String id, String name, ArrayList<Channel> channels) {
        this.setId(id);
        this.setName(name);
        this.setChannels(channels);
    }

    //Load Unit From DB
    Unit(String id) {
        this.setId(id);
    }

    void saveToDB() throws SQLException {
        Connection con = dataSource.getConnection();
        Statement statement = con.createStatement();
        statement.execute("");
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Channel> getChannels() {
        return channels;
    }

    public void setChannels(ArrayList<Channel> channels) {
        this.channels = channels;
    }
}
