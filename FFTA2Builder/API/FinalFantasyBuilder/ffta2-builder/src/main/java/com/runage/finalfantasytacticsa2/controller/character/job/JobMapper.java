package com.runage.finalfantasytacticsa2.controller.character.job;

import com.runage.finalfantasytacticsa2.domain.character.Job;
import com.runage.finalfantasytacticsa2.domain.character.dto.JobRead;
import com.runage.finalfantasytacticsa2.domain.character.dto.JobSimpleRead;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.Set;

@Mapper(componentModel = "spring", implementationName = "JobMapperImpl")
public interface JobMapper {

    @Named("mapJobEntity")
    @Mapping(target = "foundInRace", source = "raceId")
    JobRead fromEntity(Job job);

    @Named("mapJobSimple")
    JobSimpleRead fromEntityToSimpleRead(Job job);

    @IterableMapping(qualifiedByName = "mapJobEntity")
    Set<JobRead> fromEntityToSet(Set<Job> jobs);
}
