var app = app || {};

app =(()=>{
	var init=x=>{
	    $.getScript(x+'/resources/js/router.js',()=>{
	      $.extend(new router(x));
	      app.algorithm.onCreate();
	      app.member.onCreate();
	    })
	  };
	return{init:init};
})();

app.board=(()=>{
	
});
app.member=(()=>{
	var $wrapper,context,view,data;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    data = $.javascript()+'/data.js';
	    setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$content.html(
			$(createDiv({id : 'content', clazz : 'container'}))
			.attr('style', 'margin-top: 50px; border: 2px dashed red; padding: 20px')
			.append(loginView('div-login'))
			);
			$(createButton({id : 'login-btn', clazz : 'btn-primary btn-block', val : 'LOGIN'}))
			.appendTo('#div-login-btn')
			.on('click', e=>{
				e.preventDefault();
				var json = {
						'id' : $('#id').val(),
						'pass' : $('#password').val()
				}
				$.ajax({
					url : context+'/member/login',
					method : 'POST',
					data : JSON.stringify(json),
					dataType : 'json',
					contentType : 'application/json',
					success : x=>{
						alert('로그인 성공여부: '+x.success);
						if(x.success == 1){
							var json = {
									id : x.user.id,
									pass : x.user.pass,
									ssn : x.user.ssn,
									name : x.user.name,
									phone : x.user.phone,
									email : x.user.email,
									addr : x.user.addr,
									profile : x.user.profile
							}
							mypage(json);
						}
					},
					error : (x, h, m)=>{
						alert('로그인에서 에러 발생 x='+x+', h='+h+', m='+m);
					}
				});
			});
		});
	};
	var login=()=>{
                        
	};
	var mypage=x=>{
		alert('마이페이지를 구성하기 위한 정보 : '+x.id);
		$(createATag({id : 'a-board', val : createSpan({clazz : 'glyphicon-bullhorn', val : '자유게시판'})}))
		.appendTo('#li-board')
		.click(()=>{
			alert('자유게시판 click');
		});
		$content.html($(createDiv({id : 'content', clazz : 'container'}))
				.attr('style', 'padding-bottom: 0px')
				.append(createMypageTab({id : '', clazz : 'hover', json : x}))
				);
		$(function() {
			var phone = ('${phone.phoneNum}'=== '') ? "개통하기" : '${phone.phoneNum}';
			$('#td-phone').html('<a id="openPhone" href="#">'+phone+'</a>');
				
			$('#openPhone').on('click', function() {
				location.href = '${path.context}/mobile/shop';
			});
		});
	};
	return {onCreate:onCreate};
})();

app.algorithm=(()=>{
	var $wrapper,context,algorithm,view;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    algo = $.javascript()+'/algo.js';
	    setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
	    $.getScript(view, ()=>{
	    	var json = null;
	    	$wrapper.html(navigation());
	    	$content.html($(createDiv({id : 'div-home', clazz : 'container'})).attr('style', 'margin-top: 50px;'));
	    	$(createATag({ id : 'a-home', val : createSpan({clazz : 'glyphicon-home', val : 'HOME'})}))
	    	.appendTo('#li-home')
	    	.click(()=>{
	    		app.member.onCreate();
	    	});
	    	$(createATag({ id : '', val : createSpan({ clazz : 'glyphicon-user', val : '로그인'}) }))
	    	.appendTo('#li-login')
	    	.click(()=>{
	    		alert('login button click!');
	    	});
	    	json = { id : '', val : '수열' };
	    	$(createATag(json))
	    	.appendTo('#li-sequence')
	    	.click(()=>{
	    		$content.html($(createDiv({ id : 'content-tab', val : 'container' }))
	    				.attr('style', 'margin-top: 50px;')
	    				.append(createHTag({ num : '2', val : '수열 알고리즘' }))
	    				.append(createAlgoTab()));
	    		$('#tab-algo').attr('style', 'background-color: white;')
	    		$('#result-box').attr('style', 'padding: 20px 100px;')
	    		var $left=$('#tabLeft'),$right=$('#result-box'),$result=$('#li-result-answer');
	            $(createUL({id : 'ul-seq', clazz : 'list-group'})).appendTo($left);
	            $(createLI({id : 'li-arith', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-switch', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-geo', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-fact', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-fibo', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-result', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createATag({id : 'a-arith', val : '등차수열의 합'})).appendTo('#li-arith');
	            $(createATag({id : 'a-switch', val : '스위치수열의 합'})).appendTo('#li-switch');
	            $(createATag({id : 'a-geo', val : '등비수열의 합'})).appendTo('#li-geo');
	            $(createATag({id : 'a-fact', val : '팩토리얼수열의 합'})).appendTo('#li-fact');
	            $(createATag({id : 'a-fibo', val : '피보나치수열의 합'})).appendTo('#li-fibo');
	            $(createATag({id : '', val : '결과'})).attr('style', 'color:white').appendTo('#li-result');
	            // Default
	           
	            createInputText({id : 'first', clazz : 'form-control'})
				.attr('placeholder','초기값 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				createInputText({id : 'last', clazz : 'form-control'})
				.attr('placeholder','리미트값 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				createInputText({id : 'differ', clazz : 'form-control'})
				.attr('placeholder','공차 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				
				$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
				.appendTo($right)
				.attr('style','margin-top:10px;')
				.on('click',()=>{
					alert('click!');
	    			var x = $('#first').val();
	    			var y = $('#last').val();
	    			var z = $('#differ').val();
	    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
	    				$.getScript(algo, ()=>{
	    					alert('if true!');
	    					$('#li-result-answer').text(arith(x, y, z));
			    			$('#first').val("");
			    			$('#last').val("");
			    			$('#differ').val("");
	    				});
	    			} else {
	    				alert('값을 넣어주세요!');
	    			}
	    		});	
				$('#a-arith').attr('style', 'color: red; font-weight:bold');
				$('#a-switch').attr('style', 'color: black');
				$('#a-geo').attr('style', 'color: black');
				$('#a-fact').attr('style', 'color: black');
				$('#a-fibo').attr('style', 'color: black');
				
				$('#a-arith').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공차 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(arith(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}
		    		});
					$('#a-arith').attr('style', 'color: red; font-weight:bold');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
	
		
				$('#a-switch').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공차 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('switch click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(switchSeq(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: red; font-weight:bold');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
				$('#a-geo').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공비 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('geo click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(geo(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: red; font-weight:bold');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
				
				$('#a-fact').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('fact click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(fact(x, y));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: red; font-weight:bold');
					$('#a-fibo').attr('style', 'color: black');
				});
				
				$('#a-fibo').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','첫번째 갑 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','두번째값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리밋값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('fibo click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(fibo(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: red; font-weight:bold');
				});
				
	    	});
	    	
	    	
	    	
	    	$(createATag({id : '', val : '수학'}))
	    	.appendTo('#li-math')
	    	.click(()=>{
	    		alert('math button click!');
	    		$.getScript(algo, ()=>{
	    			$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
	    					.append(createHTag({num : '2', val : '수학 알고리즘'}))
	    					.append(createTab({id : 'tab-math', clazz : 'bordered', json : mathList()})));
	    			$('#tab-math').attr('style', 'background-color: white');
	    			$('#tab-math tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    			$('#a-th').attr('style', 'color: white');
	    			$('#1').remove();
	    			$('#2').remove();
	    			$('#3').remove();
	    			$('#4').remove();
	    			$('#5').remove();
	    			$('#0').attr('rowspan', mathList().length);
	    			$('#0').attr('style', 'background-color: #faffbd');
	    			$('#a-th').text(mathList()[0]);
	    			
	    			var $right=$('#0'), $result=$('#td-result');
	    			createInputText({id : 'rangeNum', clazz : 'form-control'})
					.attr('placeholder','구할 숫자의 범위 입력')
					.appendTo($right);
	    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click', ()=>{
						var x = $('#rangeNum').val();
						if(x !== '' && x>1) {
							$.getScript(algo, ()=>{
								$result.text('소수? '+primeNumber(x)+', '+x+' 까지의 소수 합: '+primeNumberSum(x)
										+', '+x+' 까지의 소수 개수: '+primeNumberCount(x));
								$('#rangeNum').val("");
							});
						} else {
							alert('값을 입력해 주세요.');
						}
						
					});
	    			
					$('#a-td0').attr('style', 'color: red; font-weight:bold');
					$('#a-td1').attr('style', 'color: black');
					$('#a-td2').attr('style', 'color: black');
					$('#a-td3').attr('style', 'color: black');
					$('#a-td4').attr('style', 'color: black');
					$('#a-td5').attr('style', 'color: black');
					
					$('#a-td0').on('click', ()=>{
						$('#a-th').text(mathList()[0]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'rangeNum', clazz : 'form-control'})
						.attr('placeholder','구할 숫자의 범위 입력')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							alert('눌림');
							var x = $('#rangeNum').val();
							if(x !== '' && x>1) {
								$.getScript(algo, ()=>{
									alert('눌림');
									$result.text('소수? '+primeNumber(x)+','+x+' 까지의 소수 합: '+primeNumberSum(x)
											+', '+x+' 까지의 소수 개수: '+primeNumberCount(x));
									$('#rangeNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});
		    			
						$('#a-td0').attr('style', 'color: red; font-weight:bold');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td1').on('click', ()=>{
						$('#a-th').text(mathList()[1]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','첫번째 정수를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','두번째 정수를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							if(x !== '' && x>0 && y !== '' && y>0) {
								$.getScript(algo, ()=>{
									$result.text('최대공약수: '+greatestCommonDivisor(x, y)
											+', 최소공배수: '+leastCommonMultiple(x, y));
									$('#firstNum').val("");
									$('#secondNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		    			
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: red; font-weight:bold');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					
					
					
					$('#a-td2').on('click', ()=>{
						$('#a-th').text(mathList()[2]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							if(x !== '' && x>0) {
								$.getScript(algo, ()=>{
									$result.text(x+' = '+primeFactorization(x));
									$('#firstNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		
						
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: red; font-weight:bold');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
		    			
		    			
					$('#a-td3').on('click', ()=>{
						$('#a-th').text(mathList()[3]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번째 숫자를 입력하세요.')
						.appendTo($right);	
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번째 숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text('최대값 : '+maxNum(x, y, z, a, b)+', 최소값 : '+minNum(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: red; font-weight:bold');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td4').on('click', ()=>{
						$('#a-th').text(mathList()[4]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							if(x !== '' && x>0) {
								$.getScript(algo, ()=>{
									$result.text('5의 배수 합: '+fiveMultipleSum(x));
									$('#firstNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: red; font-weight:bold');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td5').on('click', ()=>{
						$('#a-th').text(mathList()[5]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번째 숫자를 입력하세요.')
						.appendTo($right);	
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번째 숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text('근사값	 : '+findNearNum(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: red; font-weight:bold');
					});
					
	    		});
	    	});
	    	
	    	$(createATag({id : '', val : '배열'}))
	    	.appendTo('#li-matrix')
	    	.click(()=>{
	    		alert('matrix button click!');
	    		$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
    					.append(createHTag({num : '2', val : '배열 알고리즘'}))
    					.append(createTab({id : 'tab-matrix', clazz : 'bordered', json : sortList()})));
	    		$('#tab-matrix').attr('style', 'background-color: white');
	    		$('#tab-matrix tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    		$('#a-th').attr('style', 'color: white');
	    		$('#1').remove();
	    		$('#2').remove();
	    		$('#3').remove();
	    		$('#4').remove();
	    		$('#0').attr('rowspan', matrixList().length);
	    		$('#0').attr('style', 'border: 2px solid gray');
	    		$('#a-th').text(matrixList()[0]);
	    	});
	    	
	    	
			
			$(createATag({id : '', val : '정렬'}))
	    	.appendTo('#li-sort')
	    	.click(()=>{
	    		alert('sort button click!');
	    		$.getScript(algo, ()=>{
	    			$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
	    					.append(createHTag({num : '2', val : '정렬 알고리즘'}))
	    					.append(createTab({id : 'tab-sort', clazz : 'bordered', json : sortList()})));
	    			$('#tab-sort').attr('style', 'background-color: white');
	    			$('#tab-sort tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    			$('#a-th').attr('style', 'color: white');
	    			$('#1').remove();
	    			$('#2').remove();
	    			$('#3').remove();
	    			$('#4').remove();
	    			$('#0').attr('rowspan', sortList().length);
	    			$('#0').attr('style', 'background-color: #faffbd');
	    			$('#a-th').text(sortList()[0]);
	    			var $right=$('#0'), $result=$('#td-result');
	    			createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공차 입력')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						
					});
					$('#a-td0').attr('style', 'color: red; font-weight:bold');
					$('#a-td1').attr('style', 'color: black');
					$('#a-td2').attr('style', 'color: black');
					$('#a-td3').attr('style', 'color: black');
					$('#a-td4').attr('style', 'color: black');
					
					$('#a-td0').on('click', ()=>{
						$('#a-th').text(sortList()[0]);
						$right.empty();
		    			createInputText({id : 'first', clazz : 'form-control'})
						.attr('placeholder','초기값 입력')
						.appendTo($right);
						createInputText({id : 'last', clazz : 'form-control'})
						.attr('placeholder','리미트값 입력')
						.appendTo($right);
						createInputText({id : 'differ', clazz : 'form-control'})
						.attr('placeholder','공차 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{

						});
						$('#a-td0').attr('style', 'color: red; font-weight:bold');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
					
					$('#a-td1').on('click', ()=>{
						$('#a-th').text(sortList()[1]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(selectionSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: red; font-weight:bold');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
					
					$('#a-td2').on('click', ()=>{
						$('#a-th').text(sortList()[2]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(bubbleSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: red; font-weight:bold');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
										
					$('#a-td3').on('click', ()=>{
						$('#a-th').text(sortList()[3]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(insertSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: red; font-weight:bold');
						$('#a-td4').attr('style', 'color: black');
					});
					$('#a-td4').on('click', ()=>{
						$('#a-th').text(sortList()[4]);
						$right.empty();
		    			createInputText({id : 'first', clazz : 'form-control'})
						.attr('placeholder','초기값 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						createInputText({id : 'last', clazz : 'form-control'})
						.attr('placeholder','리미트값 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						createInputText({id : 'differ', clazz : 'form-control'})
						.attr('placeholder','공차 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: red; font-weight:bold');
					});
					
	    		});
	    	});
	    		    	
	    	
	    });
	  };
	return {onCreate:onCreate};
})();