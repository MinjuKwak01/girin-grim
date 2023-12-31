package com.starshop.giringrim.funding.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class FundingNotExistException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public FundingNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
