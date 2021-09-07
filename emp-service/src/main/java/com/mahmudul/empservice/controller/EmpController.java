package com.mahmudul.empservice.controller;

import com.google.common.collect.Lists;
import com.mahmudul.empservice.dto.EmpDto;
import com.mahmudul.empservice.service.EmpService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/emp")
@AllArgsConstructor
public class EmpController {

    private final EmpService empService;

    @GetMapping
    public ResponseEntity<ArrayList<EmpDto>> getEmpList() {
        ArrayList<EmpDto> empDtos = empService.findEmpList();
        return ResponseEntity.status(HttpStatus.OK).body(empDtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmpDto> getEmp(@PathVariable("id") Long id) {
        EmpDto empDto = empService.findEmpById(id);
        return ResponseEntity.status(HttpStatus.OK).body(empDto);
    }

    @PostMapping
    public ResponseEntity<String> createEmp(@RequestBody EmpDto empDto) {
        empService.createEmp(empDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Emp created successfully");
    }
}
