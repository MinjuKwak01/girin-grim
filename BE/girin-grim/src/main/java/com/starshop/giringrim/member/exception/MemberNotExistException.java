package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class MemberNotExistException extends RuntimeException {
    private final MemberErrorMessage errorMessage;

    public MemberNotExistException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
