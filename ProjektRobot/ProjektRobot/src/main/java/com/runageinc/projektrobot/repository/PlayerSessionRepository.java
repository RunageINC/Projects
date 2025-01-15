package com.runageinc.projektrobot.repository;

import com.runageinc.projektrobot.domain.player.PlayerSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerSessionRepository extends JpaRepository<PlayerSession, Long> {
}
