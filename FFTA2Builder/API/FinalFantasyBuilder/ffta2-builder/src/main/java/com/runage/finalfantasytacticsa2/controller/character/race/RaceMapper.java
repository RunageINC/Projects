package com.runage.finalfantasytacticsa2.controller.character.race;

import com.runage.finalfantasytacticsa2.domain.character.Race;
import com.runage.finalfantasytacticsa2.domain.character.Job;
import com.runage.finalfantasytacticsa2.domain.character.dto.JobSimpleRead;
import com.runage.finalfantasytacticsa2.domain.character.dto.RaceRead;
import com.runage.finalfantasytacticsa2.domain.character.dto.RaceSimpleRead;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.Set;

@Mapper(componentModel = "spring", implementationName = "RaceMapperImpl")
public interface RaceMapper {

    @Mapping(target = "isFlying", source = "flying")
    @Mapping(target = "jobsResume", source = "jobs")
    RaceRead fromEntity(Race race);

    @Mapping(target = "isFlying", source = "flying")
    @Named("mapRaceSimple")
    RaceSimpleRead fromEntityToSimpleRead(Race race);

    @IterableMapping(qualifiedByName = "mapRaceSimple")
    Set<RaceSimpleRead> fromEntityToSimpleReadSet(Set<Race> races);

    @Named("mapJobSimple")
    JobSimpleRead fromEntityJob(Job job);
}
