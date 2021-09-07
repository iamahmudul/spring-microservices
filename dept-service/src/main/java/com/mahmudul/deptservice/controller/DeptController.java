package com.mahmudul.deptservice.controller;

import com.google.common.collect.Lists;
import com.mahmudul.deptservice.dto.DeptDto;
import com.mahmudul.deptservice.service.DeptService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/dept")
@AllArgsConstructor
public class DeptController {

    private final DeptService deptService;

    @GetMapping
    public ResponseEntity<ArrayList<DeptDto>> getDeptList() {
        ArrayList<DeptDto> deptDtos = deptService.findDeptList();
        return ResponseEntity.status(HttpStatus.OK).body(deptDtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DeptDto> getDept(@PathVariable("id") Long id) {
        DeptDto deptDto = deptService.findDeptById(id);
        return ResponseEntity.status(HttpStatus.OK).body(deptDto);
    }

    @PostMapping
    public ResponseEntity<String> createDept(@RequestBody DeptDto deptDto) {
        deptService.createDept(deptDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Dept created successfully");
    }
}
