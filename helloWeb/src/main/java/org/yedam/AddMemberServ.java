package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//완전 중요해서 꼭 기억하기***** ↓ 웹페이지에서 값을 넘길 때에
		//?mid=M009&pass=9999&name=Kim&phone=010-9876-0987 --> 서블릿 주소에서는 매개값을 이렇게 넘긴다
		//(mid, pass, name, phone) {mid ...}  --> 이렇게가 아니고 위 방식으로 넘기는것!
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8"); //jsp 한글처리를 위한...
		
		//멤버 인스턴스 선언
		MemberVO vo = new MemberVO(mid, pass, name, phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		
		Gson gson = new GsonBuilder().create();
		//String json = gson.toJson(vo); //자바 객체를 넣어주면 알아서 문자 객체로 바꿔줌
		
		//Map
		Map<String, Object> map = new HashMap<>();

		
		if (svc.addMember(vo)) {
			//{"retCode" : "OK"}
			map.put("retCode", "OK");
			map.put("vo", vo);
			//out.print(json);
		} else {
			//{"retCode" : "NG"}
			//out.print(json);
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		}
		String json = gson.toJson(map);
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
