package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService {
	DataSource dataSource = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		String sql = "SELECT * FROM BOOK";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				BookVO vo = new BookVO();
				vo.setBookId(rs.getString("book_code"));
				vo.setBookName(rs.getString("book_title"));
				vo.setBookWriter(rs.getString("book_author"));
				vo.setBookMake(rs.getString("book_press"));
				vo.setBookPrice(rs.getInt("book_price"));
				
				books.add(vo);
			}
		} catch(SQLException e) {
				e.printStackTrace();
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (psmt != null)
					psmt.close();
				if (conn != null)
					conn.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}finally {
			
			}
		}
		return books;	
	}
}
