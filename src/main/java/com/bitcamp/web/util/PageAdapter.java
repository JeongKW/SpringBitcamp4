package com.bitcamp.web.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.bitcamp.web.domain.Page;

@Component
public class PageAdapter {
	private static final Logger logger = LoggerFactory.getLogger(PageAdapter.class);
	public Object attr(Page page) {
		page.setTotalPage(0);
		page.setStartRow(0);
		page.setEndRow(0);
		page.setPageStart(0);
		page.setPageEnd(0);
		page.setBlockPrev(false);
		page.setBlockNext(false);

		return page;
	}
}
