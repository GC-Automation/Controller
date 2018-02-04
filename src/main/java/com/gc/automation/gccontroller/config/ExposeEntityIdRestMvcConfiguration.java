package com.gc.automation.gccontroller.config;

import com.gc.automation.gccontroller.models.Channel;
import com.gc.automation.gccontroller.models.Schedule;
import com.gc.automation.gccontroller.models.Unit;
import com.gc.automation.gccontroller.models.User;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

@Component
public class ExposeEntityIdRestMvcConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Channel.class);
        config.exposeIdsFor(Schedule.class);
        config.exposeIdsFor(Unit.class);
        config.exposeIdsFor(User.class);
    }
}
