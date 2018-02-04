package com.gc.automation.gccontroller.repositories;

import com.gc.automation.gccontroller.models.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

    List<Schedule> findById(@Param("scheduleid") String channelId);

    List<Schedule> findByActiveTrue(@Param("activetrue") boolean scheduleActiveTrue);


}