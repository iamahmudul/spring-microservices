package com.mahmudul.gatewayservice.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationRouteConfig {

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder routeLocatorBuilder) {
        return routeLocatorBuilder
                .routes()
//                .route(r -> r
//                        .path("/get/**")
//                        .filters(f -> f.addRequestHeader("Hello", "World"))
//                        .uri("http://httpbin.org:80")
//                )
//                .route(r -> r.path("/users/**")
//                        .filters(f -> f.addRequestHeader("Hello", "World"))
//                        .uri("https://api.github.com")
//                )
                .route(r -> r.path("/api/v1/dept/**")
                        .uri("http://localhost:8070")
                )
                .route(r -> r.path("/api/v1/emp/**")
                        .uri("http://localhost:8071")
                )
                .build();
    }
}
