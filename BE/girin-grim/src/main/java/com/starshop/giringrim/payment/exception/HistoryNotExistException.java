package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class HistoryNotExistException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public HistoryNotExistException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
