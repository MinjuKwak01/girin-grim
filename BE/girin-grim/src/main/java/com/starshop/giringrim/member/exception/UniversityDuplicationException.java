package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class UniversityDuplicationException extends RuntimeException{

    private final MemberErrorMessage errorMessage;

    public UniversityDuplicationException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
