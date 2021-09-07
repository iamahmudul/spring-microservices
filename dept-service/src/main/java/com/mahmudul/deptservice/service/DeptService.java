package com.mahmudul.deptservice.service;

import com.mahmudul.deptservice.dto.DeptDto;

import java.util.ArrayList;

public interface DeptService {
    ArrayList<DeptDto> findDeptList();

    DeptDto findDeptById(Long id);

    void createDept(DeptDto deptDto);
}
