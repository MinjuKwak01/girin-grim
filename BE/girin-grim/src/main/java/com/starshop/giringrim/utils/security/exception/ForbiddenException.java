package com.starshop.giringrim.utils.security.exception;

import com.starshop.giringrim.utils.exception.SecurityErrorMessage;
import lombok.Getter;

@Getter
public class ForbiddenException extends RuntimeException{
    private final SecurityErrorMessage errorMessage;

    public ForbiddenException(SecurityErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
