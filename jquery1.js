$(document).ready(() => {
  console.log('모든 준비가 완료되었습니다.(1)');
  
  // 속성으로 검색하고 스타일 속성 적용하기
  $('[name=준일]').css('background-color', 'green');
  $('[name=준일]').css({
    backgroundColor: 'green',
    color: 'yellow',
  });
  
  // 객체 생성, 속성 추가, 스타일 적용, 자식 추가, 연결 그리고 삭제
  $('<div class="kingdom"></div>')
    .css({
      backgroundColor: 'orange',
      color: 'black',
    })
    .attr({
      class: 'organism',
      id: 'animal',
      planet: 'earth',
    })
    .html(`
      <h3>1.고양이</h3>
      <h3>2.코끼리</h3>
      <h3>3.강아지</h3>
      <h3>4.호랑이</h3>
      <h3>5.사자</h3>
      <h3>6.표범</h3>
      <h3>7.치타</h3>
      <h3>8.하이에나</h3>
      <h3>9.토끼</h3>
      <h3>10.돌고래</h3>
      <h3>11.문어</h3>
      <h3>12.수달</h3>
      <h3>13.송아지</h3>
      <h3>14.얼룩말</h3>
      <h3 id="bear">15.곰</h3>
      <span>짜잔~!!</span>
    `)
    .appendTo('body');
  
  // 요소 생성 및 추가 연결 방법
  $('<button>append</button>').attr('id', "btn1").appendTo('body');
  $('<button>appendTo</button>').attr('id', "btn2").appendTo('body');
  $('<button>prepend</button>').attr('id', "btn3").appendTo('body');
  $('<button>prependTo</button>').attr('id', "btn4").appendTo('body');
  $('<button>reset</button>').attr('id', "reset").appendTo('body');
  $('<p>[---]</p>').attr("id", "text").appendTo('body');
  
  // 이벤트 생성
  // on, off, one, trigger
  $('body').on(
    'click',
    '#btn1',
    () => $('#text').append('<span>appendText</span>'));
  
  $('#btn2').on(
    'click',
    () => $('<span>appendToText</span>').appendTo('#text'));
  
  $('#btn3').on({
    click: () => $('#text').prepend('<span>prependText</span>'),
  });
  
  $('#btn4').click(() => $('<span>prependToText</span>').prependTo('#text'));
  
  $('#reset').on('click', () => $('#text').text("[---]"));
  $('#btn1').trigger('click');
  
  // addClass, each
  $('h3').addClass((index) => `animal ${index + 1}`);
  $('h3').each((index, item) => {
    $(item).addClass(index % 2 === 0 ? 'odd' : 'even');
  })
  
  // filter, end, eq, first, last, add, is, find
  $('.animal:nth-child(3n + 1)')
    .each((index, item) => console.log(item.innerHTML));
  
  $('.animal')
    .filter(index => index % 3 === 0)
    .each((index, item) => console.log(item.innerHTML));
  
  $('.animal')
    .filter(':even').css('background', 'yellowgreen').end()
    .filter(':odd').css('color', 'white').end()
    .first().css('font-size', '30px').end()
    .last().css('color', 'blue').end()
    .eq(1).css('color', 'red');
  
  $('.animal').each((index, item) => {
    if ($(item).is('.4')) {
      $(item).css('font-size', '50px');
    }
  })
  
  // find() 는 자식들 중에서 찾는다.
  $('.kingdom').find('#bear').css(
    {
      color: 'yellow',
      fontSize: '30px',
      textAlign: 'center',
    });
  
  // remove() 는 호출한 자신을 제거한다.
  $('.kingdom').find("span").remove();
});

$(() => {
  console.log('모든 준비가 완료되었습니다.(2)');
  
  // $.each()
  const fruit = [
    'apple',
    'banana',
    'tomato',
    'grape',
  ];
  $.each(fruit, (index, item) => console.log(`${index}:${item}`));
  
  // $.extend()
  const object = {id: 'june7', name: '준이', age: 48};
  const result = $.extend(object, {id: 'june1'}, {name: '준일'});
  console.log(result);
});

window.onload = () => {
  console.log('모든 준비가 완료되었습니다.(3)');
  
  $('<div class="apple"></div>')
    .css({
      height: '100px',
      width: '200px',
      margin: '10px auto',
      border: '2px solid black',
      borderRadius: '10px',
      backgroundColor: 'yellowgreen',
      
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: '100px',
    })
    .text("백설공주와 사과")
    .appendTo('body');
  
  // 클래스 추가 및 삭제하기
  $('.apple').addClass(['cat', 'dog', 'tiger', 'lion']);
  $('.apple').removeClass(['tiger', 'lion']);
  
  // 속성 추가 및 조회 그리고 삭제
  $('.apple').attr({
    name: 'white-snow',
    age: '100',
    job: 'princess',
  })
  console.log("name: ", $('.apple').attr('name'));
  console.log("age: ", $('.apple').attr('age'));
  console.log("job: ", $('.apple').attr('job'));
  $('.apple').removeAttr('age');
  
  const name = $('div').attr('name');
  console.log(`name: ${name}`);
  
}

// 제일 먼저 실행된다.
document.addEventListener('DOMContentLoaded', () => {
  console.log('모든 준비가 완료되었습니다.(4)');
  
  /**
   * 1. DOM 생성
   * 2. 속성 추가 및 제거
   * 3. 내용 추가
   * 4. 생성한 DOM 요소를 부모에 연결
   */
  const div = document.createElement('div');
  div.setAttribute('class', 'first');
  div.setAttribute('id', 'june1');
  div.setAttribute('name', '준일');
  div.setAttribute('age', '48');
  div.removeAttribute('age');
  div.innerHTML = `
        <button class="btn create" style="width: 100px; margin: 10px;">create</button>
        <button class="btn remove" style="width: 100px; margin: 10px;">remove</button>
        <h1 class="target">빨간색입니다.</h1>
    `;
  document
    .querySelector('body')
    .appendChild(div);
  
  
  /**
   * DOM 요소 검색 및 이벤트 등록 및 삭제
   */
  const remove = div.querySelector('.btn.remove');
  remove.onclick = () => {
    console.log("타겟을 제거한다.");
    const target = document.querySelector('.target');
    if (target != null) {
      div.removeChild(target);
    }
  };
  
  
  /**
   * DOM 요소 검색 및 생성 그리고 연결, 이벤트 등록
   */
  const it = document.querySelector('[name=준일]');
  it.querySelector('.create')
    .addEventListener('click', () => {
      console.log("타겟을 생성한다.");
      const h1 = document.createElement('h1');
      h1.classList.add('target');
      const text = document.createTextNode('빨간색입니다.');
      h1.appendChild(text)
      div.appendChild(h1);
    });
  
  /**
   * 이벤트 버블링
   * 부모에게 이벤트 통합 및 타겟 찾아가기
   */
  const child = document.createElement('div');
  child.classList.add('second');
  child.onclick = event => {
    console.log('div 를 클릭했습니다.');
    if (event.currentTarget !== event.target) {
      console.log("div: 자식으로부터 이벤트 버블링 받았습니다.");
      // stopPropagation() 은 가능한 사용하지 않는다.
      console.log("div: 자식에게 받은 이벤트를 부모에게 전달하지 않겠습니다.");
      event.stopPropagation();
    }
  };
  
  const grandChild = document.createElement('button');
  grandChild.classList.add('third');
  grandChild.onclick = event => {
    // 기본적으로 할당되어 있는 이벤트를 무효화..
    // 예를 들면 submit() 의 경우 화면을 reload 하는 기능이 기본이다.
    // 이러한 기능을 무효화 하려면 preventDefault() 를 사용할 수 있다.
    event.preventDefault();
    console.log('button 을 클릭했습니다.');
  };
  
  child.appendChild(grandChild);
  document.body.appendChild(child);
  
  document.body.onclick = event => {
    console.log("body 를 클릭했습니다.")
    if (event.currentTarget !== event.target) {
      const t = event.target;
      console.log("body: 자식으로부터 이벤트 버블링 받았거나 혹은 이벤트 타겟이 다릅니다.");
      console.log(`body: 클릭당한 태그: ${t.tagName}, 클릭당한 클래스: ${t.className}`);
    }
  }
  
  /**
   *
   */
  const some = document.createElement('div');
  some.classList.add('some');
  document.body.appendChild(some);
});


