package com.mahmudul.empservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Calendar;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmpDto {
    private Long id;
    private String code;
    private String name;
    private Calendar dob;
    private String gender;
    private String mobile;
    private Long deptId;
}
