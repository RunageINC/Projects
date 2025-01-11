package com.runage.finalfantasytacticsa2.domain;

import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = false)
@MappedSuperclass
public class JpaEntity {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;
}
