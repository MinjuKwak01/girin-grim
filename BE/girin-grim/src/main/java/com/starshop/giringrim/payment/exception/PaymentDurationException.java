package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class PaymentDurationException extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public PaymentDurationException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
