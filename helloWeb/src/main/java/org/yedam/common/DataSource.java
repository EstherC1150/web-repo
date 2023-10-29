package org.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataSource {
		private static DataSource dataSource = new DataSource(); //내클래스에서 나의 인스턴스 만들고
		private DataSource() {} //나를 생성하지 못하도록 나의 생성자를 내가 만들어버린다
		
		private static String driver = "oracle.jdbc.driver.OracleDriver";
		private static String url = "jdbc:oracle:thin:@localhost:1521:orcl"; //현업에 가면 @ 뒤로 다르다.
		private static String user = "hr";
		private static String password ="1234";
		
		private static Connection conn;
		
		public static DataSource getInstance() {	//외부에서는 나의 인스턴스를 갖다 쓰도록 하기
			return dataSource;
		}
		
		public Connection getConnection() {
			try {
				Class.forName(driver);
				conn = DriverManager.getConnection(url,user,password);
//				System.out.println("DB 연결성공 ~~~~~~~");
				}catch(ClassNotFoundException | SQLException e) {
				e.printStackTrace();
			}
			return conn;
		}
}
