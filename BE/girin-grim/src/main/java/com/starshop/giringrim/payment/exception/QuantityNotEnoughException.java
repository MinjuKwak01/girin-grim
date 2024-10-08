package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class QuantityNotEnoughException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public QuantityNotEnoughException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
