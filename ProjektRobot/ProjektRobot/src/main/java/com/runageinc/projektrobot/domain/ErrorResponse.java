package com.runageinc.projektrobot.domain;

public record ErrorResponse(
        int status,
        String body
) {
}
