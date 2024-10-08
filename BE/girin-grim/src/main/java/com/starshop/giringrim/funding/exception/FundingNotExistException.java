package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public class FundingNotExistException extends RuntimeException{
    private final FundingErrorMessage errorMessage;

    public FundingNotExistException(FundingErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
