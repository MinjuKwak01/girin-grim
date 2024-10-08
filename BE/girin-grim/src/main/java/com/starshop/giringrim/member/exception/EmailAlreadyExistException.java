package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class EmailAlreadyExistException extends RuntimeException{

    private final MemberErrorMessage errorMessage;

    public EmailAlreadyExistException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
