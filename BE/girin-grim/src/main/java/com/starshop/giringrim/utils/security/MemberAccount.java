package com.starshop.giringrim.utils.security;

import com.starshop.giringrim.member.entity.Member;
import lombok.Getter;

@Getter
public class MemberAccount extends Member {
    private final Member member;
    public MemberAccount(Member member) {
        super(member.getEmail());
        this.member = member;
    }
}
