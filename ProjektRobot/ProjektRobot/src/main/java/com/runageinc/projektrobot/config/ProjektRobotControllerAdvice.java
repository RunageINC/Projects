package com.runageinc.projektrobot.config;

import com.runageinc.projektrobot.domain.ErrorResponse;
import com.runageinc.projektrobot.exceptions.ProjektRobotException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ProjektRobotControllerAdvice {

    @ExceptionHandler(ProjektRobotException.class)
    protected ResponseEntity<ErrorResponse> handleSingleProjektRobotException(ProjektRobotException projektRobotException) {
        final var singleError = projektRobotException.getErrorList().get(0);
        final var errorResponse = new ErrorResponse(singleError.status().value(), singleError.message());

        return new ResponseEntity<>(errorResponse, singleError.status());
    }
}
