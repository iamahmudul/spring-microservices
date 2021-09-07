package com.mahmudul.deptservice.repository;

import com.mahmudul.deptservice.model.Dept;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeptRepository extends JpaRepository<Dept, Long> {
}
