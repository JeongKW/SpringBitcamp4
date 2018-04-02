package com.bitcamp.web.enums;

import java.io.File;

public enum ImageRepo{
	UPLOAD_PATH{
		@Override
		public String toString() {
			return "C:" + File.separator + "Users" + File.separator + "1027" + File.separator + "Class23" + File.separator + "STS-3.9" + File.separator + 
					"SpringBitcamp 4" + File.separator + "Bitcamp" + File.separator + "src" + File.separator + "main" 
					+ File.separator + "webapp" + File.separator + "resources" + File.separator + "img";
		}
	};
}
