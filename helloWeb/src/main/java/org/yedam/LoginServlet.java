package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet") //url --> http://localhost:8080/helloWeb/LoginServlet
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		Map<String, Integer> map = new HashMap<>();
		map.put("홍길동", 90);
		map.put("김길동", 95);
		map.put("박길동", 80);
		
		Set<String> keyset = map.keySet(); //문자열 타입의 키 부분을 뽑아내서 set컬렉션에 담아준다
		
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8"); //jsp 한글처리를 위한...
		PrintWriter out = response.getWriter(); //출력스트림
		
		out.print("톰캣을 재시작을 해야지 바뀐 내용이 적용됩니다...");
		out.print("<br>");
		out.print("<h3>학생이름과 점수</h3>");
		//out.print("<table border = 1><thead><tr>");
		//out.print("<th>학생이름</th><th>점수</th><tr></thead>");
		String str = "<table border = 1><thead><tr>";
		str += "<th>학생이름</th><th>점수</th><tr></thead>";
		str += "<tbody>";
		for(String item : keyset) {
			str += "<tr><td>" + item + "</td><td>" + map.get(item) + "</td></tr>";
		}
		str += "</tbody></table>";
		out.print(str);
		out.print("<a href='index.html'>첫페이지</a>"); //위에서 컨텐트타입을 html로 지정했기 때문에 html코드 쳐도 됨
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
