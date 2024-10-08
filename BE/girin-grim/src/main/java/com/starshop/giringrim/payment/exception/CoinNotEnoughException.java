package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public class CoinNotEnoughException  extends RuntimeException{
    private final PaymentErrorMessage errorMessage;

    public CoinNotEnoughException(PaymentErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
