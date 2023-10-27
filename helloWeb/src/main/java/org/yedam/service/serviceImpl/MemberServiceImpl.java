package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService{
	DataSource dataSource = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> members = new ArrayList<>();
		String sql = "SELECT * FROM MEMBER";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				
				members.add(vo);
			}
		}catch(SQLException e) {
				e.printStackTrace();
		}finally {
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
		return members;	
	}
		
		
}
