package com.gc.automation.gccontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@ComponentScan
@EnableJpaRepositories
@Import(RepositoryRestMvcConfiguration.class)
@EnableAutoConfiguration
@SpringBootApplication
public class GcControllerApplication {

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dm = new DriverManagerDataSource("jdbc:derby:droplet", "gcadmin", "59*skull#95");

		Properties properties = new Properties();
		properties.setProperty("create", "true");
		dm.setConnectionProperties(properties);
		dm.setSchema("GCADMIN");
		dm.setDriverClassName("org.apache.derby.jdbc.EmbeddedDriver");

		return dm;
	}

	public static void main(String[] args) {

		SpringApplication.run(GcControllerApplication.class, args);
		newUnits.run();
	}

//	@Autowired
//	JdbcTemplate jdbcTemplate;


}
