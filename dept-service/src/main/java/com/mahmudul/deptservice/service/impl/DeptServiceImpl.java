package com.mahmudul.deptservice.service.impl;

import com.google.common.collect.Lists;
import com.mahmudul.deptservice.dto.DeptDto;
import com.mahmudul.deptservice.service.DeptService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DeptServiceImpl implements DeptService {
    @Override
    public ArrayList<DeptDto> findDeptList() {
        return Lists.newArrayList(new DeptDto(1L, "ABCD", "Mahmudul", "2021-01-01", "Male", "01722625242", 2L));
    }

    @Override
    public DeptDto findDeptById(Long id) {
        return new DeptDto(id, "XYZ", "Romel", "1980-01-01", "Male", "01722625242", 2L);
    }

    @Override
    public void createDept(DeptDto deptDto) {
        System.out.println(deptDto.toString());
    }
}
