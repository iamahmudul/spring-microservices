package com.mahmudul.deptservice.service.impl;

import com.mahmudul.deptservice.dto.DeptDto;
import com.mahmudul.deptservice.exception.DeptException;
import com.mahmudul.deptservice.model.Dept;
import com.mahmudul.deptservice.repository.DeptRepository;
import com.mahmudul.deptservice.service.DeptService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DeptServiceImpl implements DeptService {

    private final DeptRepository deptRepository;

    @Override
    public List<DeptDto> findDeptList() {
        List<Dept> depts = deptRepository.findAll();
        List<DeptDto> dtoList = depts.stream()
                .map(dept -> mapEmpToDto(dept))
                .collect(Collectors.toList());
        return dtoList;
    }

    @Override
    public DeptDto findDeptById(Long id) {
        Optional<Dept> dept = deptRepository.findById(id);
        dept.orElseThrow(() -> new DeptException("Dept not found"));
        DeptDto deptDto = mapEmpToDto(dept.get());
        return deptDto;
    }

    @Override
    @Transactional
    public void createDept(DeptDto deptDto) {
        Dept dept = mapDtoToDept(deptDto);
        deptRepository.save(dept);
    }

    @Override
    public void updateDept(DeptDto deptDto, Long id) {
        Optional<Dept> deptOptional = deptRepository.findById(id);
        deptOptional.orElseThrow(() -> new DeptException("Dept not found"));
        Dept dept = deptOptional.get();
        dept.setName(deptDto.getName());
        dept.setActive(deptDto.isActive());
        deptRepository.save(dept);
    }

    @Override
    public void deleteDept(Long id) {
        Optional<Dept> deptOptional = deptRepository.findById(id);
        deptOptional.orElseThrow(() -> new DeptException("Dept not found"));
        deptRepository.delete(deptOptional.get());
    }

    private DeptDto mapEmpToDto(Dept dept) {
        return DeptDto.builder()
                .id(dept.getId())
                .name(dept.getName())
                .active(dept.isActive())
                .build();
    }

    private Dept mapDtoToDept(DeptDto deptDto) {
        return Dept.builder()
                .id(deptDto.getId())
                .name(deptDto.getName())
                .active(deptDto.isActive())
                .build();
    }
}
