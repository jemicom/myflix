
const moviesContainer = document.querySelector('.movies-container');
let movies = [];

const getMovies = async  ()=>{
    const API_URL = 'https://yts.mx/api/v2/list_movies.json';
    
    // fetch( API_URL )
    // .then( movies => movies.json())
    // .then( movies => {
    //     //console.log(movies.data.movies);
    //     movies = movies.data.movies;
    //     // console.log( movies )
    //     screenPrint(movies);
    // })
    
    let rawData =  await fetch( API_URL );
    let jsonData =  await rawData.json();
    // console.log( jsonData );
    movies = jsonData.data.movies; 
    screenPrint(movies);
}

getMovies();

const screenPrint = (movies)=>{
    moviesContainer.innerHTML = '';

    movies.map(movie=>{
        // console.log(movie); 
        const movieBox = document.createElement('div');
        movieBox.classList.add('movie-box');
        // console.log(movieBox);

        // const movieBoxCaption = document.createElement('div');
        // movieBox.classList.add('movie-box-caption');

        const movieCover = document.createElement('img');
        movieCover.classList.add('movie-cover');
        movieCover.setAttribute('src', movie.large_cover_image);
        // $('img').attr('src', arge_cover_image);
        movieBox.appendChild(movieCover);

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.innerHTML = movie.title; 
        movieBox.appendChild(movieTitle);
         
        const movieYear = document.createElement('div');
        movieYear.classList.add('movie-year');
        movieYear.innerHTML = `개봉연도 : ${movie.year}`; 
        movieBox.appendChild(movieYear);
         
        const movieRating = document.createElement('div');
        movieRating.classList.add('movie-rating');
        movieRating.innerHTML = movie.rating; 
        movieBox.appendChild(movieRating);
         
        const movieRuntime = document.createElement('div');
        movieRuntime.classList.add('movie-runtime');
        movieRuntime.innerHTML = `상영시간 : ${movie.runtime}`; 
        movieBox.appendChild(movieRuntime);
         
        const movieSummary = document.createElement('div');
        movieSummary.classList.add('movie-summary');
        movieSummary.innerHTML = '시놉시스 : ' + movie.summary.slice(0, 30) + '...'; 
        movieBox.appendChild(movieSummary);

        const detailBtn = document.createElement('a');
        detailBtn.setAttribute('href', movie.url)
        detailBtn.classList.add('movie-detail');
        detailBtn.innerHTML = '자세히 보기';
        movieBox.appendChild(detailBtn);
         
        
         
        const movieGenres = document.createElement('ul');
        movieGenres.classList.add('movie-genres');
        movie.genres.map(genre => {
            const li = document.createElement('li');
            li.innerHTML = genre;
            movieGenres.appendChild( li );
        })
        // console.log( movieGenres )
        movieBox.appendChild(movieGenres);

        moviesContainer.appendChild(movieBox);
    });
    
    
}

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', (event)=>{
    event.preventDefault(); // enter나 클릭했을때 화면을 자동 갱신 하는것 방지
    // console.log( movies ) ; // 빈배열 
    const searchText = document.querySelector('#search').value; 
    console.log(searchText);

    const searchMovies = movies.filter( movie =>  movie.title.toLowerCase().includes(searchText.toLowerCase() ));
    console.log( searchMovies);
    screenPrint( searchMovies );
})

const selectGenres = document.querySelector('#select-genres');
selectGenres.addEventListener('change', (event)=>{
    event.preventDefault();  

    // console.log( event.target.value );
    const searchText = event.target.value ; 
    
    const searchMovies = movies.filter( movie =>  movie.genres.find( genre => genre === searchText  ) );

    console.log( searchMovies);
    searchMovies.length ? screenPrint( searchMovies ) : screenPrint(movies);
    // falsy : false, 0 , undefined, NaN, Null
    // truesy : 0이 아닌 숫자 -5, 10, true, 문자열
})

const searchFormRating = document.querySelector('#searchFormRating');
searchFormRating.addEventListener('submit', (event)=>{
    event.preventDefault(); // enter나 클릭했을때 화면을 자동 갱신 하는것 방지
    // console.log( movies ) ; // 빈배열 
    const searchRating = document.querySelector('#searchRating').value; 
    console.log(searchRating);

    const searchMovies = movies.filter( movie =>  movie.rating >= searchRating );
    console.log( searchMovies);
    screenPrint( searchMovies );
})

const yearSort = document.querySelector('#yearSort');
const ratingSort = document.querySelector('#ratingSort');

let yearToggle = true; 
yearSort.addEventListener('click', ()=>{
    let sortMovies = [];

    if( yearToggle ){
        sortMovies = movies.sort(( a, b) => a.year - b.year);
    }else{
        sortMovies = movies.sort(( a, b) => b.year - a.year);
    }

    screenPrint( sortMovies );
    yearToggle = !yearToggle;
})

let ratingToggle = true; 
ratingSort.addEventListener('click', ()=>{
    let sortMovies = [];

    if( ratingToggle ){
        sortMovies = movies.sort(( a, b) => a.rating - b.rating);
    }else{
        sortMovies = movies.sort(( a, b) => b.rating - a.rating);
    }

    screenPrint( sortMovies );
    ratingToggle = !ratingToggle;
})


/// 언어팩 이동 
const  langSelect = document.querySelector('#langSelect');
langSelect.addEventListener('change', (e)=>{
    console.log( e.target.value );

    switch( e.target.value ){
        case "1": location.href = "http://www.naver.com"; break; 
        case "2": location.href = "http://www.daum.net"; break; 
    }
})

// tabs 
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function  selectItem(){
    tabItems.forEach( item => item.classList.remove('tab-border'));
    tabContentItems.forEach( item => item.classList.remove('show'));

    this.classList.add('tab-border');
    console.log( `#${this.id}-content` );

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}
tabItems.forEach( item => item.addEventListener('click', selectItem ));


// //반응형 사이즈 변할 때 css 클래스 추가 제거 
// window.addEventListener('resize', (event)=>{
//     console.log( window.innerWidth ); // 너비 갖고 오기
//     const brs = document.querySelectorAll('.br');
//     let winWidth = window.innerWidth;
//     if( winWidth <= 700 ){
//         brs.forEach( br => br.classList.remove('hide'))
//     }else{ 
//         brs.forEach( br => br.classList.add('hide'))
//     }
// })

const emailBtn = document.querySelector('.email-container button');
emailBtn.addEventListener('click', ()=>{
    document.querySelector('.email-form input').focus();
})

$(function(){
     
    $(window).on('resize', function(){
        console.log($(this).width());
        if( $(this).width() <= 700 ){
            $('.br').removeClass('hide');
        }else{
            $('.br').addClass('hide');
        }
    })    

})