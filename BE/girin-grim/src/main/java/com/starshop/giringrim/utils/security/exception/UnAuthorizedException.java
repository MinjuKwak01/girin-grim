package com.starshop.giringrim.utils.security.exception;

import com.starshop.giringrim.utils.exception.SecurityErrorMessage;
import lombok.Getter;

@Getter
public class UnAuthorizedException extends RuntimeException{
    private final SecurityErrorMessage errorMessage;

    public UnAuthorizedException(SecurityErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
