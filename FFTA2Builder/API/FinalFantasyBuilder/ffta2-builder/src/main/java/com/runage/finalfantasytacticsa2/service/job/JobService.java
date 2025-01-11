package com.runage.finalfantasytacticsa2.service.job;

import com.runage.finalfantasytacticsa2.domain.character.Job;
import com.runage.finalfantasytacticsa2.repository.character.JobRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public Set<Job> getAllJobs() {
        return new HashSet<>(jobRepository.findAll());
    }

    public Job getById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }
}
