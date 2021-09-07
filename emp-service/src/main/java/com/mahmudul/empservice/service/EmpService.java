package com.mahmudul.empservice.service;

import com.mahmudul.empservice.dto.EmpDto;

import java.util.ArrayList;
import java.util.List;

public interface EmpService {
    List<EmpDto> findEmpList();

    EmpDto findEmpById(Long id);

    void createEmp(EmpDto empDto);

    void updateEmp(EmpDto empDto, Long id);

    void deleteEmp(Long id);
}
