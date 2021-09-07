package com.mahmudul.deptservice.controller;

import com.mahmudul.deptservice.dto.DeptDto;
import com.mahmudul.deptservice.service.DeptService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dept")
@AllArgsConstructor
public class DeptController {

    private final DeptService deptService;

    @GetMapping
    public ResponseEntity<List<DeptDto>> getDeptList() {
        List<DeptDto> deptDtos = deptService.findDeptList();
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

    @PutMapping("/{id}")
    public ResponseEntity<String> updateDept(@RequestBody DeptDto deptDto, @PathVariable("id") Long id) {
        deptService.updateDept(deptDto, id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Dept updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDept(@PathVariable("id") Long id) {
        deptService.deleteDept(id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Dept deleted successfully");
    }
}
