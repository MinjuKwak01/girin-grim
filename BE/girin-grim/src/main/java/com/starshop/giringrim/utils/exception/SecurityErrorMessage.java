package com.starshop.giringrim.utils.exception;

import lombok.Getter;

@Getter
public enum SecurityErrorMessage {

        UNAUTHORIZED_ERROR("인증되지 않은 사용자입니다."),
        FORBIDDEN_ERROR("권한이 없습니다.");

        private final String message;

        SecurityErrorMessage(String message) {
            this.message = message;
        }
}
