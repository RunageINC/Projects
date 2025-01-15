package com.runageinc.projektrobot.exceptions;

import java.util.List;

public class ProjektRobotException extends NoStackTraceException {

    private final static String EMPTY_MESSAGE = "";
    private final List<Error> errorList;

    protected ProjektRobotException(final String message, final List<Error> errorList) {
        super(message);
        this.errorList = errorList;
    }

    public static ProjektRobotException with(final Error error) {
        return new ProjektRobotException(error.message(), List.of(error));
    }

    public static ProjektRobotException with(final List<Error> error) {
        return new ProjektRobotException(EMPTY_MESSAGE, error);
    }

    public List<Error> getErrorList() {
        return errorList;
    }
}
