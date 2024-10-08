package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public class FundingDurationUnavailableException extends RuntimeException{
    private final FundingErrorMessage errorMessage;

    public FundingDurationUnavailableException(FundingErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
