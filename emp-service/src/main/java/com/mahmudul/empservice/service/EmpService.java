package com.mahmudul.empservice.service;

import com.mahmudul.empservice.dto.EmpDto;

import java.util.ArrayList;

public interface EmpService {
    ArrayList<EmpDto> findEmpList();

    EmpDto findEmpById(Long id);

    void createEmp(EmpDto empDto);
}
