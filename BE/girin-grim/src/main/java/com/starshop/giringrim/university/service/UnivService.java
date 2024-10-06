package com.starshop.giringrim.university.service;

import com.starshop.giringrim.university.dto.UnivRespDtos;

public interface UnivService {

    UnivRespDtos.GetUnivListDto getUnivList(String region, String keyword);
}
