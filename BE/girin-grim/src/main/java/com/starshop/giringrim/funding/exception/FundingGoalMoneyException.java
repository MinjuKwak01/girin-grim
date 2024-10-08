package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public class FundingGoalMoneyException extends RuntimeException{
    private final FundingErrorMessage errorMessage;

    public FundingGoalMoneyException(FundingErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
