package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class PaymentTypeNotExistException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public PaymentTypeNotExistException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
