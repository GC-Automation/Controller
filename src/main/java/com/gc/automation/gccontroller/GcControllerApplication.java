package com.gc.automation.gccontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class GcControllerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GcControllerApplication.class, args);
	}

	@Autowired
	JdbcTemplate jdbcTemplate;
}
