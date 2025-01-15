package com.runageinc.projektrobot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SpringSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        final var httpFilter = http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> {
                    authorize
                            .requestMatchers("/public/**").permitAll()
                            .requestMatchers("/api/player/**").permitAll()
                            .anyRequest().permitAll();
                })
                .build();

        return httpFilter;
    }
}
