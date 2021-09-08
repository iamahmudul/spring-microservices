package com.mahmudul.empservice.service.impl;

import com.google.common.collect.Lists;
import com.mahmudul.empservice.dto.EmpDto;
import com.mahmudul.empservice.exception.EmpException;
import com.mahmudul.empservice.model.Emp;
import com.mahmudul.empservice.repository.EmpRepository;
import com.mahmudul.empservice.service.EmpService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmpServiceImpl implements EmpService {
    private final EmpRepository empRepository;

    @Override
    public List<EmpDto> findEmpList() {
        List<Emp> emps = empRepository.findAll();
        List<EmpDto> dtoList = emps.stream()
                .map(dept -> mapEmpToDto(dept))
                .collect(Collectors.toList());
        return dtoList;
    }

    @Override
    public EmpDto findEmpById(Long id) {
        Optional<Emp> emp = empRepository.findById(id);
        emp.orElseThrow(() -> new EmpException("Emp not found"));
        EmpDto empDto = mapEmpToDto(emp.get());
        return empDto;
    }

    @Override
    @Transactional
    public void createEmp(EmpDto empDto) {
        Emp dept = mapDtoToDept(empDto);
        empRepository.save(dept);
    }

    @Override
    @Transactional
    public void updateEmp(EmpDto empDto, Long id) {
        Optional<Emp> empOptional = empRepository.findById(id);
        empOptional.orElseThrow(() -> new EmpException("Emp not found"));
        Emp emp = empOptional.get();
        emp.setCode(empDto.getCode());
        emp.setName(empDto.getName());
        emp.setDob(empDto.getDob());
        emp.setGender(empDto.getGender());
        emp.setDeptId(empDto.getDeptId());
        empRepository.save(emp);
    }

    @Override
    @Transactional
    public void deleteEmp(Long id) {
        Optional<Emp> empOptional = empRepository.findById(id);
        empOptional.orElseThrow(() -> new EmpException("Dept not found"));
        empRepository.delete(empOptional.get());
    }

    private EmpDto mapEmpToDto(Emp emp) {
        return EmpDto.builder()
                .id(emp.getId())
                .code(emp.getCode())
                .name(emp.getName())
                .dob(emp.getDob())
                .gender(emp.getGender())
                .mobile(emp.getMobile())
                .deptId(emp.getDeptId())
                .build();
    }

    private Emp mapDtoToDept(EmpDto empDto) {
        return Emp.builder()
                .id(empDto.getId())
                .code(empDto.getCode())
                .name(empDto.getName())
                .dob(empDto.getDob())
                .gender(empDto.getGender())
                .mobile(empDto.getMobile())
                .deptId(empDto.getDeptId())
                .build();
    }
}
