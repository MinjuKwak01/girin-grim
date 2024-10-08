package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class PaymentAlreadyDoneException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public PaymentAlreadyDoneException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
