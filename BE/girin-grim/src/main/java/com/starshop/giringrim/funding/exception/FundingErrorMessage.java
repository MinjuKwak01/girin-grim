package com.starshop.giringrim.funding.exception;

import lombok.Getter;

@Getter
public enum FundingErrorMessage {
    /*
     * Funding 도메인 에러 메세지
     */
    FUNDING_START_DATE_UNAVAILABLE("펀딩 시작 날짜가 현재 날짜보다 빠릅니다."),
    FUNDING_DURATION_UNAVAILABLE("펀딩 기간이 올바르지 않습니다."),
    FUNDING_ESTIMATE_DATE_UNAVAILABLE("펀딩 시작 예정날짜가 올바르지 않습니다."),
    FUNDING_NOT_EXIST("존재하지 않는 펀딩입니다."),
    FUNDING_GOAL_MONEY_UNAVAILABLE("펀딩 목표 금액이 옵션의 총 금액보다 작습니다.");

    private final String message;

    FundingErrorMessage(String message) {
        this.message = message;
    }

}
