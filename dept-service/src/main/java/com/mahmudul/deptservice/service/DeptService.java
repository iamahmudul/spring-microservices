package com.mahmudul.deptservice.service;

import com.mahmudul.deptservice.dto.DeptDto;

import java.util.List;

public interface DeptService {
    List<DeptDto> findDeptList();

    DeptDto findDeptById(Long id);

    void createDept(DeptDto deptDto);

    void updateDept(DeptDto deptDto, Long id);

    void deleteDept(Long id);
}
