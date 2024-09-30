package com.starshop.giringrim.payment.controller;

import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.payment.dto.PaymentReqDtos;
import com.starshop.giringrim.payment.dto.PaymentRespDtos;
import com.starshop.giringrim.payment.service.PaymentService;
import com.starshop.giringrim.utils.common.ApiResponseGenerator;
import com.starshop.giringrim.utils.common.LoginUser;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PaymentController {

    private final PaymentService paymentService;

    /*
    *   펀딩 결제 전 페에지 상세 조회
     */
    @GetMapping("/funding/{fundingId}/payment")
    public ResponseEntity<?> getPaymentDetails(@PathVariable Long fundingId, @LoginUser Member loginMember){
        PaymentRespDtos.PaymentDetailsDto respDto = paymentService.getPaymentDetails(fundingId, loginMember);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
    *   충전하기
     */
    @PostMapping("/charge")
    public ResponseEntity<?> chargeCoins(@Valid @RequestBody PaymentReqDtos.ChargeDto reqDto,@LoginUser Member loginMember) {
        paymentService.chargeCoins(reqDto, loginMember);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
    *  충전 페이지 조회
     */
    @GetMapping("/charge")
    public ResponseEntity<?> getChargeDetails(@LoginUser Member loginMember) {
        PaymentRespDtos.ChargeDetailsDto respDto = paymentService.getChargeDetails(loginMember);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
    *   펀딩 결제
     */
    @PostMapping("/funding/{fundingId}/payment")
    public ResponseEntity<?> fundingPayment(@RequestBody PaymentReqDtos.FundingPaymentDto reqDto,@PathVariable Long fundingId, @LoginUser Member loginMember) {
        paymentService.fundingPayment(reqDto, fundingId, loginMember);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
    *   후원한 프로젝트 상세 조회
     */
    @GetMapping("/member/{memberId}/backed/{fundingId}")
    public ResponseEntity<?> fundingPayment(@PathVariable(value = "memberId") Long memberId, @PathVariable(value = "fundingId") Long fundingId, @LoginUser Member loginMember) {
        PaymentRespDtos.PaymentHistoryDto respDto = paymentService.fundingHistory(memberId, fundingId, loginMember);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
    *   후원한 프로젝트 리스트 조회
     */
    @GetMapping("/member/{memberId}/backed")
    public ResponseEntity<?> fundingPaymentList(@PathVariable Long memberId, @LoginUser Member loginMember) {
        PaymentRespDtos.PaymentListDto respDto = paymentService.fundingHistoryList(memberId, loginMember);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
     *   올린 펀딩 리스트 조회
     */

    @GetMapping("/member/{memberId}/created")
    public ResponseEntity<?> fundingCreatedList(@PathVariable Long memberId){
        PaymentRespDtos.CreationListDto respDto = paymentService.fundingCreationList(memberId);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }
}
