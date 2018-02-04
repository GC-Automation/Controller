package com.gc.automation.gccontroller.repositories;

import com.gc.automation.gccontroller.models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ChannelRepository extends JpaRepository<Channel, Integer> {
    @Query("select channel from Channel channel where channel.id=:channelid")
    Channel findById(@Param("channelid") String channelId);

    List<Channel> findByUnitId(@Param("unitid") String unitId);

    List<Channel> findByUnitIdAndChannelNumber(@Param("unitid") String unitId, @Param("channelnum") String channelNum);

    List<Channel> findByScheduleId(@Param("scheduleid") String scheduleId);
}