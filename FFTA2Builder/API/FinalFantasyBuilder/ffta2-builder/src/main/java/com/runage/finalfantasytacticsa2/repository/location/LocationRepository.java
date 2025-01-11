package com.runage.finalfantasytacticsa2.repository.location;

import com.runage.finalfantasytacticsa2.domain.location.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
