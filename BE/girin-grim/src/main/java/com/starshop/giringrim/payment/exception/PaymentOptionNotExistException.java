package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class PaymentOptionNotExistException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public PaymentOptionNotExistException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
