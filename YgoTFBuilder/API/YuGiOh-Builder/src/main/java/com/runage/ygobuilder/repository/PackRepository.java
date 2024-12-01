package com.runage.ygobuilder.repository;

import com.runage.ygobuilder.entity.Pack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PackRepository extends JpaRepository<Pack, Long> {

    Optional<List<Pack>> findByNameContaining(String name);
}
