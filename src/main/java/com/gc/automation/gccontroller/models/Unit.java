package com.gc.automation.gccontroller.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "units")
public class Unit {
    @Id
    @Column(name = "unit_id")
    private
    String id;

    @Column(name = "unit_name")
    private
    String name;

    @Column(name = "channel_size")
    private
    String channelSize;


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

    public String getChannelSize() {
        return channelSize;
    }

    public void setChannelSize(String channelSize) {
        this.channelSize = channelSize;
    }

    @Override

    public String toString() {

        return "Unit [id=" + id + ", unitName=" + name

                + ", channelSize=" + channelSize + "]";

    }
}
