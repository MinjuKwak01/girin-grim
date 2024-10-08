package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class NicknameAlreadyExistException extends RuntimeException {

    private final MemberErrorMessage errorMessage;

    public NicknameAlreadyExistException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
