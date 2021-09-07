package com.mahmudul.empservice.service.impl;

import com.google.common.collect.Lists;
import com.mahmudul.empservice.dto.EmpDto;
import com.mahmudul.empservice.service.EmpService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EmpServiceImpl implements EmpService {
    @Override
    public ArrayList<EmpDto> findEmpList() {
        return Lists.newArrayList(new EmpDto(1L, "Bd National Company", true));
    }

    @Override
    public EmpDto findEmpById(Long id) {
        return new EmpDto(id, "Abahoni", true);
    }

    @Override
    public void createEmp(EmpDto empDto) {
        System.out.println(empDto.toString());
    }
}
