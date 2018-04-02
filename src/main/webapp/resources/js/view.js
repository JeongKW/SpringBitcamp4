var fileupload=()=>{
	return '<div class="container white-popup">'
	+'	<div class="row">'
	+'		<div class="text-center">'
	+'			<h4 style="color: purple; font-size: 40px">File Upload</h4>'
	+'		</div>'
	+'		<div class="text-center">'
	+'			<span class="glyphicon glyphicon-sort fa-5x"'
	+'				style="font-size: 20px;"></span>'
	+'		</div>'
	+'		<br />'
	+'	</div>'
	+'	<div class="row" style="padding-left: 40px; padding-right: 40px">'
	+'		<div class="form-group">'
	+'			<input type="file" name="file" class=""'
	+'				style="border: 1px solid gray; width: 100%"><br>'
	+'		</div>'
	+'	</div>'
	+'	<div class="row">'
	+'		<div id="div-upload" class="btn-group pull-right" style="margin-right: 40px">'
	+			createInput({id : 'submit', clazz : '', type : 'submit', placeholder : '제출'})
	+			createInput({id : 'cancel', clazz : '', type : 'reset', placeholder : '취소'})
	+'		</div>'
	+'	</div>'
	+'</div>';
};
var boardwrite=()=>{
	return '<div class="container">'
	+'	<h2>글쓰기 <br><small><br>Title(제목), Content(내용)을 완성하시고 전송을 눌러주세요.</small></h2><br>'
	+'		<div class="form-group">'
	+'			<label for="input-name">NickName</label> <input name="name" type="text"'
	+'				class="form-control" id="input-name"><br/>'
	+'			<label for="input-title">Title</label> <input name="title" type="text"'
	+'				class="form-control" id="input-title"><br/> <label for="input-comment">Comment</label>'
	+'			<textarea name="content" class="form-control" rows="15"'
	+'				id="input-comment"></textarea>'
	+'		</div>'
	+'	<div class="row">'
	+'		<div class="col-sm-8"></div>'
	+'		<div class="col-sm-4" style="text-align: right">'
	+'			<div id="div-btn-group" class="btn btn-group">'
	+'			</div>'
	+'		</div>'
	+'	</div>'
	+'</div>';
};

var myPage=(x,y)=>{
  return '<div id="'+y+'" class="container" style="padding-bottom: 0px">'
  +'    <h3>회원정보</h3><hr/>'
  +'</div>'
  +'<div class="container">'
  +'<div class="jumbotron example z-depth-5">'
  +'<div class="row">'
  +'<div class="col-sm-2">'
  +'<div class="thumbnail" style="padding: 10px">'
  +'    <img src="'+$.image()+'/default-profile.png" width="170px" height="170px" alt="" /><br />'
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
  +'            <td >'+x.id+'</td>'
  +'            <td >생년</td>'
  +'            <td >'+x.ssn+'</td>'
  +'        </tr>'
  +'        <tr>'
  +'            <td >Password</td>'
  +'            <td >'+x.pass+'</td>'
  +'            <td >전화번호</td>'
  +'            <td id="td-phone">'
  +'            </td>'
  +'        </tr>'
  +'        <tr>'
  +'            <td >이름</td>'
  +'            <td >'+x.name+'</td>'
  +'            <td >이메일</td>'
  +'            <td >'+x.email+'</td>'
  +'        </tr>'
  +'        <tr>'
  +'            <td >성별</td>'
  +'            <td >남자</td>'
  +'            <td >주소</td>'
  +'            <td >'+x.addr+'</td>'
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

var createForm=x=>{
	return '<form id="'+x.id+'" class="'+x.clazz+'" action="'+x.action+'" method="post"></form>';
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
	+'        background-image: url("'+$.image()+'/chicago.jpg");'
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
	+'        <li id="li-board"></li>'
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

var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
};
var createSpan=x=>{
	return '<span class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};

var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
};

var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
};
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
	}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInput=x=>{
	return '<input type="'+x.type+'" id="'+x.id+'"class="'+x.clazz
      +' "value="'+x.placeholder+'">';
}
var createButton=x=>{
	return '<button type ="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
}

var createText=x=>{
	return '<span class="'+x+'"></span>';
}

var createTab=x=>{
	var a = 1;
	var tab = '<table id="'+x.id+'" class="table table-'+x.clazz+'">'
		+'<tr><th>목록</th>'
		+'<th><a id="a-th"></a></th></tr>';
	$.each(x.json, (i, j)=> {
		tab += '<tr>'
			+'<td><a id="a-td'+i+'" href="#">'+(a++)+'. '+j+'</a></td>'
			+'<td id="'+i+'"></td>'
	});
	tab += '</tr><tr><td>결과</td><td id="td-result"></td></tr></table>'
	return tab;
};

var createCommonTab=x=>{
	return '<table id="'+x.id+'" class="table table-'+x.clazz+'"></table>';
};
var createThead=x=>{
	return '<thead>'+x+'</thead>';
};
var createTbody=x=>{
	return '<tbody>'+x+'</tbody>';
};
var createTh =x=>{
	var t = '<tr>';
	$.each(x.list, (i, j)=>{
		t += '<th>'+j+'</th>';
	});
	t += '</tr>';
	return t;
};

var createTr =x=>{
	var t = '';
	$.each(x.list, (i, j)=> {
		t += '<tr>'+createTd({seq : j.bbsSeq, list : j})+'</tr>';
	});
	return t;
};

var createTd =x=>{
	var t = '';
	var seq = x.seq;
	$.each(x.list, (i, j)=>{
		if(i !== 'content'){
			if(i === 'title'){
				t += '<td><a id="a-'+seq+'">'+j+'</a></td>';
			} else {
				t += '<td>'+j+'</td>';
			}
		}
	});
	return t;
};

var pagination=x=>{
	return 
	'	<div class="text-center">'
	+'		<ul id="page-util" class="pagination">'
	+'			<c:if test="${page.blockPrev}">'
	+'				<li><a href="#" onclick="app.boardList(${page.pageStart-1}); return false;" aria-label="Previous"> <span'
	+'					aria-hidden="true">&laquo;</span>'
	+'				</a></li>'
	+'			</c:if>'
	+'			<c:forEach begin="${page.pageStart}" end="${page.pageEnd}" step="1" varStatus="i">'
	+'				<c:choose>'
	+'					<c:when test="${page.nowPage eq i.index}">'
	+'						<li class="active"><a href="#" onclick="app.boardList(${i.index}); return false;">${i.index}</a></li>'
	+'					</c:when>'
	+'					<c:otherwise>'
	+'						<li><a href="#" onclick="app.boardList(${i.index}); return false;">${i.index}</a></li>'
	+'					</c:otherwise>'
	+'				</c:choose>'
	+'			</c:forEach>'
	+'			<c:if test="${page.blockNext}">'
	+'				<li><a href="#" onclick="app.boardList(${page.pageEnd+1}); return false;" aria-label="Next"> <span aria-hidden="true">&raquo;</span>'
	+'				</a></li>'
	+'			</c:if>'
	+'		</ul>'
	+'	</div>'
	+'</div>';
};

var createMypageTab=x=>{
	var z = 0;
	var tab = '<table id="'+x.id+'" class="table table-'+x.clazz+'">'
		+'<tr><th colspan="2">나의정보</th></tr><tr>';
	$.each(x.json, (i, j)=>{
		tab += '<td>'+i+'</td><td>'+j+'</td>';
		if(z % 2 == 1 && z != 7){
			tab += '</tr><tr>';
		} else if(z == 7){
			tab += '</tr>';
		}
		z++;
	});
	return tab;
};

var createMathTab=x=>{
	var tab = '<table id="'+x.id+'" class="table table-'+x.clazz+'">'
	+'<tr>'
	+'<th colspan="5">' + x.txt + '</th>'
	+'</tr>';
	$.each(JSON.parse(x.json), (i, j)=>{
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