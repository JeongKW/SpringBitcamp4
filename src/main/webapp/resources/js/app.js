var app = app || {};

app =(()=>{
  var init=x=>{
      $.getScript(x+'/resources/js/router.js',()=>{
        $.extend(new router(x));
        app.algorithm.onCreate();
      })
    };
  return{init:init};
})();

app.algorithm=(()=>{
  var $wrapper,context,algorithm,view;
  var onCreate =()=>{
      $wrapper = $('#wrapper');
      $content = $('#content');
      context = $.context();
      algorithm = $.javascript()+'/algorithm.js';
      view = $.javascript()+'/view.js';
      setContentView();
  };
  var setContentView=()=>{
      $wrapper.empty();
      $.getScript(view, ()=>{
        $wrapper.html(navigation());
        $(createButtonNav1st()).appendTo($('#div-nav-1st'))
        .click(()=>{
          alert('button click');
        });
        $(createButtonLogin()).appendTo($('#li-login'))
        .click(()=>{
          alert('Login button click!!');
        });
        $(createSequence()).appendTo($('#ul-util'))
        .click(()=>{
          $content.html(sequenceCalc());
        });
        $(createMath()).appendTo($('#ul-util'))
        .click(()=>{
          alert('Math button click!!');
        });
        $(createMatrix()).appendTo($('#ul-util'))
        .click(()=>{
          alert('Matrix button click!!');
        });
        $(createSort()).appendTo($('#ul-util'))
        .click(()=>{
          alert('Sort button click!!');
        });
        $(createApplication()).appendTo($('#ul-util'))
        .click(()=>{
          alert('Application button click!!');
        });
      });
    };
  return {onCreate:onCreate};
})();