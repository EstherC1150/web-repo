package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class BookVO {
	private String bookId;
	private String bookName;
	private String bookWriter;
	private String bookMake;
	private int bookPrice;
}
