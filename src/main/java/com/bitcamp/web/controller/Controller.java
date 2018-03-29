package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.util.PageAdapter;

@RestController
public class Controller {
	private static final Logger logger = LoggerFactory.getLogger(Controller.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Member user;
	@Autowired PageAdapter adapter;
	@Autowired Page page;
	@RequestMapping(value="/members/{id}/login", method=RequestMethod.POST,
			consumes="application/json")
	public Map<?,?> getUserId(
			@PathVariable String id,
			@RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("Welecom to {}", "Member!!");
		logger.info("ID {}", id);
		logger.info("PASS {}", m.getPass());
		cmd = new Command();
		cmd.setData1(id);
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
	@RequestMapping(value="/articles/{nowPage}", method=RequestMethod.GET)
	public Map<?,?> getArticles(
			@PathVariable String nowPage){
		logger.info("articles() {}", "entered");
		logger.info("nowPage is {}", nowPage);
		Map<String, Object> map = new HashMap<>();
		page.setTotalCount(mapper.boardAll(cmd));
		page.setNowPage(Integer.parseInt(nowPage));
		page.setBlockSize(5);
		page.setPageSize(5);
		page = (Page) adapter.attr(page);
		cmd.setData1(page.getStartRow()+"");
		cmd.setData2(page.getEndRow()+"");
		map.put("list", (List<?>) new IGetService() {
			@Override
			public Object execute(Command cmd) {
				return mapper.articles(cmd);
			}
		}.execute(cmd));
		map.put("page", page);
		return map;
	}
	@RequestMapping(value="/article", method=RequestMethod.PUT, consumes="application/json")
	public Map<?,?> putArticles(){
		return null;
	}
	@RequestMapping(value = "/boards/{seq}", method=RequestMethod.GET, 
			consumes="application/json")
	public Map<?,?> getArticle(
			@PathVariable String seq){
		Map<String, Object> map = new HashMap<>();
		
		return map;
	}
}
