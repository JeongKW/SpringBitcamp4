package com.bitcamp.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Member;

@Repository
public interface Mapper {
  public void insertMember(Command cmd);
  public void updateMember(Command cmd);
  public void deleteMember(Command cmd);
  public List<Member> selectAll();
  public List<Member> selectByName(Command cmd);
  public Member selectById(Command cmd);
  public int selectCount(Command cmd);
  public int exist(Command cmd);
}