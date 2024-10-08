package com.starshop.giringrim.member.exception;

import lombok.Getter;

@Getter
public class UniversitySelectionException extends RuntimeException{

    private final MemberErrorMessage errorMessage;

    public UniversitySelectionException(MemberErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
