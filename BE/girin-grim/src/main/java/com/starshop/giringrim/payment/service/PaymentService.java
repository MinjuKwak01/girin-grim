package com.starshop.giringrim.payment.service;

import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.payment.dto.PaymentReqDtos;
import com.starshop.giringrim.payment.dto.PaymentRespDtos;
import com.starshop.giringrim.utils.security.UserDetailsImpl;

public interface PaymentService {

    /*
    *   펀딩 결제 전 결제페이지 상세 조회 메서드
     */
    PaymentRespDtos.PaymentDetailsDto getPaymentDetails(Long fundingId, Member loginMember);

    /*
     *   충전하기 메서드
     */
    void chargeCoins(PaymentReqDtos.ChargeDto reqDto, Member loginMember);

    /*
     *   충전 페이지 조회 메서드
     */
    PaymentRespDtos.ChargeDetailsDto getChargeDetails(Member loginMember);

    /*
     *   결제하기 메서드
     */
    void fundingPayment(PaymentReqDtos.FundingPaymentDto reqDto, Long fundingId, Member loginMember);

    /*
     *   후원 내역 상세조회 메서드
     */
    PaymentRespDtos.PaymentHistoryDto fundingHistory(Long memberId, Long fundingId, Member loginMember);

    /*
     *   후원 내역 리스트 메서드
     */
    PaymentRespDtos.PaymentListDto fundingHistoryList(Long memberId, Member loginMember);

    /*
     *   올린펀딩 리스트 메서드
     */
    PaymentRespDtos.CreationListDto fundingCreationList(Long memberId);


}
