package com.starshop.giringrim.payment.exception;

import lombok.Getter;

@Getter
public enum PaymentErrorMessage {
    /*
     * Payment 도메인 에러 메세지
     */
    PAYMENT_UNAVAILABLE("본인의 펀딩에 후원할 수 없습니다."),
    PAYMENT_DURATION_UNAVAILABLE("후원할 수 있는 기간이 아닙니다."),
    PAYMENT_ALREADY_DONE("이미 후원한 펀딩입니다."),
    PAYMENT_OPTION_NOT_EXIST("존재하지 않는 옵션입니다."),
    QUANTITY_NOT_ENOUGH("옵션 재고가 부족합니다."),
    COIN_NOT_ENOUGH("코인이 부족합니다."),
    HISTORY_NOT_EXIST("후원 내역이 존재하지 않습니다."),
    HISTORY_FORBIDDEN("본인의 후원 내역만 조회 가능합니다."),
    PAYMENT_TYPE_NOT_EXIST("펀딩 타입이 존재하지 않습니다.");

    private final String message;

    PaymentErrorMessage(String message) {
        this.message = message;
    }
}
