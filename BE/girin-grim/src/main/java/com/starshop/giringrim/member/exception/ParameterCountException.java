package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class ParameterCountException extends RuntimeException {
    private final MemberErrorMessage errorMessage;

    public ParameterCountException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
