package com.gc.automation.gccontroller.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "schedules")
public class Schedule {
    @Id
    @Column(name = "schedule_id")
    private
    String id;

    @Column(name = "schedule_name")
    private
    String name;

    @Column(name = "schedule_active")
    private
    boolean active;

    @Column(name = "schedule_cron")
    private
    String cronCommand;

    @Column(name = "schedule_duration")
    private
    int duration;


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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getCronCommand() {
        return cronCommand;
    }

    public void setCronCommand(String cronCommand) {
        this.cronCommand = cronCommand;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    @Override

    public String toString() {

        return "Schedule [id=" + getId() + ", name=" + getName()

                + ", active=" + isActive() + ", cron=" + getCronCommand()
                + ", duration=" + getDuration() + "]";

    }
}
