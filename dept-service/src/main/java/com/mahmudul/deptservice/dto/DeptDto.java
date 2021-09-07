package com.mahmudul.deptservice.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class DeptDto {
    private Long id;
    private String name;
    private boolean active;
}
