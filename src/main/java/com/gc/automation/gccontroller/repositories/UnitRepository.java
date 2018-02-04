package com.gc.automation.gccontroller.repositories;

import com.gc.automation.gccontroller.models.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface UnitRepository extends JpaRepository<Unit, Integer> {


    Unit findById(@Param("unitid") String channelId);
}