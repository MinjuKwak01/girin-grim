package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class HistoryForbiddenException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public HistoryForbiddenException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
