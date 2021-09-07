package com.mahmudul.deptservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DeptDto {
    private Long id;
    private String code;
    private String name;
    private String dob;
    private String gender;
    private String mobile;
    private Long deptId;
}
