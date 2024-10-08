package com.starshop.giringrim.university.exception;

import lombok.Getter;

@Getter
public class RegionNotExistException extends RuntimeException{
    private final UniversityErrorMessage errorMessage;

    public RegionNotExistException(UniversityErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
