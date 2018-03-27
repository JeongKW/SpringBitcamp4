package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;

@RestController
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@RequestMapping(value="/login", method=RequestMethod.POST,
			consumes="application/json")
	public Map<?,?> login(
			@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("Welecom to {}", "Member!!");
		logger.info("ID {}", m.getId());
		logger.info("PASS {}", m.getPass());
		cmd = new Command();
		cmd.setData1(m.getId());
		cmd.setData2(m.getPass());
		int count = new ICountService() {
			@Override
			public int execute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		if(count == 1) {
			map.put("user", mapper.selectById(cmd));
		}
		map.put("success", ""+count);
		logger.info("count : {}", ""+count);
		return map;
	}
}
