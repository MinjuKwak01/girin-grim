package com.starshop.giringrim.university.exception;

import lombok.Getter;

@Getter
public enum UniversityErrorMessage {
    /*
     * University 도메인 에러 메세지
     */
    UNIV_NOT_EXIST("존재하지 않는 대학교입니다."),
    REGION_NOT_EXIST("존재하지 않는 지역입니다.");

    private final String message;

    UniversityErrorMessage(String message) {
        this.message = message;
    }
}
