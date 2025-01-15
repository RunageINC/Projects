package com.runageinc.projektrobot.exceptions;

import org.springframework.http.HttpStatus;

public record Error(String message, HttpStatus status) {
}
