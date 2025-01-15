package com.runageinc.projektrobot.controller;

import com.runageinc.projektrobot.domain.player.Player;
import com.runageinc.projektrobot.domain.player.PlayerRegisterOrLogin;
import com.runageinc.projektrobot.domain.player.PlayerSession;
import com.runageinc.projektrobot.domain.player.PlayerSessionRead;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", implementationName = "PlayerMapperImpl")
public interface PlayerMapper {

    @Mapping(target = "id", ignore = true)
    Player toEntity(PlayerRegisterOrLogin playerRegisterOrLogin);

    @Mapping(target = "refreshToken", source = "session.refreshToken")
    @Mapping(target = "token", source = "token")
    @Mapping(target = "username", source = "session.player.username")
    @Mapping(target = "id", source = "session.player.id")
    PlayerSessionRead fromSessionEntity(PlayerSession session, String token);

}
