var myPage=x=>{
	return '<div class="container" style="padding-bottom: 0px">'
	+'    <h3>회원정보</h3><hr />'
	+'</div>'
	+'<div class="container">'
	+'<div class="jumbotron example z-depth-5">'
	+'<div class="row">'
	+'<div class="col-sm-2">'
	+'<div class="thumbnail" style="padding: 10px">'
	+'    <img src="${path.img}/default-profile.png" width="170px" height="170px" alt="" /><br />'
	+'    <div class="text-center">'
	+'        <button class="btn btn-basic">사진 수정</button>'
	+'    </div>'
	+'</div>'
	+'</div>'
	+'<div class="col-sm-10">'
	+'<div class="thumbnail" style="padding: 10px">'
	+'    <table id="bitc_table" class="table">'
	+'        <tr id="bitcamp_profile_table tr">'
	+'            <td >ID</td>'
	+'            <td >${user.id}</td>'
	+'            <td >생년</td>'
	+'            <td >${user.ssn}</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >Password</td>'
	+'            <td >${user.pass}</td>'
	+'            <td >전화번호</td>'
	+'            <td id="td-phone">${user.phone}'
	+'            </td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >이름</td>'
	+'            <td >${user.name}</td>'
	+'            <td >이메일</td>'
	+'            <td >${user.email}</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >성별</td>'
	+'            <td >남자</td>'
	+'            <td >주소</td>'
	+'            <td >${user.addr}</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >계좌번호</td>'
	+'            <td ></td>'
	+'            <td >고객번호</td>'
	+'            <td ></td>'
	+'        </tr>'
	+'    </table>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="text-center">'
	+'    <button class="btn btn-primary" id="update-btn">수정</button>&nbsp;&nbsp;&nbsp;'
	+'    <button class="btn btn-danger" id="drop-btn">탈퇴</button>&nbsp;&nbsp;&nbsp;'
	+'</div>'
	+'</div>'
	+'</div>';
};


function hello() {
	return '<h1>Hello AJAX 2~!!</h1>';
};
var loginView=x=>{
	return '<div id="'+x+'" class="container">'
	+'    <div class="row">'
	+'        <div class="col-md-4 col-md-offset-4">'
	+'            <div class="panel panel-success">'
	+'                <div class="panel-heading">'
	+'                    <h3 class="panel-title" style="text-align: left;"><b>로그인 페이지 입니다.</b></h3>'
	+'                </div>'
	+'                <div class="panel-body" style="padding: 30px, 10px;">'
	+'                    <form role="form">'
	+'                        <fieldset>'
	+'                            <div class="input-group">'
	+'                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'
	+'                                <input id="id" class="form-control" placeholder="Id를 입력하세요.." value="anti2110">'
	+'                            </div>'
	+'                            <br />'
	+'                            <div class="input-group">'
	+'                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'
	+'                                <input id="password" class="form-control" placeholder="Password를 입력하세요." value="4512">'
	+'                            </div>'
	+'                            <br />'
	+'                            <div id="div-login-btn">'
	+'                            </div>'
	+'                        </fieldset>'
	+'                    </form>'
	+'                </div>'
	+'                <div class="panel-footer text-center">'
	+'                    <p>New Member?&nbsp;&nbsp;'
	+'                    <button id="a-join" class="btn btn-danger btn-sm">Sign up</button></p>'
	+'                </div>'
	+'            </div>'
	+'        </div>'
	+'    </div>'
	+'</div>  '
};

var navigation=()=>{
	return '<style>'
	+'    .navbar-inverse {'
	+'        margin-bottom: 0px; '
	+'        border-radius: 0px;'
	+'    }'
	+'    .navbar-brand {'
	+'        width: 150px;'
	+'        font-size: 30px;'
	+'        padding-left: 30px;'
	+'        padding-right: 30px;'
	+'        text-align: center;'
	+'    }'
	+'    .navbar-header {'
	+'    }'
	+'    .sticky {'
	+'        position: fixed;'
	+'        top: 0;'
	+'        width: 100%;'
	+'    }'
	+'    .jumbotron {'
	+'        margin: 0 auto;'
	+'    }'
	+'    .bg {'
	+'        background-image: url("'+$.image()+'/home/chicago.jpg");'
	+'    }'
	+'    .mega-dropdown {'
	+'        position: static !important;'
	+'    }'
	+'    .mega-dropdown-menu {'
	+'        padding: 20px 15px 15px;'
	+'        text-align: center;'
	+'        width: 100%;'
	+'    }'
	+'</style>'
	+'<div class="jumbotron bg" style="padding-left: 30px;">'
	+'    <h1 style="color: white;">Welcome to Bitcamp</h1>'
	+'</div>'
	+'<div id="navbar" style="z-index: 9">'
	+'<nav class="navbar navbar-inverse">'
	+'  <div class="container-fluid">'
	+'    <div id="div-nav-1st" class="navbar-header">'
	+'        <a class="navbar-brand" href="#"><strong>BIT</strong></a>'
	+'    </div>'
	+'    <div class="collapse navbar-collapse" id="myNavbar">'
	+'      <ul class="nav navbar-nav">'
	+'        <li id="li-home" class="active"></li>'
	+'        <li><a href="#"><span class="glyphicon glyphicon-book" aria-hidden="true">&nbsp;About</span></a></li>'
	+'        <li><a id="a-board" href="#"><span class="glyphicon glyphicon-bullhorn" aria-hidden="true">&nbsp;자유게시판</span></a></li>'
	+'        <li class="dropdown mega-dropdown">'
	+'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"'
	+'                aria-haspopup="true" aria-expanded="false">유틸리티<span class="caret"></span>'
	+'            </a>'
	+'            <ul id="ul-util" class="dropdown-menu mega-dropdown-menu list-inline">'
	+'                 <li id="li-sequence" class="col-sm-2"></li>'
	+'                 <li id="li-math" class="col-sm-2"></li>'
	+'                 <li id="li-matrix" class="col-sm-2"></li>'
	+'                 <li id="li-sort" class="col-sm-2"></li>'
	+'                 <li id="li-application" class="col-sm-2"></li>'
	+'            </ul>'
	+'        </li>'
	+'      </ul>'
	+'      <ul class="nav navbar-nav navbar-right">'
	+'            <li id="li-login"></li>'
	+'            <li class="dropdown mega-dropdown">'
	+'                <a class="dropdown-toggle" data-toggle="dropdown" role="button"'
	+'                aria-haspopup="true" aria-expanded="false">'
	+'                    <span class="glyphicon glyphicon-search"></span>'
	+'                </a>'
	+'            </li>'
	+'      </ul>'
	+'    </div>'
	+'  </div>'
	+'</nav>'
	+'</div>'
	;
}
function createButtonNav1st() {
	return '<button id="btn-nav-1st" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'</button>';
};

var createATag=(x, y)=>{
	return '<a id="'+x+'" href="#">'+y+'</a>';
};
var createSpan=(x, y)=>{
	return '<span class="glyphicon ' +x+'" aria-hidden="true">&nbsp;'+y+'</span>'
};

var createHTag=(x, y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
};

var createDiv=(x, y)=>{
	return '<div id="'+x+'" class="'+y+'"></div>';
};
var createUL=(x,y)=>{
	return '<ul id="'+x+'" class="'+y+'"></ul>';
	}
var createLI=(x,y)=>{
	return '<li id="'+x+'" class="'+y+'"></li>';
}
var createInputText=(x,y)=>{
	return $('<input type="text" id="'+x+'"class="'+y
      +'"placeholder="example">');
}
var createButton=(x,y,z)=>{
	return '<button type ="button" id="'+x+'" class="btn '+y+'">'+z+'</button>';
}

var createText=x=>{
	return '<span id="'+x+'"></span>';
}

var createTab=(x, y, json, type)=>{
	var a = 1;
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
		+'<tr><th>목록</th>'
		+'<th><a id="a-th"></a></th></tr>';
	$.each(json, (i, j)=> {
		tab += '<tr>'
			+'<td><a id="a-td'+i+'" href="#">'+(a++)+'. '+j+'</a></td>'
			+'<td id="'+i+'"></td>'
	});
	tab += '</tr><tr><td>결과</td><td id="td-result"></td></tr></table>'
	return tab;
};

var createMathTab=(x, y, json, txt, type)=>{
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
	+'<tr>'
	+'<th colspan="5">' + txt + '</th>'
	+'</tr>';
	$.each(JSON.parse(json), (i, j)=>{
		tab +='<tr>'
			+'<td>'+j.a+'</td>'
			+'<td>'+j.b+'</td>'
			+'<td>'+j.c+'</td>'
			+'<td>'+j.d+'</td>'
			+'<td>'+j.e+'</td>'
			+'</tr>';
	});
	tab += '<tr><td>결과</td><td></td></tr>'
	tab += '</table>';
	return tab;
};

var createAlgoTab=()=>{
	var tab = '';
	return '<table id="tab-algo" class="table table-bordered">'
	  +'<tr>'
	  +'<td id="li-arith" style="width: 50%"></td>'
	  +'<td id="result-box" rowspan="5" style="width: 50%"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-switch"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-geo"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-fact"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-fibo"></td>'
	  +'</tr>'
	  +'<tr style="background-color: #333; color: white;">'
	  +'<td id="li-result"></td>'
	  +'<td id="li-result-answer" style="font-size: 50px; text-align: center"></td>'
	  +'</tr>'
	  +'</table>';
};