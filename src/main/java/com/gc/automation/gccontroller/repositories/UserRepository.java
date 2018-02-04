package com.gc.automation.gccontroller.repositories;

import com.gc.automation.gccontroller.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(@Param("username") String username);

    List<User> findByRole(@Param("role") String userRole);
}
