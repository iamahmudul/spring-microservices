package com.mahmudul.empservice.repository;

import com.mahmudul.empservice.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpRepository extends JpaRepository<Emp, Long> {
}
