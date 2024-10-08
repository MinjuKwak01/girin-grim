package com.starshop.giringrim.university.exception;

import lombok.Getter;

@Getter
public class UnivNotExistException extends RuntimeException {

    private final UniversityErrorMessage errorMessage;

    public UnivNotExistException(UniversityErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}

