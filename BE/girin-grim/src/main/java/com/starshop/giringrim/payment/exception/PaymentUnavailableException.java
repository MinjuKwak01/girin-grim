package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class PaymentUnavailableException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public PaymentUnavailableException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
