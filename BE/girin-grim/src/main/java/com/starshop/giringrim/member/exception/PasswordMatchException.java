package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class PasswordMatchException extends RuntimeException{
    private final MemberErrorMessage errorMessage;

    public PasswordMatchException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
