package com.runage.finalfantasytacticsa2.controller.character.job;

import com.runage.finalfantasytacticsa2.domain.character.dto.JobRead;
import com.runage.finalfantasytacticsa2.service.job.JobService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/jobs")
@AllArgsConstructor
@CrossOrigin("*")
public class JobController {

    private final JobService jobService;
    private final JobMapper jobMapper;

    @GetMapping
    public ResponseEntity<Set<JobRead>> getAll() {
        final var jobEntities = jobService.getAllJobs();

        final var mappedJobs = jobMapper.fromEntityToSet(jobEntities);

        return ResponseEntity.ok(mappedJobs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobRead> getById(@PathVariable Long id) {
        final var jobEntity = jobService.getById(id);

        if (jobEntity == null) {
            return ResponseEntity.notFound().build();
        }

        final var mappedJob = jobMapper.fromEntity(jobEntity);

        return ResponseEntity.ok(mappedJob);
    }
}
