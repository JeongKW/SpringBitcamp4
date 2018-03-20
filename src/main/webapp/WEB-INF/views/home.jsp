<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath()%>"></c:set>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Home</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/app.js"></script>
</head>
<body>
	<div id="wrapper">
		<h1>
		Hello world!  
		</h1>
	
		<P>  The time on the server is ${serverTime}. </P>
		<button id="btn">아작스 테스트</button>
	</div>
</body>
<script>
app.init('${context}');
</script>
</html>