package com.runage.ygobuilder.service;

import com.runage.ygobuilder.entity.Pack;
import com.runage.ygobuilder.repository.PackRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class PackService {

    private final PackRepository packRepository;

    public List<Pack> findAll() {
        return packRepository.findAll();
    }
}
