package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public class FundingEstimateUnavailableException extends RuntimeException{
    private final FundingErrorMessage errorMessage;

    public FundingEstimateUnavailableException(FundingErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
