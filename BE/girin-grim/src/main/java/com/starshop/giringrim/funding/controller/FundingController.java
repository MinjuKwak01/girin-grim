package com.starshop.giringrim.funding.controller;

import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.funding.service.FundingService;
import com.starshop.giringrim.funding.service.FundingServiceImpl;
import com.starshop.giringrim.utils.common.ApiResponseGenerator;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FundingController {

    private final FundingService fundingService;

    @GetMapping("/home")
    public ResponseEntity<?> home(  @RequestParam(value = "page", defaultValue = "0") Integer page,
                                    @RequestParam(value="uni", required = false) Long universityId,
                                    @RequestParam(value = "category", required = false) String fundingType,
                                    @RequestParam(value = "q", required = false) String keyword,
                                    @RequestParam(value = "sort", required = false) String method,
                                    @AuthenticationPrincipal UserDetailsImpl userDetails){
        FundingRespDtos.HomeDto respDto = fundingService.home(page, universityId, fundingType, keyword, method, userDetails);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
    *   펀딩 작성
     */
    @PostMapping("/funding")
    public ResponseEntity<?> createFunding(@Valid @RequestBody FundingReqDtos.UploadDto uploadDto, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        fundingService.createFunding(uploadDto, userDetails.getEmail());
        return ApiResponseGenerator.success(HttpStatus.OK);

    }

    /*
    *   펀딩 아이디로 펀딩 조회
     */
    @GetMapping("/funding/{fundingId}")
    public ResponseEntity<?> getFunding(@PathVariable Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails){
        FundingRespDtos.GetFundingDto fundingDto = fundingService.getFunding(fundingId, userDetails);
        return ApiResponseGenerator.success(fundingDto, HttpStatus.OK);
    }

    /*
     *   펀딩 아이디로 펀딩 수정
     */
    @PutMapping("/funding/{fundingId}")
    public ResponseEntity<?> editFunding(@Valid @RequestBody FundingReqDtos.UploadDto uploadDto, @PathVariable Long fundingId){
        fundingService.editFunding(uploadDto, fundingId);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }


    /*
    *   펀딩 아이디로 펀딩 긴 설명 조회 (사진)
     */
    @GetMapping("/funding/{id}/description")
    public ResponseEntity<?> getFundingDescription(@PathVariable Long id){
        FundingRespDtos.FundingDescriptionDto fundingDescription = fundingService.getFundingDescription(id);
        return ApiResponseGenerator.success(fundingDescription, HttpStatus.OK);
    }

    /*
    *   공지사항 작성
    */
    @PostMapping("/api/funding/{fundingId}/notice")
    public ResponseEntity<?> createNotice(@RequestBody FundingReqDtos.NoticeDto noticeDto, @PathVariable Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails){
        fundingService.createNotice(noticeDto, fundingId, userDetails);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     *   공지사항 조회
     */
    @GetMapping("/api/funding/{fundingId}/notice")
    public ResponseEntity<?> getNotice(@PathVariable Long fundingId){
        FundingRespDtos.NoticeDto notice = fundingService.getNotice(fundingId);
        return ApiResponseGenerator.success(notice, HttpStatus.OK);
    }

}
