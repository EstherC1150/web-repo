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
 * Servlet implementation class ModMemberServ
 */
@WebServlet("/ModMemberServ.html")
public class ModMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		// TODO Auto-generated method stub
		//수정처리하는 서블릿
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		//mid, pass, name, phone => db update 처리
		MemberVO vo2 = new MemberVO(mid, pass, name, phone);
		MemberService svc2 = new MemberServiceImpl();
		
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
		
		Map<String, Object> map = new HashMap<>();

		
		if (svc2.modifyMember(vo2)) {
			//{"retCode" : "OK"}
			map.put("retCode", "OK");
			map.put("vo", vo2);
		} else {
			map.put("retCode", "NG");
			map.put("vo", vo2.getMid());
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
