package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public class FundingStartUnavailableException extends RuntimeException{
    private final FundingErrorMessage errorMessage;

    public FundingStartUnavailableException(FundingErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
