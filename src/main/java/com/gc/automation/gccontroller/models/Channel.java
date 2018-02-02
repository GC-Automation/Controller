package com.gc.automation.gccontroller.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "channels")
public class Channel {
    @Id
    @Column(name = "channel_id")
    private
    String id;

    @Column(name = "channel_name")
    private
    String name;

    @Column(name = "unit_id")
    private
    String unitId;

    @Column(name = "schedule_id")
    private
    String scheduleId;

    @Column(name = "channel_number")
    private
    int channelNumber;

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

    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    public String getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
    }

    public int getChannelNumber() {
        return channelNumber;
    }

    public void setChannelNumber(int channelNumber) {
        this.channelNumber = channelNumber;
    }

    @Override

    public String toString() {

        return "Schedule [id=" + getId() + ", name=" + getName()

                + ", unitId=" + getUnitId() + ", scheduleId=" + getScheduleId()
                + ", channelNumber=" + getChannelNumber() + "]";
    }
}
