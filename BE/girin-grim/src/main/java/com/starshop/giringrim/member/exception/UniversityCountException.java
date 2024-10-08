package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class UniversityCountException extends RuntimeException{
    private final MemberErrorMessage errorMessage;

    public UniversityCountException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
