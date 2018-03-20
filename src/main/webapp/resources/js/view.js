function hello() {
	return '<h1>Hello AJAX 2~!!</h1>';
}
function navigation() {
	return '<style>' + '	#content {' + '		margin-top: 65px;'
			+ '		min-height: 100%;' + '		position: relative;'
			+ '		padding-bottom: 19px; /* footer height */' + '	}'
			+ '    .navbar-inverse {' + '        margin-bottom: 0px; '
			+ '        border-radius: 0px;' + '    }' + '    .navbar-brand {'
			+ '        width: 150px;' + '        font-size: 30px;'
			+ '        padding-left: 30px;' + '        padding-right: 30px;'
			+ '        text-align: center;' + '    }' + '    .navbar-header {'
			+ '    }' + '    .sticky {' + '        position: fixed;'
			+ '        top: 0;' + '        width: 100%;' + '    }'
			+ '    .jumbotron {' + '        margin: 0 auto;' + '    }'
			+ '    .bg {' + '        background-image: url("'
			+ $.image()
			+ '/home/chicago.jpg");'
			+ '    }'
			+ '    .mega-dropdown {'
			+ '        position: static !important;'
			+ '    }'
			+ '    .mega-dropdown-menu {'
			+ '        padding: 20px 15px 15px;'
			+ '        text-align: center;'
			+ '        width: 100%;'
			+ '    }'
			+ '</style>'
			+ '<div class="jumbotron bg" style="padding-left: 30px;">'
			+ '    <h1 style="color: white;">Welcome to Bitcamp</h1>'
			+ '</div>'
			+ '<div id="navbar" style="z-index: 9">'
			+ '<nav class="navbar navbar-inverse">'
			+ '  <div class="container-fluid">'
			+ '    <div id=div-nav-1st class="navbar-header">'
			+ '        <a class="navbar-brand" href="#"><strong>BIT</strong></a>'
			+ '    </div>'
			+ '    <div class="collapse navbar-collapse" id="myNavbar">'
			+ '      <ul class="nav navbar-nav">'
			+ '        <li class="active"><a id="a-home" href="#"><span class="glyphicon glyphicon-home" aria-hidden="true">&nbsp;Home</span></a></li>'
			+ '        <li><a href="#"><span class="glyphicon glyphicon-book" aria-hidden="true">&nbsp;About</span></a></li>'
			+ '        <li><a id="a-board" href="#"><span class="glyphicon glyphicon-bullhorn" aria-hidden="true">&nbsp;자유게시판</span></a></li>'
			+ '        <li class="dropdown mega-dropdown">'
			+ '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"'
			+ '                aria-haspopup="true" aria-expanded="false">유틸리티<span class="caret"></span>'
			+ '            </a>'
			+ '            <ul id="ul-util" class="dropdown-menu mega-dropdown-menu list-inline">'
			+'				<li id="li-sequence" class="col-sm-2"><a id="a-sequence" href="#">수열</a></li>'
			+'				<li id="li-math" class="col-sm-2"><a id="a-math" href="#">수학</a></li>'
			+'				<li id="li-matrix" class="col-sm-2"><a id="a-matrix" href="#">배열</a></li>'
			+'				<li id="li-sort" class="col-sm-2"><a id="a-sort" href="#">정렬</a></li>'
			+'				<li id="li-application" class="col-sm-2"><a href="#">응용</a></li>'
			+ '            </ul>'
			+ '        </li>'
			+ '      </ul>'
			+ '        <ul class="nav navbar-nav navbar-right">'
			+ '            <li id="li-login"></li>'
			+ '            <li class="dropdown mega-dropdown">'
			+ '                <a class="dropdown-toggle" data-toggle="dropdown" role="button"'
			+ '                aria-haspopup="true" aria-expanded="false">'
			+ '                    <span class="glyphicon glyphicon-search"></span>'
			+ '                </a>'
			+ '            </li>'
			+ '        </ul>'
			+ '    </div>' + '  </div>' + '</nav>' + '</div>';
}
function createButtonNav1st() {
	return '<button id="btn-nav-1st" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'
			+ '<span class="icon-bar"></span>'
			+ '<span class="icon-bar"></span>'
			+ '<span class="icon-bar"></span>' + '</button>';
}
function createButtonLogin() {
	return '<a id="a-login" href="#"><span class="glyphicon glyphicon-user" aria-hidden="true">'
			+ '&nbsp;Login</span></a>';
}
function sequenceCalc() {
	return '<div class="container">' + '<h1>Sequence Table !!</h1>'
			+ '<table class="table table-bordered">' + '        <tr>'
			+ '          <td>1+2+3+4+....+100까지의 합계</td>'
			+ '          <td></td>' + '        </tr>' + '        <tr>'
			+ '          <td>1-2+3-4+5-6+.....+99-100의 합계</td>'
			+ '          <td></td>' + '        </tr>' + '        <tr>'
			+ '          <td> -1/2+2/3-3/4+4/5-5/6...-99/100의 합계</td>'
			+ '          <td></td>' + '        </tr>' + '        <tr>'
			+ '          <td>1+2+4+7+11+16+22+로 증가하는 수열 (20번째 항까지)</td>'
			+ '          <td></td>' + '        </tr>' + '        <tr>'
			+ '          <td>1!+2!+3!+4!+5!+...+10!의 합계</td>'
			+ '          <td></td>' + '        </tr>' + '        <tr>'
			+ '          <td>피보나치(1+1+2+3+5+8+13+...)20번째 항까지 합</td>'
			+ '          <td></td>' + '        </tr>' + '</table>' + '</div>';
}

var createButtonLogin=()=>{
	return '<a id="a-login" href="#"><span class="glyphicon glyphicon-user" aria-hidden="true">'
	+ '&nbsp;Login</span></a>';
}

var createDiv=(x,y)=>{
	return '<div id="'+x+'" class="'+y+'"></div>';
}

var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}

var createATag=x=>{
	return '<a href="#">'+x+'</a>';
}

var createSpan=(x,y)=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true">'
	+ '&nbsp;'+y+'</span>';
}
//glyphicon-user
